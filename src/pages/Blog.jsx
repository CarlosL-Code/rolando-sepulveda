import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SeoHead from '../components/SeoHead';
import data from '../data.json';
import heroImg from '../assets/images/hero-3.jpg';

const Blog = () => {
  const articulos = data.blog_articulos;

  return (
    <div className="page-blog animate-up">
      <SeoHead
        title="Blog Contable y Tributario en Temuco | Guías SII para Pymes"
        description="Artículos prácticos sobre contabilidad en Temuco, IVA F29, Renta F22, constitución de empresas y normativa SII para Pymes. ¡Lee nuestras guías hoy!"
        canonicalPath="/blog"
      />

      <section className="hero" style={{minHeight: '45vh', backgroundImage: `url(${heroImg})`, paddingTop: '140px'}}>
        <div className="container text-center">
          <div className="hero-content slide-up" style={{maxWidth: '850px', margin: '0 auto', paddingBottom: '0'}}>
            <h1>Blog Contable y Tributario en Temuco</h1>
            <p style={{fontSize: '1.15rem', marginTop: '10px'}}>
              Consejos prácticos para empresas, Pymes y emprendedores de Temuco y La Araucanía.
            </p>
          </div>
        </div>
      </section>

      <section style={{background: '#f8fafc', padding: '80px 0'}}>
        <div className="container">
          <div className="blog-grid">
            {articulos.map((articulo) => (
              <article className="horizontal-service-card" key={articulo.slug}>
                <div className="service-card-img" style={{backgroundImage: `url(${articulo.imagen})`}}></div>
                <div className="service-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{articulo.categoria}</span>
                    <span><Icon icon="mdi:clock-outline" /> {articulo.tiempo_lectura}</span>
                  </div>
                  <h2 style={{fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '10px'}}>
                    <Link to={`/blog/${articulo.slug}`}>{articulo.titulo}</Link>
                  </h2>
                  <p style={{color: 'var(--color-text)', flexGrow: 1}}>{articulo.resumen}</p>
                  <Link
                    to={`/blog/${articulo.slug}`}
                    className="btn btn-cyan"
                    style={{marginTop: '15px', justifyContent: 'center', width: '100%'}}
                  >
                    LEER ARTÍCULO
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
