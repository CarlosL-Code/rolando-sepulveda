import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-nosotros" element={<About />} />
        <Route path="servicios" element={<Services />} />
        <Route path="servicios/:slug" element={<ServiceDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contacto" element={<Contact />} />

        {/* Redirecciones de URLs antiguas o con mayúsculas */}
        <Route path="Contactos" element={<Navigate to="/contacto" replace />} />
        <Route path="contactos" element={<Navigate to="/contacto" replace />} />
        <Route path="Sobre-nosotros" element={<Navigate to="/sobre-nosotros" replace />} />
        <Route path="Servicios" element={<Navigate to="/servicios" replace />} />
        <Route path="Blog" element={<Navigate to="/blog" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
