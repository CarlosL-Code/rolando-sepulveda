import data from '../../data.json';

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="text-center section-header">
          <h2 className="section-title">Actualidad e Información</h2>
          <p className="section-subtitle">Manténgase al día con las últimas normativas y cambios tributarios.</p>
        </div>
        
        <div className="news-tvn-layout">
          {data.noticias_destacadas.length > 0 && (
            <a href={data.noticias_destacadas[0].url} target="_blank" rel="noopener noreferrer" className="news-featured" style={{display: 'block', textDecoration: 'none', backgroundImage: `url('${data.noticias_destacadas[0].imagen}')`}}>
              <div className="news-overlay-fixed">
                <span className="badge">{data.noticias_destacadas[0].fecha}</span>
                <h3 style={{color: '#fff'}}>{data.noticias_destacadas[0].titulo}</h3>
                <p style={{color: '#e2e8f0'}}>{data.noticias_destacadas[0].descripcion}</p>
              </div>
            </a>
          )}
          <div className="news-sidebar">
            {data.noticias_destacadas.slice(1).map((noticia, idx) => {
              return (
                <a href={noticia.url} target="_blank" rel="noopener noreferrer" className="news-side-card" key={idx} style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}>
                  <div className="side-img" style={{backgroundImage: `url('${noticia.imagen}')`}}></div>
                  <div className="side-text">
                    <span className="meta">{noticia.fecha}</span>
                    <h4 style={{color: 'var(--color-heading)'}}>{noticia.titulo}</h4>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
