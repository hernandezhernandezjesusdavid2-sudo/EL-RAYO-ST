import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo-container">
          <img src={logo} alt="EL RAYO Logo" className="logo-img" />
          <div className="logo-text-group">
            <span className="logo-text">EL</span><span className="logo-accent"> RAYO</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/taller">Taller</NavLink></li>
          <li><NavLink to="/autos">Autos</NavLink></li>
          <li><NavLink to="/motos">Motos</NavLink></li>
          <li><NavLink to="/citas">Agendar Cita</NavLink></li>
        </ul>
        <a href="https://wa.me/525652189129" className="btn btn-primary whatsapp-btn">
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
