import { Icon } from '@iconify/react';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="text-center section-header">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">Empresas que confían en nuestra trayectoria profesional.</p>
        </div>
        
        <div className="testimonials-grid">
          {[
            {
              nombre: 'Carlos Martínez',
              empresa: 'Constructora Sur SpA',
              comentario: 'La asesoría de Don Rolando ha sido fundamental para estructurar contablemente nuestros proyectos. Siempre transparentes, puntuales y con un nivel de profesionalismo intachable. Recomendados al 100%.',
              rating: 5
            },
            {
              nombre: 'Valentina Rojas',
              empresa: 'Clínica Médica Integral',
              comentario: 'Teníamos muchas dudas sobre la nueva ley tributaria y su equipo nos guio paso a paso. Desde que tomamos sus servicios, la gestión de nuestros recursos humanos y contabilidad funciona a la perfección.',
              rating: 5
            },
            {
              nombre: 'Felipe Valdés',
              empresa: 'Inversiones Valdés EIRL',
              comentario: 'Más de 5 años confiando la administración contable de mis negocios a esta firma. La tranquilidad que te da saber que estás respaldado por un equipo experto y con 40 años de experiencia no tiene precio.',
              rating: 5
            }
          ].map((testimonial, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="quote-mark">
                <Icon icon="mdi:format-quote-open" />
              </div>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} icon="mdi:star" className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.comentario}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Icon icon="mdi:account" />
                </div>
                <div className="author-info">
                  <h4>{testimonial.nombre}</h4>
                  <span>{testimonial.empresa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
