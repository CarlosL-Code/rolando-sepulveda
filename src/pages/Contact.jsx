import { useState } from 'react';
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
    const message = `Hola, quisiera solicitar una cotización gratuita.\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nTeléfono: ${formData.telefono}\nConsulta: ${formData.mensaje}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-contact">
      {/* Hero Header */}
      <section className="hero" style={{minHeight: '60vh', backgroundImage: `url(${heroImg})`, backgroundPosition: 'center 30%'}}>
        <div className="container text-center">
          <div className="hero-content" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '0'}}>
            <h1>Contacto</h1>
            <p style={{fontSize: '1.2rem'}}>Estamos listos para asesorarlo. Solicite su cotización o envíenos sus inquietudes corporativas.</p>
          </div>
        </div>
      </section>

      {/* Quote Section (Reused from Home) */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-grid">
            
            <div className="quote-content">
              <h2>Información Corporativa</h2>
              <p>Comunícate directamente con nuestro equipo de expertos en Temuco.</p>
              
              <div className="icon-box-grid" style={{gridTemplateColumns: '1fr', gap: '40px'}}>
                <div className="icon-box">
                  <Icon icon="mdi:office-building" className="icon" />
                  <h5>Sede Principal</h5>
                  <p>{contacto.direccion}</p>
                </div>
                <div className="icon-box">
                  <Icon icon="mdi:email" className="icon" />
                  <h5>Correo Electrónico</h5>
                  <p><a href={`mailto:${contacto.email}`} style={{color: 'var(--color-text-light)'}}>{contacto.email}</a></p>
                </div>
                <div className="icon-box">
                  <Icon icon="mdi:phone-classic" className="icon" />
                  <h5>Teléfono Fijo</h5>
                  <p><a href={`tel:${contacto.telefono_fijo.replace(/[^\d+]/g, '')}`} style={{color: 'var(--color-text-light)'}}>{contacto.telefono_fijo}</a></p>
                </div>
                <div className="icon-box">
                  <Icon icon="mdi:whatsapp" className="icon" />
                  <h5>Atención Inmediata</h5>
                  <p><a href={whatsappLink('Hola, quisiera solicitar una cotización gratuita.')} target="_blank" rel="noreferrer" style={{color: 'var(--color-secondary)', fontWeight: 'bold'}}>{contacto.celular_whatsapp}</a></p>
                </div>
              </div>

              <div style={{marginTop: '40px'}}>
                <h4 style={{color: 'var(--color-primary)', marginBottom: '15px'}}>Síguenos en nuestras redes</h4>
                {data.redes_sociales.map((red, index) => (
                  <a key={index} href={red.url} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary)', color: '#fff', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', transition: 'background 0.3s'}}>
                    <Icon icon="mdi:facebook" style={{fontSize: '1.5rem'}} /> {red.red}
                  </a>
                ))}
              </div>
            </div>

            <div className="quote-form-container">
              <h3 style={{fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '20px'}}>Envíenos su Consulta</h3>
              <p style={{color: 'var(--color-text-light)', marginBottom: '30px'}}>Nuestro equipo analizará su requerimiento y le contactaremos a la brevedad posible.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="nombre" className="form-control" placeholder="Nombre Completo o Razón Social" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control" placeholder="Correo Electrónico Institucional" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="telefono" className="form-control" placeholder="Teléfono de Contacto" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <textarea name="mensaje" className="form-control" placeholder="Detalle su requerimiento o consulta corporativa..." value={formData.mensaje} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-cyan" style={{width: '100%', marginTop: '10px', padding: '15px', fontSize: '1rem', borderRadius: '8px', boxShadow: '0 5px 15px rgba(76, 195, 232, 0.4)'}}>
                  SOLICITAR COTIZACIÓN POR WHATSAPP
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
