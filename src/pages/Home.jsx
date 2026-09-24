import { useState, useEffect } from 'react';
import data from '../data.json';
import { Icon } from '@iconify/react';
import heroImg1 from '../assets/images/hero.jpg';
import heroImg2 from '../assets/images/about.jpg';
import rolandoDePie from '../assets/images/rolando-de-pie.jpg';
import { whatsappLink } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

const Home = () => {
  const { profesional, empresa } = data;
  
  // Hero Slider logic
  const heroImages = [heroImg1, heroImg2, 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80'];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

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
    const message = `Hola, quisiera solicitar una cotización gratuita.\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nTeléfono: ${formData.telefono}\nConsulta: ${formData.mensaje}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-home animate-up">
      {/* 1. Dynamic Hero Section */}
      <section className="hero">
        {heroImages.map((img, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${img})`,
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: 0
            }}
          ></div>
        ))}
        <div className="hero-overlay" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.7)', zIndex: 1}}></div>
        
        <div className="container text-center" style={{position: 'relative', zIndex: 2}}>
          <div className="hero-content">
            <h1 className="slide-up">{empresa.nombre.toUpperCase()}</h1>
            <p className="fade-in">Servicio profesional liderado por {profesional.nombre_completo}, Contador Público y Auditor. {profesional.experiencia} en asesorías contables y tributarias.</p>
            <div className="hero-buttons fade-in-delayed" style={{marginTop: '40px'}}>
              <a href="#contacto" className="btn btn-cyan" style={{marginRight: '15px'}}>COTIZA CON NOSOTROS</a>
              <Link to="/servicios" className="btn btn-glass">VER SERVICIOS</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Premium Quote Section */}
      <section className="premium-quote-section" id="contacto">
        <div className="container">
          <div className="premium-quote-grid">
            <div className="quote-text">
              <h2>Solicita una Cotización Personalizada</h2>
              <p>Envíanos tu información y requerimientos. Nuestro equipo de expertos preparará la mejor oferta para optimizar tus finanzas.</p>
              
              <div className="quote-features">
                <div className="q-feature">
                  <Icon icon="mdi:shield-check" className="q-icon" />
                  <div>
                    <h4>Confidencialidad Absoluta</h4>
                    <p>Tus datos financieros manejados con la más estricta reserva legal y ética.</p>
                  </div>
                </div>
                <div className="q-feature">
                  <Icon icon="mdi:clock-fast" className="q-icon" />
                  <div>
                    <h4>Respuesta Rápida</h4>
                    <p>Evaluamos tus necesidades y respondemos a la brevedad posible.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="premium-quote-form">
              <h3 style={{fontSize: '1.8rem', color: '#fff', marginBottom: '10px'}}>Comencemos tu Evaluación</h3>
              <p style={{color: '#94a3b8', marginBottom: '30px', fontSize: '0.95rem'}}>Nuestro equipo analizará su requerimiento corporativo y le contactaremos a la brevedad.</p>
              
              <form onSubmit={handleSubmit}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px'}}>
                  <div className="form-group" style={{margin: 0}}>
                    <input type="text" name="nombre" className="form-control premium-input" placeholder="Razón Social o Nombre Completo" value={formData.nombre} onChange={handleChange} required />
                  </div>
                  <div className="form-group" style={{margin: 0}}>
                    <input type="email" name="email" className="form-control premium-input" placeholder="Correo Corporativo" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group" style={{marginBottom: '15px'}}>
                  <input type="tel" name="telefono" className="form-control premium-input" placeholder="Teléfono Móvil" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{marginBottom: '20px'}}>
                  <textarea name="mensaje" className="form-control premium-input" placeholder="Describe brevemente tus necesidades corporativas..." value={formData.mensaje} onChange={handleChange} style={{minHeight: '120px', resize: 'vertical'}} required></textarea>
                </div>
                <button type="submit" className="btn btn-cyan btn-glow">
                  ENVIAR SOLICITUD
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section (Redesigned overlapping layout) */}
      <section className="premium-about-section" id="nuestra-firma">
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
              <h2 className="section-title">Nuestra Firma</h2>
              <h3 className="profesional-name">{profesional.nombre_completo}</h3>
              <p className="profesional-credentials">{profesional.profesion} | {profesional.colegiatura}</p>
              <div className="separator"></div>
              <p className="about-desc">{empresa.mision}</p>
              <div className="stats-row">
                <div className="mini-stat">
                  <h4>{empresa.estadisticas.clientes_felices}+</h4>
                  <span>Clientes</span>
                </div>
                <div className="mini-stat">
                  <h4>40+</h4>
                  <span>Años Exp.</span>
                </div>
                <div className="mini-stat">
                  <h4>{empresa.estadisticas.miembros_equipo}</h4>
                  <span>Expertos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Compact Premium Services Grid */}
      <section className="compact-services-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle">Soluciones estratégicas y contables adaptadas a su negocio.</p>
          </div>
          
          <div className="compact-services-grid">
            {data.servicios.map((servicio, idx) => {
              const serviceImages = [
                'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80', // Contabilidad (calculadora/laptop)
                'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', // Auditoría (documentos/firma)
                'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', // RRHH (equipo/personas)
                'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80', // Tributaria (gráficos/análisis)
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', // Reestructuración (edificio corporativo)
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'  // Financiera (gráficos pantalla)
              ];
              return (
                <div className="compact-service-card" key={idx}>
                  <div className="service-card-img" style={{backgroundImage: `url(${serviceImages[idx % serviceImages.length]})`}}></div>
                  <div className="service-card-content">
                    <h3>{servicio}</h3>
                    <p style={{flexGrow: 1}}>Gestión y asesoría profesional para optimizar el rendimiento y cumplimiento normativo.</p>
                    <a href={whatsappLink(`Hola, deseo cotizar el servicio: ${servicio}`)} className="btn btn-whatsapp" style={{marginTop: '15px', justifyContent: 'center', width: '100%', padding: '12px'}} target="_blank" rel="noreferrer">
                      <Icon icon="mdi:whatsapp" style={{fontSize: '1.2rem', marginRight: '5px'}} /> COTIZAR SERVICIO
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Actualidad / News TVN Style (Fixed text colors) */}
      <section className="news-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Actualidad e Información</h2>
            <p className="section-subtitle">Manténgase al día con las últimas normativas y cambios tributarios.</p>
          </div>
          
          <div className="news-tvn-layout">
            {data.noticias_destacadas.length > 0 && (
              <div className="news-featured" style={{backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80')`}}>
                <div className="news-overlay-fixed">
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

      {/* 5.5. Premium Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
            <p className="section-subtitle">Empresas que confían en nuestra trayectoria profesional.</p>
          </div>
          
          <div className="testimonials-grid">
            {[
              {
                nombre: 'Carlos Martínez',
                empresa: 'Constructora Sur SpA',
                comentario: 'La asesoría de Don Rolando ha sido fundamental para estructurar contablemente nuestros proyectos. Siempre transparentes, puntuales y con un nivel de profesionalismo intachable. Recomendados al 100%.',
                rating: 5
              },
              {
                nombre: 'Valentina Rojas',
                empresa: 'Clínica Médica Integral',
                comentario: 'Teníamos muchas dudas sobre la nueva ley tributaria y su equipo nos guio paso a paso. Desde que tomamos sus servicios, la gestión de nuestros recursos humanos y contabilidad funciona a la perfección.',
                rating: 5
              },
              {
                nombre: 'Felipe Valdés',
                empresa: 'Inversiones Valdés EIRL',
                comentario: 'Más de 5 años confiando la administración contable de mis negocios a esta firma. La tranquilidad que te da saber que estás respaldado por un equipo experto y con 40 años de experiencia no tiene precio.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="quote-mark">
                  <Icon icon="mdi:format-quote-open" />
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.comentario}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <Icon icon="mdi:account" />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.nombre}</h4>
                    <span>{testimonial.empresa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Massive CTA (Replacing Vision) */}
      <section className="massive-cta-section" style={{backgroundImage: `url(${heroImg2})`}}>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2>Impulsa el crecimiento y la seguridad de tu empresa hoy mismo</h2>
          <p>{empresa.vision}</p>
          <a href={whatsappLink('Hola, necesito contactar con un asesor experto para mi empresa.')} className="btn btn-cyan btn-lg btn-glow" target="_blank" rel="noreferrer">
            <Icon icon="mdi:whatsapp" style={{fontSize: '1.5rem', marginRight: '8px'}} />
            HABLAR CON UN ASESOR
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;




