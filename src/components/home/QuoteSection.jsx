import { useState } from 'react';
import { Icon } from '@iconify/react';
import { whatsappLink } from '../../utils/whatsapp';

const QuoteSection = () => {
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
              <div className="responsive-form-row">
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
  );
};

export default QuoteSection;
