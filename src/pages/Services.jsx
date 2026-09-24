import data from '../data.json';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../utils/whatsapp';
import heroImg from '../assets/images/hero.jpg';

const Services = () => {
  const servicios = data.servicios;

  return (
    <div className="page-services animate-up">
      {/* Hero Header */}
      <section className="hero" style={{minHeight: '50vh', backgroundImage: `url(${heroImg})`, paddingTop: '150px'}}>
        <div className="container text-center">
          <div className="hero-content slide-up" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '0'}}>
            <h1>Catálogo de Servicios</h1>
            <p style={{fontSize: '1.2rem', marginTop: '10px'}}>Soluciones corporativas e integrales diseñadas para el crecimiento y cumplimiento normativo de su empresa.</p>
          </div>
        </div>
      </section>

      {/* Services Compact Grid with Images */}
      <section className="premium-services-section" style={{background: '#f8fafc', padding: '80px 0'}}>
        <div className="container">
          <div className="compact-services-grid">
            {servicios.map((servicio, idx) => {
              const serviceImages = [
                'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80', // Contabilidad (calculadora/laptop)
                'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', // Auditoría (documentos/firma)
                'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', // RRHH (equipo/personas)
                'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80', // Tributaria (gráficos/análisis)
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', // Reestructuración (edificio corporativo)
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'  // Financiera (gráficos pantalla)
              ];
              const quoteMessage = `Hola, quisiera solicitar una cotización por el servicio de: ${servicio}`;
              return (
                <div className="compact-service-card" key={idx}>
                  <div className="service-card-img" style={{backgroundImage: `url(${serviceImages[idx % serviceImages.length]})`}}></div>
                  <div className="service-card-content">
                    <h3 style={{fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '15px'}}>{servicio}</h3>
                    <p style={{color: 'var(--color-text)', marginBottom: '20px'}}>Brindamos asesoría especializada en {servicio.toLowerCase()}, ayudando a optimizar sus procesos corporativos.</p>
                    
                    <ul style={{listStyle: 'none', marginBottom: '20px', padding: 0, flexGrow: 1}}>
                      <li style={{marginBottom: '8px', fontSize: '0.9rem'}}><Icon icon="mdi:check-circle" style={{color: 'var(--color-cyan)', marginRight: '5px'}} /> Análisis exhaustivo</li>
                      <li style={{marginBottom: '8px', fontSize: '0.9rem'}}><Icon icon="mdi:check-circle" style={{color: 'var(--color-cyan)', marginRight: '5px'}} /> Acompañamiento continuo</li>
                      <li style={{marginBottom: '8px', fontSize: '0.9rem'}}><Icon icon="mdi:check-circle" style={{color: 'var(--color-cyan)', marginRight: '5px'}} /> Soluciones personalizadas</li>
                    </ul>

                    <a href={whatsappLink(quoteMessage)} className="btn btn-whatsapp" style={{marginTop: 'auto', justifyContent: 'center', width: '100%', padding: '12px'}} target="_blank" rel="noreferrer">
                      <Icon icon="mdi:whatsapp" style={{fontSize: '1.2rem', marginRight: '5px'}}/> COTIZAR SERVICIO
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="experience-banner">
        <div className="container text-center">
          <p className="subtitle-small">¿Necesitas orientación específica?</p>
          <h2>Conversemos sobre cómo podemos ayudar a tu empresa a alcanzar el siguiente nivel</h2>
          <Link to="/contacto" className="btn btn-cyan btn-glow" style={{marginTop: '20px'}}>CONTÁCTANOS HOY MISMO</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
