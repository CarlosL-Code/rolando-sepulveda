import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import data from '../data.json';
import { Icon } from '@iconify/react';
import brandLogo from '../assets/images/rolando-sepulveda-logo.png';

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { empresa, contacto, navegacion, enlaces_de_interes, redes_sociales } = data;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <NavLink to="/" className="nav-brand" onClick={closeMenu}>
            <img src={brandLogo} alt="Rolando Sepúlveda" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="nav-menu desktop-nav">
            <div className="nav-links">
              {navegacion.map((item, index) => (
                <NavLink key={index} to={item.url}>{item.texto}</NavLink>
              ))}
            </div>
            <a href="#contacto" className="btn btn-cyan">CONTÁCTANOS</a>
          </div>

          {/* Hamburger Icon */}
          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            <Icon icon="mdi:menu" />
          </button>
        </div>
      </nav>

      {/* Off Canvas Overlay */}
      <div className={`offcanvas-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      {/* Off Canvas Menu */}
      <div className={`offcanvas-menu ${menuOpen ? 'active' : ''}`}>
        <div className="offcanvas-header">
          <NavLink to="/" className="nav-brand" onClick={closeMenu}>
            <img src={brandLogo} alt="Rolando Sepúlveda" className="navbar-logo-mobile" />
          </NavLink>
          <button className="close-menu" onClick={closeMenu}>
            <Icon icon="mdi:close" />
          </button>
        </div>
        <div className="offcanvas-links">
          {navegacion.map((item, index) => (
            <NavLink key={index} to={item.url} onClick={closeMenu}>{item.texto}</NavLink>
          ))}
          <a href="#contacto" className="btn btn-cyan" style={{marginTop: '20px', width: '100%', textAlign: 'center'}} onClick={closeMenu}>CONTÁCTANOS</a>
        </div>
        
        <div className="offcanvas-footer">
          <div className="social-icons">
             {redes_sociales.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer"><Icon icon={`mdi:${social.red.toLowerCase()}`} /></a>
             ))}
          </div>
          <p style={{fontSize: '0.85rem', color: 'var(--color-text-light)'}}>{contacto.telefono_fijo}</p>
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>{empresa.nombre}</h4>
              <p>{empresa.categoria}</p>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <ul>
                <li><Icon icon="mdi:map-marker" /> {contacto.direccion}</li>
                <li><Icon icon="mdi:phone" /> {contacto.telefono_fijo}</li>
                <li><Icon icon="mdi:whatsapp" /> {contacto.celular_whatsapp}</li>
                <li><Icon icon="mdi:email" /> {contacto.email}</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Enlaces de interés</h4>
              <ul>
                {enlaces_de_interes.map((enlace, idx) => (
                  <li key={idx}><a href={enlace.url} target="_blank" rel="noreferrer"><Icon icon="mdi:link" /> {enlace.nombre}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Redes Sociales</h4>
              <ul>
                {redes_sociales.map((social, idx) => (
                  <li key={idx}><a href={social.url} target="_blank" rel="noreferrer"><Icon icon={`mdi:${social.red.toLowerCase()}`} /> {social.red}</a></li>
                ))}
                <li><a href={empresa.sitio_web} target="_blank" rel="noreferrer"><Icon icon="mdi:web" /> Sitio Web</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {empresa.nombre}. Todos los derechos reservados.</p>
            <p>Desarrollado por <a href="https://carloslozanodev.com/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-secondary)'}}>Carlos Lozano</a></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
