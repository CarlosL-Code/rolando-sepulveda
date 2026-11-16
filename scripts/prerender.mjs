import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function injectHeadAndBody(template, { html, head }) {
  let output = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  if (head.title) {
    const safeTitle = escapeHtml(head.title);
    output = output.replace(/<title>.*?<\/title>/s, `<title>${safeTitle}</title>`);
    output = output.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${safeTitle}" />`
    );
  }

  if (head.description !== undefined) {
    const safeDesc = escapeHtml(head.description);
    output = output.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${safeDesc}" />`
    );
    output = output.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${safeDesc}" />`
    );
  }

  if (head.canonicalUrl) {
    const safeUrl = escapeHtml(head.canonicalUrl);
    output = output.replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${safeUrl}" />`
    );
    output = output.replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${safeUrl}" />`
    );
  }

  if (head.ogType) {
    output = output.replace(
      /<meta property="og:type" content=".*?" \/>/,
      `<meta property="og:type" content="${escapeHtml(head.ogType)}" />`
    );
  }

  if (head.noindex) {
    output = output.replace('</head>', '    <meta name="robots" content="noindex, follow" />\n  </head>');
  }

  return output;
}

async function run() {
  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
  const dataRaw = await fs.readFile(path.join(rootDir, 'src', 'data.json'), 'utf-8');
  const data = JSON.parse(dataRaw);

  const serverEntry = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

  const routes = [
    '/',
    '/sobre-nosotros',
    '/servicios',
    ...data.servicios_detalle.map((s) => `/servicios/${s.slug}`),
    '/blog',
    ...data.blog_articulos.map((a) => `/blog/${a.slug}`),
    '/contacto',
    '/404',
  ];

  for (const route of routes) {
    const rendered = serverEntry.render(route);
    const fullHtml = injectHeadAndBody(template, rendered);

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : route === '/404'
          ? path.join(distDir, '404.html')
          : path.join(distDir, route.slice(1), 'index.html');

    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, fullHtml, 'utf-8');
    console.log(`Prerendered: ${route} -> ${path.relative(rootDir, outPath)}`);
  }

  await fs.rm(ssrDir, { recursive: true, force: true });
}

run().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
