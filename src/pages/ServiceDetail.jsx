import { Link, Navigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SeoHead from '../components/SeoHead';
import data from '../data.json';
import { whatsappLink } from '../utils/whatsapp';

const ServiceDetail = () => {
  const { slug } = useParams();
  const servicio = data.servicios_detalle.find((item) => item.slug === slug);

  if (!servicio) {
    return <Navigate to="/servicios" replace />;
  }

  const otrosServicios = data.servicios_detalle.filter((item) => item.slug !== slug);

  return (
    <div className="page-service-detail animate-up">
      <SeoHead
        title={servicio.meta_title}
        description={servicio.meta_description}
        canonicalPath={`/servicios/${servicio.slug}`}
      />

      {/* Hero Header */}
      <section className="hero" style={{minHeight: '45vh', backgroundImage: `url(${servicio.imagen})`, paddingTop: '140px'}}>
        <div className="container text-center">
          <div className="hero-content slide-up" style={{maxWidth: '880px', margin: '0 auto', paddingBottom: '0'}}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Inicio</Link>
              <span>/</span>
              <Link to="/servicios">Servicios</Link>
              <span>/</span>
              <span>{servicio.titulo_corto}</span>
            </nav>
            <h1>{servicio.titulo}</h1>
            <p style={{fontSize: '1.15rem', marginTop: '12px'}}>{servicio.resumen}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{background: '#f8fafc', padding: '80px 0'}}>
        <div className="container">
          <div className="service-detail-grid">
            <div className="info-card">
              <h2>¿En qué consiste este servicio?</h2>
              <p>{servicio.descripcion_larga}</p>

              <h3 style={{marginTop: '28px', marginBottom: '14px'}}>¿Qué incluye?</h3>
              <ul className="detail-checklist">
                {servicio.incluye.map((item, idx) => (
                  <li key={idx}>
                    <Icon icon="mdi:check-circle" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 style={{marginTop: '28px', marginBottom: '10px'}}>¿Para quién está pensado?</h3>
              <p>{servicio.ideal_para}</p>
            </div>

            <aside className="service-detail-sidebar">
              <div className="info-card">
                <h3>Beneficios clave</h3>
                <ul className="detail-checklist">
                  {servicio.beneficios.map((beneficio, idx) => (
                    <li key={idx}>
                      <Icon icon="mdi:star-circle" />
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '25px'}}>
                  <a
                    href={whatsappLink(`Hola, quiero cotizar el servicio de ${servicio.titulo_corto} en Temuco.`)}
                    className="btn btn-whatsapp"
                    style={{width: '100%', justifyContent: 'center'}}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon icon="mdi:whatsapp" style={{fontSize: '1.2rem', marginRight: '6px'}} /> COTIZAR POR WHATSAPP
                  </a>
                  <Link to="/contacto" className="btn btn-cyan" style={{width: '100%', justifyContent: 'center'}}>
                    ENVIAR FORMULARIO DE CONTACTO
                  </Link>
                </div>
              </div>

              <div className="info-card" style={{marginTop: '24px'}}>
                <h3>Otros Servicios</h3>
                <ul className="sidebar-links-list">
                  {otrosServicios.map((otro) => (
                    <li key={otro.slug}>
                      <Link to={`/servicios/${otro.slug}`}>
                        <Icon icon="mdi:arrow-right" /> {otro.titulo_corto}
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

export default ServiceDetail;
