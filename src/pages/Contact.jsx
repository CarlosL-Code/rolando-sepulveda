import { useState } from 'react';
import SeoHead from '../components/SeoHead';
import data from '../data.json';
import { Icon } from '@iconify/react';
import { whatsappLink } from '../utils/whatsapp';
import heroImg from '../assets/images/about.jpg';

const Contact = () => {
  const { contacto } = data;
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
    const message = `Hola, quisiera solicitar una cotización.\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nTeléfono: ${formData.telefono}\nConsulta: ${formData.mensaje}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-contact animate-up">
      <SeoHead
        title="Contacto | Contador en Temuco | Rolando Sepúlveda Auditorías"
        description="Contacta a tu contador en Temuco en Arturo Prat 696, of. 326 o por WhatsApp. Solicita tu cotización contable, tributaria o laboral hoy mismo."
        canonicalPath="/contacto"
      />

      {/* Hero Header */}
      <section className="hero" style={{minHeight: '45vh', backgroundImage: `url(${heroImg})`, backgroundPosition: 'center 30%', paddingTop: '120px'}}>
        <div className="container text-center">
          <div className="hero-content slide-up" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '0'}}>
            <h1>Contacto: Estudio Contable en Temuco</h1>
            <p style={{fontSize: '1.2rem', marginTop: '10px'}}>Estamos listos para asesorarte. Solicita tu cotización o envíanos tus consultas contables y tributarias.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{background: '#f1f5f9', padding: '100px 0'}}>
        <div className="container">
          <div className="contact-premium-wrapper">

            {/* Left Side: Dark Info Panel */}
            <div className="contact-premium-info">
              <h2>Información Corporativa</h2>
              <p>Comunícate directamente con nuestro equipo de expertos en Temuco. Resolveremos tus requerimientos contables, tributarios y laborales de manera oportuna y profesional.</p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Icon icon="mdi:office-building-marker" /></div>
                  <div>
                    <h3 style={{fontSize: '1.1rem', marginBottom: '3px'}}>Sede Principal</h3>
                    <span style={{color: '#94a3b8', fontSize: '0.95rem'}}>{contacto.direccion}</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Icon icon="mdi:email-fast-outline" /></div>
                  <div>
                    <h3 style={{fontSize: '1.1rem', marginBottom: '3px'}}>Correo Electrónico</h3>
                    <span style={{color: '#94a3b8', fontSize: '0.95rem'}}>{contacto.email}</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Icon icon="mdi:clock-outline" /></div>
                  <div>
                    <h3 style={{fontSize: '1.1rem', marginBottom: '3px'}}>Horario de Atención</h3>
                    <span style={{color: '#94a3b8', fontSize: '0.95rem'}}>{contacto.horario}</span>
                  </div>
                </div>
              </div>

              <div style={{marginTop: '45px', position: 'relative', zIndex: 2}}>
                <h3 style={{marginBottom: '15px', color: '#fff', fontSize: '1.1rem'}}>Atención Inmediata</h3>
                <a href={whatsappLink('Hola, necesito realizar una consulta corporativa.')} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{width: '100%', justifyContent: 'center', borderRadius: '50px', padding: '15px'}}>
                  <Icon icon="mdi:whatsapp" style={{fontSize: '1.4rem', marginRight: '8px'}} />
                  Chatear por WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side: Clean White Form */}
            <div className="contact-premium-form">
              <h2>Envíanos tu Consulta</h2>
              <p style={{color: 'var(--color-text-light)', marginBottom: '30px'}}>Nuestro equipo analizará tu requerimiento y te contactaremos a la brevedad.</p>

              <form onSubmit={handleSubmit}>
                <div className="responsive-form-row">
                  <div className="modern-input-group">
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)', fontSize: '0.9rem'}}>Nombre Completo *</label>
                    <input type="text" name="nombre" className="modern-input" placeholder="Ej. Juan Pérez" value={formData.nombre} onChange={handleChange} required />
                  </div>
                  <div className="modern-input-group">
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)', fontSize: '0.9rem'}}>Correo Electrónico *</label>
                    <input type="email" name="email" className="modern-input" placeholder="ejemplo@empresa.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="modern-input-group">
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)', fontSize: '0.9rem'}}>Teléfono Móvil *</label>
                  <input type="tel" name="telefono" className="modern-input" placeholder="+56 9 XXXX XXXX" value={formData.telefono} onChange={handleChange} required />
                </div>

                <div className="modern-input-group">
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-primary)', fontSize: '0.9rem'}}>Mensaje o Requerimiento *</label>
                  <textarea name="mensaje" className="modern-input" placeholder="Describe brevemente en qué podemos ayudarte..." value={formData.mensaje} onChange={handleChange} style={{minHeight: '150px', resize: 'vertical'}} required></textarea>
                </div>

                <button type="submit" className="btn btn-cyan btn-glow" style={{width: '100%', fontSize: '1.1rem', padding: '15px'}}>
                  <Icon icon="mdi:send" style={{marginRight: '8px', fontSize: '1.2rem'}} />
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
