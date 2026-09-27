import { Icon } from '@iconify/react';
import data from '../../data.json';
import { whatsappLink } from '../../utils/whatsapp';
import aboutImg from '../../assets/images/about.jpg';

const CtaSection = () => {
  const { empresa } = data;
  return (
    <section className="massive-cta-section" style={{backgroundImage: `url(${aboutImg})`}}>
      <div className="cta-overlay"></div>
      <div className="container cta-content">
        <h2>Impulsa el crecimiento y la seguridad de tu empresa hoy mismo</h2>
        <p>{empresa.vision}</p>
        <a href={whatsappLink('Hola, necesito contactar con un asesor experto para mi empresa.')} className="btn btn-cyan btn-lg btn-glow" target="_blank" rel="noreferrer">
          <Icon icon="mdi:whatsapp" style={{fontSize: '1.5rem', marginRight: '8px'}} />
          HABLAR CON UN ASESOR
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
