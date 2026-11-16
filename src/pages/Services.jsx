import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import data from '../data.json';
import { whatsappLink } from '../utils/whatsapp';
import heroImg from '../assets/images/hero.jpg';

const Services = () => {
  const servicios = data.servicios_detalle;
  const sociedades = data.tipos_de_sociedades_que_asesora;

  return (
    <div className="page-services animate-up">
      <SeoHead
        title="Servicios Contables en Temuco | IVA F29, Renta F22, Remuneraciones"
        description="Servicios de contabilidad mensual, declaración de IVA F29, Renta F22, remuneraciones y constitución de empresas en Temuco. ¡Cotiza gratis hoy!"
        canonicalPath="/servicios"
      />

      {/* Hero Header */}
      <section className="hero" style={{minHeight: '50vh', backgroundImage: `url(${heroImg})`, paddingTop: '150px'}}>
        <div className="container text-center">
          <div className="hero-content slide-up" style={{maxWidth: '850px', margin: '0 auto', paddingBottom: '0'}}>
            <h1>Servicios Contables, Tributarios y Laborales en Temuco</h1>
            <p style={{fontSize: '1.15rem', marginTop: '10px'}}>
              Soluciones integrales para empresas, Pymes y emprendedores de Temuco y La Araucanía con respaldo ante el SII.
            </p>
          </div>
        </div>
      </section>

      {/* Services Compact Grid with Links to Dedicated Pages */}
      <section className="premium-services-section" style={{background: '#f8fafc', padding: '80px 0'}}>
        <div className="container">
          <div className="horizontal-services-grid">
            {servicios.map((servicio) => {
              const quoteMessage = `Hola, quisiera solicitar una cotización por el servicio de: ${servicio.titulo_corto}`;
              return (
                <div className="horizontal-service-card" key={servicio.slug}>
                  <div className="service-card-img" style={{backgroundImage: `url(${servicio.imagen})`}}></div>
                  <div className="service-card-content">
                    <h2 style={{fontSize: '1.35rem', color: 'var(--color-primary)', marginBottom: '12px'}}>{servicio.titulo_corto}</h2>
                    <p style={{color: 'var(--color-text)', marginBottom: '18px'}}>{servicio.resumen}</p>

                    <ul style={{listStyle: 'none', marginBottom: '20px', padding: 0, flexGrow: 1}}>
                      {servicio.incluye.slice(0, 3).map((item, i) => (
                        <li key={i} style={{marginBottom: '8px', fontSize: '0.9rem'}}>
                          <Icon icon="mdi:check-circle" style={{color: 'var(--color-secondary)', marginRight: '6px'}} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto'}}>
                      <Link
                        to={`/servicios/${servicio.slug}`}
                        className="btn btn-dark"
                        style={{justifyContent: 'center', width: '100%', padding: '12px'}}
                      >
                        VER INFORMACIÓN COMPLETA
                      </Link>
                      <a
                        href={whatsappLink(quoteMessage)}
                        className="btn btn-whatsapp"
                        style={{justifyContent: 'center', width: '100%', padding: '12px'}}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon icon="mdi:whatsapp" style={{fontSize: '1.2rem', marginRight: '5px'}} /> COTIZAR SERVICIO
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{marginTop: '60px'}}>
            <div className="text-center section-header">
              <h2 className="section-title">Asesoría para todo tipo de sociedades</h2>
              <p className="section-subtitle">Adaptamos la contabilidad mensual, tributación y remuneraciones a la estructura de tu empresa.</p>
            </div>
            <div className="societies-grid">
              {sociedades.map((sociedad, idx) => (
                <div className="info-card" key={idx}>
                  <h3>{sociedad.tipo}</h3>
                  {sociedad.nombre_completo && <p className="society-full">{sociedad.nombre_completo}</p>}
                  <p>{sociedad.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="experience-banner">
        <div className="container text-center">
          <p className="subtitle-small">¿Necesitas orientación específica?</p>
          <h2>Conversemos sobre cómo podemos ayudar a tu empresa en Temuco</h2>
          <Link to="/contacto" className="btn btn-cyan btn-glow" style={{marginTop: '20px'}}>CONTÁCTANOS HOY MISMO</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
