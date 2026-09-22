import data from '../data.json';
import { Icon } from '@iconify/react';
import aboutImg from '../assets/images/about.jpg';

const About = () => {
  const { sobre_nosotros_pagina, empresa, profesional } = data;

  return (
    <div className="page-about">
      {/* Header padding adjustment */}
      <div className="container" style={{paddingTop: '150px', paddingBottom: '80px'}}>
        <div className="text-center" style={{marginBottom: '60px'}}>
          <h1 style={{fontSize: '3rem', color: 'var(--color-heading)'}}>{sobre_nosotros_pagina.titulo}</h1>
          <div style={{width: '60px', height: '3px', background: 'var(--color-secondary)', margin: '20px auto'}}></div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
          <div>
            <h2 style={{marginBottom: '10px', fontSize: '2rem'}}>{profesional.nombre_completo}</h2>
            <p style={{color: 'var(--color-secondary)', fontWeight: '600', fontSize: '1.1rem', marginBottom: '20px'}}>
              {profesional.profesion}
            </p>
            <p style={{fontSize: '1rem', color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '20px'}}>
              {sobre_nosotros_pagina.descripcion}
            </p>
            <p style={{fontSize: '0.95rem', color: 'var(--color-text-light)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Icon icon="mdi:check-decagram" className="text-cyan" /> {profesional.experiencia}
            </p>
          </div>
          <div>
            <img src={aboutImg} alt="Acerca de nosotros" style={{width: '100%', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}} />
          </div>
        </div>
      </div>

      {/* Misión y Visión Cards */}
      <section style={{background: '#fcfcfc', padding: '100px 0', borderTop: '1px solid var(--color-border)'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
            <div style={{background: '#fff', padding: '50px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid var(--color-border)'}}>
              <h3 style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem'}}>
                <Icon icon="mdi:target" style={{color: 'var(--color-secondary)', fontSize: '2rem'}} /> Nuestra Misión
              </h3>
              <p style={{color: 'var(--color-text)', lineHeight: '1.7'}}>{sobre_nosotros_pagina.mision}</p>
            </div>
            <div style={{background: '#fff', padding: '50px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid var(--color-border)'}}>
              <h3 style={{marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem'}}>
                <Icon icon="mdi:eye-outline" style={{color: 'var(--color-secondary)', fontSize: '2rem'}} /> Nuestra Visión
              </h3>
              <p style={{color: 'var(--color-text)', lineHeight: '1.7'}}>{sobre_nosotros_pagina.vision}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reusing Stats Section */}
      <section className="stats-section" style={{marginTop: 0}}>
        <div className="container">
          <h2>Resultados que hablan por sí solos</h2>
          <div className="stats-grid" style={{marginTop: '60px'}}>
            <div className="stat-item">
              <Icon icon="mdi:account-outline" className="icon" />
              <h3>{empresa.estadisticas.clientes_felices}+</h3>
              <p>Clientes Felices</p>
            </div>
            <div className="stat-item">
              <Icon icon="mdi:tshirt-crew-outline" className="icon" />
              <h3>{empresa.estadisticas.miembros_equipo}</h3>
              <p>Miembros del Equipo</p>
            </div>
            <div className="stat-item">
              <Icon icon="mdi:lightbulb-outline" className="icon" />
              <h3>{empresa.estadisticas.cantidad_servicios}+</h3>
              <p>Tipos de Servicios</p>
            </div>
            <div className="stat-item">
              <Icon icon="mdi:map-marker-outline" className="icon" />
              <h3>40+</h3>
              <p>Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
