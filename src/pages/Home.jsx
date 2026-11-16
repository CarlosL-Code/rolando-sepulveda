import SeoHead from '../components/SeoHead';
import HeroSection from '../components/home/HeroSection';
import QuoteSection from '../components/home/QuoteSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import NewsSection from '../components/home/NewsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <div className="page-home animate-up">
      <SeoHead
        title="Contador en Temuco | Contabilidad para Empresas y Pymes"
        description="Contador en Temuco para empresas y Pymes. Contabilidad mensual, IVA F29, Renta F22, remuneraciones y constitución de empresas. ¡Solicita tu cotización gratis!"
        canonicalPath="/"
      />
      <HeroSection />
      <QuoteSection />
      <AboutSection />
      <ServicesSection />
      <NewsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Home;
