import data from '../data.json';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../utils/whatsapp';
import heroImg from '../assets/images/hero.jpg';

const Services = () => {
  const servicios = data.servicios;

  return (
    <div className="page-services">
      {/* Hero Header */}
      <section className="hero" style={{minHeight: '60vh', backgroundImage: `url(${heroImg})`}}>
        <div className="container text-center">
          <div className="hero-content" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '0'}}>
            <h1>Catálogo de Servicios</h1>
            <p style={{fontSize: '1.2rem'}}>Soluciones corporativas e integrales diseñadas para el crecimiento y cumplimiento normativo de su empresa.</p>
          </div>
        </div>
      </section>

      {/* Services Premium Grid (Reused from Home) */}
      <section className="premium-services-section">
        <div className="container">
          
          <div className="premium-services-grid">
            {servicios.map((servicio, idx) => {
              const bgImages = [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
                'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
                'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
                'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
                'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
              ];
              const quoteMessage = `Hola, quisiera solicitar una cotización por el servicio de: ${servicio}`;
              return (
                <div className={`premium-service-row ${idx % 2 !== 0 ? 'reverse' : ''}`} key={idx}>
                  <div className="service-img" style={{backgroundImage: `url(${bgImages[idx]})`}}></div>
                  <div className="service-text">
                    <Icon icon="mdi:check-decagram" className="service-icon" />
                    <h3>{servicio}</h3>
                    <p>Brindamos asesoría especializada en {servicio.toLowerCase()}, ayudando a optimizar sus procesos y a mantener la máxima transparencia corporativa.</p>
                    <ul style={{listStyle: 'none', marginBottom: '30px', padding: 0}}>
                      <li style={{marginBottom: '10px'}}><Icon icon="mdi:check-circle" style={{color: 'var(--color-secondary)'}} /> Análisis exhaustivo</li>
                      <li style={{marginBottom: '10px'}}><Icon icon="mdi:check-circle" style={{color: 'var(--color-secondary)'}} /> Acompañamiento continuo</li>
                      <li style={{marginBottom: '10px'}}><Icon icon="mdi:check-circle" style={{color: 'var(--color-secondary)'}} /> Soluciones personalizadas</li>
                    </ul>
                    <a href={whatsappLink(quoteMessage)} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                      <Icon icon="mdi:whatsapp" style={{marginRight: '8px', fontSize: '1.3rem'}}/> COTIZAR SERVICIO
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
          <Link to="/contacto" className="btn btn-cyan">CONTÁCTANOS HOY MISMO</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
