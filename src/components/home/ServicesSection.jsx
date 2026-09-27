import { Icon } from '@iconify/react';
import data from '../../data.json';
import { whatsappLink } from '../../utils/whatsapp';

const ServicesSection = () => {
  return (
    <section className="compact-services-section">
      <div className="container">
        <div className="text-center section-header">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Soluciones estratégicas y contables adaptadas a su negocio.</p>
        </div>
        
        <div className="compact-services-grid">
          {data.servicios.map((servicio, idx) => {
            const serviceImages = [
              'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
              'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
              'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
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
  );
};

export default ServicesSection;
