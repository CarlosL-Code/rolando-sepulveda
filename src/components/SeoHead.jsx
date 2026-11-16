import { useEffect } from 'react';

const SITE_URL = 'https://contabilidadrs.cl';

function setMetaTag(selector, attribute, value, createTag) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

const SeoHead = ({ title, description, canonicalPath = '/', ogType = 'website' }) => {
  useEffect(() => {
    const normalizedPath = canonicalPath === '/' ? '/' : `/${canonicalPath.replace(/^\/+|\/+$/g, '')}`;
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;

    if (title) {
      document.title = title;
      setMetaTag('meta[property="og:title"]', 'content', title, () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        return meta;
      });
    }

    if (description) {
      setMetaTag('meta[name="description"]', 'content', description, () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        return meta;
      });
      setMetaTag('meta[property="og:description"]', 'content', description, () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        return meta;
      });
    }

    setMetaTag('link[rel="canonical"]', 'href', canonicalUrl, () => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      return link;
    });

    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      return meta;
    });

    setMetaTag('meta[property="og:type"]', 'content', ogType, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      return meta;
    });
  }, [title, description, canonicalPath, ogType]);

  return null;
};

export default SeoHead;
