import React from 'react';
import './Services.css';
import { services } from '../data/vehicles';

const Services = () => {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-problem"><strong>El problema:</strong> {service.problem}</p>
              <p className="service-solution"><strong>Nuestra solución:</strong> {service.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
