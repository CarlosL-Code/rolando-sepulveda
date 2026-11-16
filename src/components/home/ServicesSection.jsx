import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import data from '../../data.json';
import { whatsappLink } from '../../utils/whatsapp';

const ServicesSection = () => {
  const servicios = data.servicios_detalle;

  return (
    <section className="compact-services-section">
      <div className="container">
        <div className="text-center section-header">
          <h2 className="section-title">Nuestros Servicios Contables en Temuco</h2>
          <p className="section-subtitle">Soluciones estratégicas, tributarias y laborales adaptadas a tu empresa o Pyme.</p>
        </div>

        <div className="compact-services-grid">
          {servicios.map((servicio) => (
            <div className="compact-service-card" key={servicio.slug}>
              <div className="service-card-img" style={{backgroundImage: `url(${servicio.imagen})`}}></div>
              <div className="service-card-content">
                <h3>{servicio.titulo_corto}</h3>
                <p style={{flexGrow: 1}}>{servicio.resumen}</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px'}}>
                  <Link
                    to={`/servicios/${servicio.slug}`}
                    className="btn btn-dark"
                    style={{justifyContent: 'center', width: '100%', padding: '11px'}}
                  >
                    VER DETALLE DEL SERVICIO
                  </Link>
                  <a
                    href={whatsappLink(`Hola, deseo cotizar el servicio de: ${servicio.titulo_corto}`)}
                    className="btn btn-whatsapp"
                    style={{justifyContent: 'center', width: '100%', padding: '11px'}}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon icon="mdi:whatsapp" style={{fontSize: '1.2rem', marginRight: '5px'}} /> COTIZAR POR WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
