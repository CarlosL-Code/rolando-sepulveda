import { useState } from 'react';
import data from '../data.json';
import { Icon } from '@iconify/react';
import seatedPortrait from '../assets/images/rolando-retrato-web.webp';
import brandLogo from '../assets/images/rolando-sepulveda-logo.png';
import { whatsappLink } from '../utils/whatsapp';

const Home = () => {
  const { profesional, empresa, tipos_de_sociedades_que_asesora } = data;
  
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
    <div className="page-home">
      {/* 1. Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${seatedPortrait})`}}>
        <div className="container">
          <div className="hero-content glass-panel animate-fade-up delay-100">
            <h1 style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>{empresa.nombre.toUpperCase()}</h1>
            <p style={{fontSize: '1.15rem', marginBottom: '30px', fontWeight: '500', textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>Servicios contables, tributarios y laborales para empresas y organizaciones en Temuco.</p>
            <a href="#contacto" className="btn btn-cyan animate-fade-up delay-300" style={{fontSize: '0.9rem', padding: '15px 30px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)'}}>
              SOLICITA TU COTIZACIÓN AHORA
            </a>
          </div>
        </div>
      </section>

      {/* 2. Features / Cards Section (Overlapping Hero) */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            
            <div className="feature-text-card animate-fade-up delay-100">
              <h3>¿Por qué elegirnos?</h3>
              <p>{empresa.mision.substring(0, 150)}...</p>
              <a href="#contacto" className="btn btn-dark">LEER MÁS</a>
            </div>
            
            <div className="feature-image-card animate-fade-up delay-200" style={{backgroundImage: 'linear-gradient(135deg, #35647b, #253f57)'}}>
              <div>
                <h4>{tipos_de_sociedades_que_asesora[0].tipo}</h4>
                <p>{tipos_de_sociedades_que_asesora[0].descripcion.substring(0, 100)}...</p>
              </div>
              <a href={whatsappLink('Hola, quisiera solicitar una cotización gratuita por asesoría para constituir una sociedad.')} className="btn btn-cyan" target="_blank" rel="noreferrer">COTIZAR POR WHATSAPP</a>
            </div>

            <div className="feature-image-card animate-fade-up delay-300" style={{backgroundImage: 'linear-gradient(135deg, #4b6e82, #34495e)'}}>
              <div>
                <h4>Transformación Digital</h4>
                <p>Aplicamos tecnología y sistemas de vanguardia en nuestro trabajo para un servicio de calidad.</p>
              </div>
              <a href={whatsappLink('Hola, quisiera consultar por los servicios contables para empresas.')} className="btn btn-dark" target="_blank" rel="noreferrer">COTIZAR POR WHATSAPP</a>
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
                Déjanos tus datos y cuéntanos qué necesitas. Abriremos WhatsApp con la información para solicitar una cotización.
              </p>

              <div className="icon-box-grid">
                <div className="icon-box">
                  <Icon icon="mdi:chess-rook" className="icon" />
                  <h5>Atención a empresas</h5>
                  <p>Cuéntanos sobre la necesidad de tu empresa u organización.</p>
                </div>
                <div className="icon-box">
                  <Icon icon="mdi:calculator" className="icon" />
                  <h5>Áreas contable y tributaria</h5>
                  <p>Consulta por el servicio que se ajuste a tu caso.</p>
                </div>
              </div>
            </div>

            <div className="quote-form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="nombre" className="form-control" placeholder="Tu Nombre Completo" aria-label="Tu nombre completo" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control" placeholder="Tu Correo Electrónico" aria-label="Tu correo electrónico" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="telefono" className="form-control" placeholder="Tu Teléfono de Contacto" aria-label="Tu teléfono de contacto" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <textarea name="mensaje" className="form-control" placeholder="Describe tu consulta o requerimiento..." aria-label="Describe tu consulta o requerimiento" value={formData.mensaje} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-cyan" style={{width: '100%', marginTop: '10px'}}>
                  SOLICITAR COTIZACIÓN POR WHATSAPP
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>Áreas de atención</h2>
          <p>Servicios contables, tributarios y laborales para empresas.</p>
          
          <div className="stats-grid">
            <div className="stat-item animate-fade-up">
              <Icon icon="mdi:account-outline" className="icon" />
              <h3>Contable</h3>
              <p>Servicios para empresas</p>
            </div>
            <div className="stat-item animate-fade-up delay-100">
              <Icon icon="mdi:tshirt-crew-outline" className="icon" />
              <h3>Tributaria</h3>
              <p>Asesoría</p>
            </div>
            <div className="stat-item animate-fade-up delay-200">
              <Icon icon="mdi:lightbulb-outline" className="icon" />
              <h3>Laboral</h3>
              <p>Servicios</p>
            </div>
            <div className="stat-item animate-fade-up delay-300">
              <Icon icon="mdi:map-marker-outline" className="icon" />
              <h3>Temuco</h3>
              <p>La Araucanía</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. About Split Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>Sobre nosotros</h2>
          <h3 style={{marginBottom: '5px'}}>{profesional.nombre_completo}</h3>
          <p style={{color: 'var(--color-primary)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '15px'}}>
            Servicios contables, tributarios y laborales
          </p>
          <p style={{fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '15px'}}>
            {empresa.mision}
          </p>
          <p style={{fontSize: '0.9rem', color: 'var(--color-text-light)'}}>
            {empresa.vision}
          </p>
        </div>
        <div className="about-image"><img src={brandLogo} alt="Rolando Sepúlveda Auditorías" loading="lazy" /></div>
      </section>

      {/* 5.5. Constitución de Sociedades Grid */}
      <section className="news-section" style={{background: '#f9f9f9'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '50px'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '10px'}}>Constitución de Sociedades</h2>
            <p style={{color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto'}}>Te asesoramos en la creación de tu empresa según tus objetivos comerciales.</p>
          </div>
          
          <div className="news-grid">
            {tipos_de_sociedades_que_asesora.map((sociedad, idx) => {
              const images = ['linear-gradient(135deg, #34495e, #52758a)', 'linear-gradient(135deg, #3e657a, #34495e)', 'linear-gradient(135deg, #34495e, #52758a)'];
              return (
              <div className="news-card animate-fade-up" style={{animationDelay: `${idx * 100}ms`}} key={idx}>
                  <div className="news-image" style={{backgroundImage: images[idx]}}></div>
                  <div className="news-content">
                    <h4 className="news-title">{sociedad.tipo}</h4>
                    <p className="news-meta">{sociedad.nombre_completo || 'Sociedad'}</p>
                    <p className="news-excerpt">{sociedad.descripcion}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Servicios / WhatsApp Quote Grid */}
      <section className="news-section">
        <div className="container">
          <div className="text-center animate-fade-up" style={{marginBottom: '50px'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '10px'}}>Cotiza Nuestros Servicios</h2>
            <p style={{color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto'}}>Brindamos soluciones integrales adaptadas a las necesidades de tu empresa. Cotiza fácilmente a través de WhatsApp.</p>
          </div>
          
          <div className="news-grid">
            {data.servicios.map((servicio, idx) => {
              const bgGradient = idx % 2 === 0 ? 'linear-gradient(135deg, #34495e, #52758a)' : 'linear-gradient(135deg, #3e657a, #253f57)';
              const quoteMessage = `Hola, quisiera solicitar una cotización por el servicio de: ${servicio}`;
              return (
                <div className="news-card animate-fade-up" style={{animationDelay: `${(idx % 3) * 100}ms`, boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderRadius: '8px', overflow: 'hidden'}} key={idx}>
                  <div className="news-image" style={{backgroundImage: bgGradient, height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0}}>
                    <Icon icon="mdi:briefcase-check" style={{fontSize: '4rem', color: 'rgba(255,255,255,0.7)'}} />
                  </div>
                  <div className="news-content" style={{display: 'flex', flexDirection: 'column', height: '100%', padding: '25px', background: '#fff'}}>
                    <h4 className="news-title" style={{minHeight: '40px', fontSize: '1.05rem', color: 'var(--color-primary)'}}>{servicio}</h4>
                    <p className="news-excerpt" style={{marginBottom: '20px', color: 'var(--color-text-light)', fontSize: '0.85rem'}}>Asesoría y gestión profesional en {servicio.toLowerCase()} para su organización.</p>
                    <a href={whatsappLink(quoteMessage)} className="btn btn-whatsapp" target="_blank" rel="noreferrer" style={{marginTop: 'auto', display: 'flex', justifyContent: 'center'}}>
                      <Icon icon="mdi:whatsapp" style={{marginRight: '8px', fontSize: '1.2rem'}}/> COTIZAR POR WHATSAPP
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Experience Banner & Overlapping Mission/Vision */}
      <section className="experience-banner">
        <div className="container text-center">
          <p className="subtitle-small">Asesoría Contable, Tributaria y Laboral</p>
          <h2>Asesoría contable, tributaria y laboral para empresas en Temuco</h2>
          <a href={whatsappLink('Hola, quisiera solicitar una cotización gratuita por los servicios contables.')} className="btn btn-cyan" target="_blank" rel="noreferrer">SOLICITAR COTIZACIÓN</a>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid animate-fade-up">
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
