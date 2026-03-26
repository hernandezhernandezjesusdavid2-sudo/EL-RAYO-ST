import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>EL RAYO</h3>
          <p>Tu auto en manos expertas.</p>
        </div>
        <div className="footer-contact">
          <p>📍 Calle Principal 123, Ciudad</p>
          <p>📞 +52 56 5218 9129</p>
          <p>✉️ contacto@elrayo.com</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 EL RAYO. Todos los derechos reservados.</p>
          <Link to="/login" className="admin-link">Acceso Admin</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
