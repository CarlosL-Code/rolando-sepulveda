import { useState } from 'react';
import data from '../data.json';
import { Icon } from '@iconify/react';
import { whatsappLink } from '../utils/whatsapp';

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
    <div className="page-contact animate-up">
      <div className="section" style={{paddingTop: '120px'}}>
        <div className="container">
          <div className="text-center">
            <h1 className="heading-lg text-primary">Contacto</h1>
            <p className="subtitle">Escríbenos para solicitar una cotización gratuita. El servicio se cotiza según el alcance de tu consulta.</p>
          </div>

          <div className="grid grid-2" style={{alignItems: 'start'}}>
            <div className="contact-info">
              <h2 className="heading-md">Información de Contacto</h2>
                <p style={{marginBottom: '2rem'}}>Comunícate con Rolando Sepúlveda Auditorías en Temuco.</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                  <Icon icon="mdi:account-tie" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                  <div>
                    <h4 style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>Rolando Sepúlveda Auditorías</h4>
                    <p style={{color: 'var(--color-text-light)'}}>Temuco, Chile</p>
                  </div>
                </div>
                
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                  <Icon icon="mdi:email" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                  <a href={`mailto:${contacto.email}`} style={{fontSize: '1.1rem'}}>{contacto.email}</a>
                </div>

                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                  <Icon icon="mdi:phone" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                  <a href={`tel:${contacto.telefono_fijo.replace(/[^\d+]/g, '')}`} style={{fontSize: '1.1rem'}}>{contacto.telefono_fijo}</a>
                </div>

                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                  <Icon icon="mdi:cellphone" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                  <a href={whatsappLink('Hola, quisiera solicitar una cotización gratuita.')} target="_blank" rel="noreferrer" style={{fontSize: '1.1rem'}}>WhatsApp: {contacto.celular_whatsapp}</a>
                </div>

                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                  <Icon icon="mdi:map-marker" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                  <span style={{fontSize: '1.1rem'}}>{contacto.direccion}</span>
                </div>
              </div>

              <div style={{marginTop: '3rem'}}>
                <h4 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>Síguenos en</h4>
                {data.redes_sociales.map((red, index) => (
                  <a key={index} href={red.url} target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-surface-hover)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)'}}>
                    <Icon icon="mdi:facebook" style={{fontSize: '1.5rem', color: '#1877F2'}} /> {red.red}
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-form">
              <h3 className="heading-sm text-primary" style={{marginBottom: '1.5rem'}}>Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" id="nombre" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono de contacto</label>
                  <input type="tel" id="telefono" name="telefono" className="form-control" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Servicio o consulta</label>
                  <textarea id="mensaje" name="mensaje" className="form-control" value={formData.mensaje} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                  Solicitar cotización gratuita por WhatsApp <Icon icon="mdi:whatsapp" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
