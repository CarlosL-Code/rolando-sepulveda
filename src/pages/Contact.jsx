import { useState } from 'react';
import data from '../data.json';
import { Icon } from '@iconify/react';

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
    // As this is a static site demo, we just log the form data
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado (simulación). ¡Gracias por contactarnos!');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <div className="page-contact animate-up">
      <div className="section" style={{paddingTop: '120px'}}>
        <div className="container">
          <div className="text-center">
            <h1 className="heading-lg text-primary">Contacto</h1>
            <p className="subtitle">Estamos aquí para ayudarte. Contáctanos y agendaremos una evaluación gratuita.</p>
          </div>

          <div className="grid grid-2" style={{alignItems: 'start'}}>
            <div className="contact-info">
              <h2 className="heading-md">Información de Contacto</h2>
              <p style={{marginBottom: '2rem'}}>Comunícate directamente con nuestro equipo de profesionales.</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                  <Icon icon="mdi:account-tie" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                  <div>
                    <h4 style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>{contacto.responsable}</h4>
                    <p style={{color: 'var(--color-text-light)'}}>{contacto.cargo}</p>
                  </div>
                </div>
                
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                  <Icon icon="mdi:email" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                  <a href={`mailto:${contacto.email}`} style={{fontSize: '1.1rem'}}>{contacto.email}</a>
                </div>

                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                  <Icon icon="mdi:phone" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                  <a href={`tel:${contacto.telefono_fijo.replace(/\s+/g, '')}`} style={{fontSize: '1.1rem'}}>{contacto.telefono_fijo}</a>
                </div>

                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                  <Icon icon="mdi:cellphone" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                  <a href={`tel:${contacto.celular.replace(/\s+/g, '')}`} style={{fontSize: '1.1rem'}}>{contacto.celular}</a>
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
                  <label htmlFor="nombre">{contacto.formulario_contacto.campos[0]}</label>
                  <input type="text" id="nombre" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{contacto.formulario_contacto.campos[1]}</label>
                  <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">{contacto.formulario_contacto.campos[2]}</label>
                  <input type="tel" id="telefono" name="telefono" className="form-control" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">{contacto.formulario_contacto.campos[3]}</label>
                  <textarea id="mensaje" name="mensaje" className="form-control" value={formData.mensaje} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                  {contacto.formulario_contacto.boton} <Icon icon="mdi:send" />
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
