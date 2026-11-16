import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';

const NotFound = () => {
  return (
    <div className="page-not-found animate-up">
      <SeoHead
        title="Página no encontrada | Rolando Sepúlveda Auditorías"
        description=""
        canonicalPath="/404"
        noindex
      />
      <section style={{padding: '160px 20px 100px', textAlign: 'center', minHeight: '65vh', display: 'flex', alignItems: 'center'}}>
        <div className="container" style={{maxWidth: '640px'}}>
          <p style={{fontSize: '4rem', fontWeight: '800', color: 'var(--color-secondary)', lineHeight: 1}}>404</p>
          <h1 style={{margin: '12px 0 16px', color: 'var(--color-primary)'}}>Página no encontrada</h1>
          <p style={{marginBottom: '28px'}}>
            La dirección que buscas no existe o fue trasladada. Puedes volver al inicio o revisar nuestros servicios contables en Temuco.
          </p>
          <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/" className="btn btn-cyan">VOLVER AL INICIO</Link>
            <Link to="/servicios" className="btn btn-dark">VER SERVICIOS</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
