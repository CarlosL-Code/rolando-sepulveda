import { Link } from 'react-router-dom';
import data from '../../data.json';

const NewsSection = () => {
  const articulos = data.blog_articulos;

  return (
    <section className="news-section">
      <div className="container">
        <div className="text-center section-header">
          <h2 className="section-title">Blog y Actualidad Tributaria</h2>
          <p className="section-subtitle">Guías prácticas para Pymes y empresas en Temuco sobre SII, IVA F29, Renta F22 y normativa laboral.</p>
        </div>

        <div className="news-tvn-layout">
          {articulos.length > 0 && (
            <Link
              to={`/blog/${articulos[0].slug}`}
              className="news-featured"
              style={{display: 'block', textDecoration: 'none', backgroundImage: `url('${articulos[0].imagen}')`}}
            >
              <div className="news-overlay-fixed">
                <span className="badge">{articulos[0].categoria}</span>
                <h3 style={{color: '#fff'}}>{articulos[0].titulo}</h3>
                <p style={{color: '#e2e8f0'}}>{articulos[0].resumen}</p>
              </div>
            </Link>
          )}
          <div className="news-sidebar">
            {articulos.slice(1).map((articulo) => (
              <Link
                to={`/blog/${articulo.slug}`}
                className="news-side-card"
                key={articulo.slug}
                style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}
              >
                <div className="side-img" style={{backgroundImage: `url('${articulo.imagen}')`}}></div>
                <div className="side-text">
                  <span className="meta">{articulo.categoria}</span>
                  <h4 style={{color: 'var(--color-heading)'}}>{articulo.titulo}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center" style={{marginTop: '35px'}}>
          <Link to="/blog" className="btn btn-cyan">VER TODOS LOS ARTÍCULOS DEL BLOG</Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
