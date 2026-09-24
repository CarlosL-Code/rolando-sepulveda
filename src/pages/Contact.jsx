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
    const message = `Hola, quisiera solicitar una cotización.\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nTeléfono: ${formData.telefono}\nConsulta: ${formData.mensaje}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-contact animate-up">
      {/* Hero Header */}
      <section className="hero" style={{minHeight: '50vh', backgroundImage: `url(${heroImg})`, backgroundPosition: 'center 30%', paddingTop: '150px'}}>
        <div className="container text-center">
          <div className="hero-content slide-up" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '0'}}>
            <h1>Contacto</h1>
            <p style={{fontSize: '1.2rem', marginTop: '10px'}}>Estamos listos para asesorarlo. Solicite su cotización o envíenos sus inquietudes corporativas.</p>
          </div>
        </div>
      </section>

      {/* Premium Quote Section */}
      <section className="premium-quote-section" style={{background: '#f8fafc', padding: '80px 0'}}>
        <div className="container">
          <div className="premium-quote-grid">
            
            <div className="quote-text">
              <h2>Información Corporativa</h2>
              <p>Comunícate directamente con nuestro equipo de expertos en Temuco. Resolveremos tus requerimientos contables, tributarios y laborales de manera oportuna.</p>
              
              <div className="quote-features" style={{marginTop: '40px', gap: '25px'}}>
                <div className="q-feature">
                  <Icon icon="mdi:office-building" className="q-icon" />
                  <div>
                    <h4>Sede Principal</h4>
                    <p>{contacto.direccion}</p>
                  </div>
                </div>
                <div className="q-feature">
                  <Icon icon="mdi:email" className="q-icon" />
                  <div>
                    <h4>Correo Electrónico</h4>
                    <p><a href={`mailto:${contacto.email}`} style={{color: 'var(--color-text-light)'}}>{contacto.email}</a></p>
                  </div>
                </div>
                <div className="q-feature">
                  <Icon icon="mdi:phone-classic" className="q-icon" />
                  <div>
                    <h4>Teléfono Fijo</h4>
                    <p><a href={`tel:${contacto.telefono_fijo.replace(/[^\d+]/g, '')}`} style={{color: 'var(--color-text-light)'}}>{contacto.telefono_fijo}</a></p>
                  </div>
                </div>
                <div className="q-feature">
                  <Icon icon="mdi:whatsapp" className="q-icon" />
                  <div>
                    <h4>Atención Inmediata</h4>
                    <p><a href={whatsappLink('Hola, necesito realizar una consulta.')} target="_blank" rel="noreferrer" style={{color: 'var(--color-cyan)', fontWeight: 'bold'}}>{contacto.celular_whatsapp}</a></p>
                  </div>
                </div>
              </div>

              <div style={{marginTop: '40px'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '15px'}}>Síguenos en nuestras redes</h4>
                {data.redes_sociales.map((red, index) => (
                  <a key={index} href={red.url} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary)', color: '#fff', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', transition: 'background 0.3s'}}>
                    <Icon icon="mdi:facebook" style={{fontSize: '1.5rem'}} /> {red.red}
                  </a>
                ))}
              </div>
            </div>

            <div className="premium-quote-form">
              <h3 style={{fontSize: '1.8rem', color: '#fff', marginBottom: '10px'}}>Envíenos su Consulta</h3>
              <p style={{color: '#94a3b8', marginBottom: '30px', fontSize: '0.95rem'}}>Nuestro equipo analizará su requerimiento corporativo y le contactaremos a la brevedad.</p>
              
              <form onSubmit={handleSubmit}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px'}}>
                  <div className="form-group" style={{margin: 0}}>
                    <input type="text" name="nombre" className="form-control premium-input" placeholder="Nombre Completo" value={formData.nombre} onChange={handleChange} required />
                  </div>
                  <div className="form-group" style={{margin: 0}}>
                    <input type="email" name="email" className="form-control premium-input" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group" style={{marginBottom: '15px'}}>
                  <input type="tel" name="telefono" className="form-control premium-input" placeholder="Teléfono Móvil" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{marginBottom: '20px'}}>
                  <textarea name="mensaje" className="form-control premium-input" placeholder="Describe brevemente tus requerimientos o consultas..." value={formData.mensaje} onChange={handleChange} style={{minHeight: '120px', resize: 'vertical'}} required></textarea>
                </div>
                <button type="submit" className="btn btn-cyan btn-glow">
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
