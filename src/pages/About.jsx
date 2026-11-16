import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SeoHead from '../components/SeoHead';
import data from '../data.json';
import { whatsappLink } from '../utils/whatsapp';
import rolandoDePie from '../assets/images/rolando-de-pie.jpg';
import heroImg from '../assets/images/about.jpg';

const About = () => {
  const { profesional, empresa, sobre_nosotros_pagina, tipos_de_sociedades_que_asesora } = data;

  return (
    <div className="page-about animate-up">
      <SeoHead
        title="Sobre Nosotros | Estudio Contable en Temuco | Rolando Sepúlveda"
        description="Conoce a Rolando Sepúlveda Auditorías, estudio contable en Temuco con más de 40 años de experiencia asesorando empresas y Pymes. ¡Agenda tu reunión!"
        canonicalPath="/sobre-nosotros"
      />

      {/* Hero Header */}
      <section className="hero" style={{minHeight: '45vh', backgroundImage: `url(${heroImg})`, backgroundPosition: 'center 30%', paddingTop: '120px'}}>
        <div className="container text-center">
          <div className="hero-content slide-up" style={{maxWidth: '850px', margin: '0 auto', paddingBottom: '0'}}>
            <h1>Sobre Nosotros: Tu Estudio Contable en Temuco</h1>
            <p style={{fontSize: '1.15rem', marginTop: '10px'}}>
              Más de 40 años brindando respaldo contable, tributario y laboral a empresas y Pymes de La Araucanía.
            </p>
          </div>
        </div>
      </section>

      {/* Profesional & Firma */}
      <section className="premium-about-section">
        <div className="container">
          <div className="about-overlap-grid">
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img src={rolandoDePie} alt={profesional.nombre_completo} className="about-photo" />
              </div>
              <div className="floating-badge">
                <h3>40+</h3>
                <p>Años de Experiencia</p>
              </div>
            </div>
            <div className="about-text-wrapper">
              <h2 className="section-title">{profesional.nombre_completo}</h2>
              <p className="profesional-credentials">{profesional.profesion} | {profesional.colegiatura}</p>
              <div className="separator"></div>
              <p className="about-desc">{sobre_nosotros_pagina.descripcion}</p>
              <ul style={{listStyle: 'none', padding: 0, marginTop: '20px'}}>
                {profesional.titulos_y_formacion.map((titulo, idx) => (
                  <li key={idx} style={{marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <Icon icon="mdi:check-circle" style={{color: 'var(--color-secondary)', fontSize: '1.2rem', flexShrink: 0}} />
                    <span>{titulo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section style={{background: '#f8fafc', padding: '80px 0'}}>
        <div className="container">
          <div className="mission-vision-grid">
            <div className="info-card">
              <h2>Nuestra Misión</h2>
              <p>{sobre_nosotros_pagina.mision}</p>
            </div>
            <div className="info-card">
              <h2>Nuestra Visión</h2>
              <p>{sobre_nosotros_pagina.vision}</p>
            </div>
          </div>

          <div style={{marginTop: '60px'}}>
            <div className="text-center section-header">
              <h2 className="section-title">Sociedades que Asesoramos en Temuco</h2>
              <p className="section-subtitle">Acompañamos la gestión contable y tributaria según la estructura legal de tu negocio.</p>
            </div>
            <div className="societies-grid">
              {tipos_de_sociedades_que_asesora.map((sociedad, idx) => (
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

      {/* CTA */}
      <section className="experience-banner">
        <div className="container text-center">
          <p className="subtitle-small">{empresa.nombre}</p>
          <h2>¿Buscas un contador de confianza en Temuco?</h2>
          <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px'}}>
            <Link to="/contacto" className="btn btn-cyan btn-glow">SOLICITAR REUNIÓN</Link>
            <a
              href={whatsappLink('Hola, quiero conocer más sobre sus servicios contables en Temuco.')}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="mdi:whatsapp" style={{fontSize: '1.2rem', marginRight: '6px'}} /> WHATSAPP DIRECTO
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
