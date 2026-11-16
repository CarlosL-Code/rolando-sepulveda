import { Link, Navigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SeoHead from '../components/SeoHead';
import data from '../data.json';
import { whatsappLink } from '../utils/whatsapp';

const BlogPost = () => {
  const { slug } = useParams();
  const articulo = data.blog_articulos.find((item) => item.slug === slug);

  if (!articulo) {
    return <Navigate to="/blog" replace />;
  }

  const relacionados = data.blog_articulos.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="page-blog-post animate-up">
      <SeoHead
        title={articulo.meta_title}
        description={articulo.meta_description}
        canonicalPath={`/blog/${articulo.slug}`}
        ogType="article"
      />

      <section className="hero" style={{minHeight: '42vh', backgroundImage: `url(${articulo.imagen})`, paddingTop: '140px'}}>
        <div className="container text-center">
          <div className="hero-content slide-up" style={{maxWidth: '880px', margin: '0 auto', paddingBottom: '0'}}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Inicio</Link>
              <span>/</span>
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>{articulo.categoria}</span>
            </nav>
            <h1>{articulo.titulo}</h1>
            <p style={{fontSize: '1rem', marginTop: '10px', opacity: 0.9}}>
              {articulo.fecha} · {articulo.tiempo_lectura} de lectura
            </p>
          </div>
        </div>
      </section>

      <section style={{background: '#f8fafc', padding: '80px 0'}}>
        <div className="container">
          <div className="service-detail-grid">
            <article className="info-card blog-article-body">
              <p className="blog-lead">{articulo.resumen}</p>
              {articulo.contenido.map((bloque, idx) => (
                <section key={idx} style={{marginTop: '24px'}}>
                  <h2>{bloque.subtitulo}</h2>
                  <p>{bloque.texto}</p>
                </section>
              ))}

              <div className="blog-cta-box">
                <h3>¿Necesitas un Contador en Temuco?</h3>
                <p>En Rolando Sepúlveda Auditorías te ayudamos a mantener tu contabilidad, IVA F29, Renta F22 y remuneraciones al día.</p>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '15px'}}>
                  <a
                    href={whatsappLink(`Hola, leí el artículo "${articulo.titulo}" y necesito asesoría contable.`)}
                    className="btn btn-whatsapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon icon="mdi:whatsapp" style={{fontSize: '1.2rem', marginRight: '6px'}} /> COTIZAR POR WHATSAPP
                  </a>
                  <Link to="/contacto" className="btn btn-cyan">IR A CONTACTO</Link>
                </div>
              </div>
            </article>

            <aside className="service-detail-sidebar">
              <div className="info-card">
                <h3>Artículos Relacionados</h3>
                <ul className="sidebar-links-list">
                  {relacionados.map((rel) => (
                    <li key={rel.slug}>
                      <Link to={`/blog/${rel.slug}`}>
                        <Icon icon="mdi:file-document-outline" /> {rel.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="info-card" style={{marginTop: '24px'}}>
                <h3>Servicios Destacados</h3>
                <ul className="sidebar-links-list">
                  {data.servicios_detalle.map((serv) => (
                    <li key={serv.slug}>
                      <Link to={`/servicios/${serv.slug}`}>
                        <Icon icon="mdi:arrow-right" /> {serv.titulo_corto}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
