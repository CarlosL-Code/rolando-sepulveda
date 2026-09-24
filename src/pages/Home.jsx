import { useState, useEffect } from 'react';
import data from '../data.json';
import { Icon } from '@iconify/react';
import heroImg from '../assets/images/hero.jpg';
import aboutImg from '../assets/images/about.jpg';
import { whatsappLink } from '../utils/whatsapp';

const Home = () => {
  const { profesional, empresa, tipos_de_sociedades_que_asesora, noticias_destacadas } = data;
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias!');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <div className="page-home">
      {/* 1. Hero Section */}
      <section className="hero">
        <button className="slider-arrow prev-arrow"><Icon icon="mdi:chevron-left" /></button>
        <button className="slider-arrow next-arrow"><Icon icon="mdi:chevron-right" /></button>

        <div className="container">
          <div className="hero-content">
            <h1>{empresa.nombre.toUpperCase()}</h1>
            <p>Servicio profesional liderado por {profesional.nombre_completo}, {profesional.profesion}. {profesional.experiencia}.</p>
            <a href="#contacto" className="hero-link">
              <Icon icon="mdi:chevron-right" className="icon-cyan"/> ¡Contáctanos ahora!
            </a>
          </div>
        </div>
      </section>

      {/* 2. Features / Cards Section (Overlapping Hero) */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            
            <div className="feature-text-card">
              <h3>¿Por qué elegirnos?</h3>
              <p>{empresa.mision.substring(0, 150)}...</p>
              <a href="#contacto" className="btn btn-dark">LEER MÁS</a>
            </div>
            
            <div className="feature-image-card" style={{backgroundImage: `url(${aboutImg})`}}>
              <div>
                <h4>{tipos_de_sociedades_que_asesora[0].tipo}</h4>
                <p>{tipos_de_sociedades_que_asesora[0].descripcion.substring(0, 100)}...</p>
              </div>
              <a href="#contacto" className="btn btn-cyan">LEER MÁS</a>
            </div>

            <div className="feature-image-card" style={{backgroundImage: `url(${heroImg})`}}>
              <div>
                <h4>Transformación Digital</h4>
                <p>Aplicamos tecnología y sistemas de vanguardia en nuestro trabajo para un servicio de calidad.</p>
              </div>
              <a href="#contacto" className="btn btn-dark">LEER MÁS</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quote Section */}
      <section className="quote-section" id="contacto">
        <div className="container">
          <div className="quote-grid">
            
            <div className="quote-content">
              <h2>Solicita una Cotización Gratuita</h2>
              <p>¡Te responderemos a la brevedad posible!</p>
              <p style={{color: 'var(--color-text-light)', fontSize: '0.85rem', marginTop: '20px'}}>
                Envíanos tu información completando el formulario. Nuestros expertos prepararán la mejor oferta para que tu negocio funcione de la manera más fluida.
              </p>

              <div className="icon-box-grid">
                <div className="icon-box">
                  <Icon icon="mdi:chess-rook" className="icon" />
                  <h5>Servicio Personalizado</h5>
                  <p>Enfocándonos a pequeñas, medianas y grandes empresas que requieran de nuestros servicios.</p>
                </div>
                <div className="icon-box">
                  <Icon icon="mdi:calculator" className="icon" />
                  <h5>Experiencia Comprobada</h5>
                  <p>{profesional.experiencia}. Miembro del {profesional.colegiatura}.</p>
                </div>
              </div>
            </div>

            <div className="quote-form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="nombre" className="form-control" placeholder="Tu Nombre Completo" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control" placeholder="Tu Correo Electrónico" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="telefono" className="form-control" placeholder="Tu Teléfono de Contacto" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <textarea name="mensaje" className="form-control" placeholder="Describe tu consulta o requerimiento..." value={formData.mensaje} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-cyan" style={{width: '100%', marginTop: '10px'}}>
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>Nuestra Experiencia, Habilidades y Especialidad.</h2>
          <p>Te brindamos las mejores soluciones posibles para el crecimiento y prosperidad de tu negocio.</p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <Icon icon="mdi:account-outline" className="icon" />
              <h3>{empresa.estadisticas.clientes_felices}+</h3>
              <p>Clientes Felices</p>
            </div>
            <div className="stat-item">
              <Icon icon="mdi:tshirt-crew-outline" className="icon" />
              <h3>{empresa.estadisticas.miembros_equipo}</h3>
              <p>Miembros del Equipo</p>
            </div>
            <div className="stat-item">
              <Icon icon="mdi:lightbulb-outline" className="icon" />
              <h3>{empresa.estadisticas.cantidad_servicios}+</h3>
              <p>Tipos de Servicios</p>
            </div>
            <div className="stat-item">
              <Icon icon="mdi:map-marker-outline" className="icon" />
              <h3>40+</h3>
              <p>Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. About Split Section */}
      <section className="about-section" id="sobre-nosotros">
        <div className="about-content">
          <h2 style={{fontSize: '2.5rem', marginBottom: '15px'}}>Sobre nosotros</h2>
          <h3 style={{marginBottom: '5px', color: 'var(--color-primary)'}}>{profesional.nombre_completo}</h3>
          <p style={{color: 'var(--color-secondary)', fontSize: '1rem', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px'}}>
            {profesional.profesion} | {profesional.colegiatura}
          </p>
          <div style={{width: '60px', height: '4px', background: 'var(--color-secondary)', marginBottom: '25px'}}></div>
          <p style={{fontSize: '1rem', color: 'var(--color-text)', marginBottom: '20px', lineHeight: '1.8'}}>
            {empresa.mision}
          </p>
          <p style={{fontSize: '1rem', color: 'var(--color-text)', lineHeight: '1.8'}}>
            {empresa.vision}
          </p>
        </div>
        <div className="about-image" style={{backgroundImage: `url('/src/assets/images/rolando-de-pie.jpg')`, backgroundPosition: 'center top'}}></div>
      </section>

      {/* 6. Servicios Premium Grid */}
      <section className="premium-services-section">
        <div className="container">
          <div className="text-center" style={{marginBottom: '60px'}}>
            <h2 style={{fontSize: '2.8rem', color: 'var(--color-primary)', marginBottom: '15px'}}>Nuestros Servicios</h2>
            <div style={{width: '80px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto 20px'}}></div>
            <p style={{color: 'var(--color-text)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem'}}>Brindamos soluciones integrales adaptadas a las necesidades de tu empresa. Conoce nuestras áreas de especialidad.</p>
          </div>
          
          <div className="premium-services-grid">
            {data.servicios.map((servicio, idx) => {
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
                    <p>Ofrecemos un enfoque personalizado y estratégico en {servicio.toLowerCase()}, asegurando el cumplimiento normativo y el crecimiento sostenido de su negocio en el competitivo mercado actual.</p>
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

      {/* 6.5. Actualidad / News TVN Style */}
      <section className="news-section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '50px'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '10px'}}>Actualidad e Información Clave</h2>
            <div style={{width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto 20px'}}></div>
          </div>
          
          <div className="news-tvn-layout">
            {data.noticias_destacadas.length > 0 && (
              <div className="news-featured" style={{backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80')`}}>
                <div className="news-overlay">
                  <span className="badge">{data.noticias_destacadas[0].fecha}</span>
                  <h3>{data.noticias_destacadas[0].titulo}</h3>
                  <p>{data.noticias_destacadas[0].descripcion}</p>
                </div>
              </div>
            )}
            <div className="news-sidebar">
              {data.noticias_destacadas.slice(1).map((noticia, idx) => {
                const stockImages = [
                  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
                ]; 
                return (
                  <div className="news-side-card" key={idx}>
                    <div className="side-img" style={{backgroundImage: `url(${stockImages[idx]})`}}></div>
                    <div className="side-text">
                      <span className="meta">{noticia.fecha}</span>
                      <h4>{noticia.titulo}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Experience Banner & Overlapping Mission/Vision */}
      <section className="experience-banner">
        <div className="container text-center">
          <p className="subtitle-small">Asesoría Contable, Tributaria y Laboral</p>
          <h2>{profesional.experiencia}, ayudando a empresas a encontrar soluciones integrales</h2>
          <a href="#contacto" className="btn btn-cyan">LEER MÁS</a>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <h4>Nuestra Misión</h4>
              <p>{empresa.mision}</p>
            </div>
            <div className="mv-card">
              <h4>Nuestra Visión</h4>
              <p>{empresa.vision}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
