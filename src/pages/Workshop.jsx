import React from 'react';
import './Workshop.css';

const Workshop = () => {
  return (
    <div className="workshop-page page-padding">
      <div className="container">
        <h1 className="section-title">Nuestras Instalaciones</h1>
        <p className="workshop-intro">
          En EL RAYO, contamos con tecnología de vanguardia y un equipo de expertos dedicados a la excelencia automotriz.
        </p>
        
        <div className="workshop-grid">
          <div className="workshop-image-box animate">
            <img src="/images/car_int.png" alt="Taller Interior" className="workshop-img" />
            <div className="img-overlay">
              <span>Área de Diagnóstico</span>
            </div>
          </div>
          <div className="workshop-content animate">
            <h2>Tecnología de Punta</h2>
            <p>Utilizamos scanners de última generación para diagnosticar fallas complejas en segundos, ahorrándote tiempo y dinero.</p>
            <ul className="workshop-features">
              <li>Equipos de medición láser</li>
              <li>Bancos de prueba de motores</li>
              <li>Software de diagnóstico original</li>
            </ul>
          </div>
        </div>

        <div className="workshop-grid reverse">
          <div className="workshop-content animate">
            <h2>Mano de Obra Certificada</h2>
            <p>Nuestros técnicos están en constante capacitación para manejar desde motores clásicos hasta los sistemas eléctricos más modernos.</p>
            <ul className="workshop-features">
              <li>Certificación internacional</li>
              <li>Especialistas por marca</li>
              <li>Atención personalizada</li>
            </ul>
          </div>
          <div className="workshop-image-box animate">
            <img src="./images/car_rear.png" alt="Experto trabajando" className="workshop-img" />
            <div className="img-overlay">
              <span>Ingeniería de Precisión</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
