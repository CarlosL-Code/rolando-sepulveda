import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json';
import heroImg1 from '../../assets/images/hero-2.jpg';
import heroImg3 from '../../assets/images/hero-3.jpg';
import heroImg4 from '../../assets/images/hero-4.jpg';

const HeroSection = () => {
  const { profesional, empresa } = data;
  const heroImages = [heroImg1, heroImg3, heroImg4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="hero">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${img})`,
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 0
          }}
        ></div>
      ))}
      <div className="hero-overlay" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.72)', zIndex: 1}}></div>

      <div className="container text-center" style={{position: 'relative', zIndex: 2}}>
        <div className="hero-content">
          <h1 className="slide-up">Contador en Temuco para Empresas y Pymes</h1>
          <p className="fade-in">
            {empresa.nombre}, liderado por {profesional.nombre_completo}, Contador Público y Auditor. {profesional.experiencia} en contabilidad mensual, IVA F29, Renta F22, remuneraciones y constitución de empresas.
          </p>
          <div className="hero-buttons fade-in-delayed">
            <Link to="/contacto" className="btn btn-cyan">COTIZA CON NOSOTROS</Link>
            <Link to="/servicios" className="btn btn-glass">VER SERVICIOS</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
