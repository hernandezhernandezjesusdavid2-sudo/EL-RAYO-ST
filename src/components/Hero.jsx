import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import workshopImg from '../assets/images/workshop.png';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <img src={workshopImg} alt="Taller Mecánico" className="hero-bg" />
      <div className="container hero-content animate">
        <h1 className="hero-title">EL RAYO: Tu Auto en Manos <span className="highlight">Expertas</span></h1>
        <p className="hero-description">
          Somos profesionales dedicados a la excelencia automotriz. 
          Resolución de problemas complejos y mantenimiento de alta gama para clientes exigentes.
        </p>
        <div className="hero-actions">
          <Link to="/autos" className="btn btn-primary">Ver Catálogo</Link>
          <Link to="/servicios" className="btn btn-outline">Nuestros Servicios</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
