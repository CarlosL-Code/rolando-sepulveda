import data from '../data.json';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../utils/whatsapp';

const Services = () => {
  const servicios = {
    lista_servicios: data.servicios,
    tipos_de_constitucion_de_sociedades: data.tipos_de_sociedades_que_asesora,
    llamado_accion: '¿Necesitas orientación para tu empresa?'
  };

  return (
    <div className="page-services animate-up">
      <div className="section" style={{paddingTop: '120px', paddingBottom: '40px'}}>
        <div className="container">
          <div className="text-center">
            <h1 className="heading-lg text-primary">Nuestros Servicios</h1>
            <p className="subtitle">Asesoría experta adaptada a las necesidades de tu empresa.</p>
          </div>
          
          <div className="grid grid-2">
            {servicios.lista_servicios.map((servicio, index) => (
              <div key={index} className="card service-quote-card" style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', flexWrap: 'wrap'}}>
                <Icon icon="mdi:check-circle-outline" style={{fontSize: '2rem', color: 'var(--color-secondary)'}} />
                <h4 style={{fontSize: '1.1rem', margin: 0, color: 'var(--color-primary)'}}>{servicio}</h4>
                <a className="btn btn-primary" href={whatsappLink(`Hola, quisiera solicitar una cotización gratuita por el servicio de ${servicio}.`)} target="_blank" rel="noreferrer">Cotizar gratis por WhatsApp</a>
              </div>
            ))}
          </div>
          <p className="validation-note">Los servicios listados proceden de la demo existente. Confirma con Rolando cuáles siguen vigentes y su alcance antes de publicar.</p>
        </div>
      </div>

      <div className="section section-bg-primary">
        <div className="container">
          <h2 className="heading-md text-center">Constitución de Sociedades</h2>
          <p className="subtitle text-center" style={{color: 'rgba(255,255,255,0.8)'}}>Te asesoramos en la creación de tu empresa según tus objetivos comerciales.</p>
          
          <div className="grid grid-3">
            {servicios.tipos_de_constitucion_de_sociedades.map((sociedad, index) => (
              <div key={index} className="card" style={{color: 'var(--color-text)'}}>
                <div className="card-icon"><Icon icon="mdi:domain" /></div>
                <h3 className="heading-sm text-primary">{sociedad.tipo}</h3>
                {sociedad.nombre_completo && <p style={{fontWeight: '600', marginBottom: '0.5rem'}}>{sociedad.nombre_completo}</p>}
                <p style={{fontSize: '0.9rem'}}>{sociedad.descripcion}</p>
                <a className="btn btn-primary" href={whatsappLink(`Hola, quisiera solicitar una cotización gratuita por asesoría para constituir una sociedad ${sociedad.tipo}.`)} target="_blank" rel="noreferrer">Cotizar por WhatsApp</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section text-center">
        <div className="container">
          <h2 className="heading-md text-primary">{servicios.llamado_accion}</h2>
          <Link to="/contacto" className="btn btn-primary" style={{marginTop: '1rem'}}>
            <Icon icon="mdi:email-fast" /> Ir a Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
