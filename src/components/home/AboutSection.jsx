import data from '../../data.json';
import rolandoDePie from '../../assets/images/rolando-de-pie.jpg';

const AboutSection = () => {
  const { profesional, empresa } = data;
  
  return (
    <section className="premium-about-section" id="nuestra-firma">
      <div className="container">
        <div className="about-overlap-grid">
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <img src={rolandoDePie} alt={profesional.nombre_completo} className="about-photo" />
            </div>
            <div className="floating-badge">
              <h3>40+</h3>
              <p>Años de Experiencia</p>
            </div>
          </div>
          <div className="about-text-wrapper">
            <h2 className="section-title">Nuestra Firma</h2>
            <h3 className="profesional-name">{profesional.nombre_completo}</h3>
            <p className="profesional-credentials">{profesional.profesion} | {profesional.colegiatura}</p>
            <div className="separator"></div>
            <p className="about-desc">{empresa.mision}</p>
            <div className="stats-row">
              <div className="mini-stat">
                <h4>{empresa.estadisticas.clientes_felices}+</h4>
                <span>Clientes</span>
              </div>
              <div className="mini-stat">
                <h4>40+</h4>
                <span>Años Exp.</span>
              </div>
              <div className="mini-stat">
                <h4>{empresa.estadisticas.miembros_equipo}</h4>
                <span>Expertos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
