import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useVehicles } from '../context/VehicleContext';
import './VehicleDetailsPage.css';

const VehicleDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { vehicles } = useVehicles();
  const [vehicle, setVehicle] = useState(null);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    const found = vehicles.find(v => v.id === parseInt(id));
    if (found) {
      setVehicle(found);
      setActiveImage(found.mainImage);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!vehicle) return <div className="container">Cargando...</div>;

  const whatsappMessage = encodeURIComponent(`Hola, me interesa el ${vehicle.model} que vi en la web de EL RAYO.`);
  const whatsappLink = `https://wa.me/525652189129?text=${whatsappMessage}`;

  return (
    <div className="vehicle-details-page page-padding">
      <div className="container">
        <button className="btn btn-outline back-btn" onClick={() => navigate(-1)}>
          &larr; Volver
        </button>
        
        <div className="details-grid">
          <div className="details-gallery">
            <div className="main-image-container-lg">
              <img src={activeImage} alt={vehicle.model} className="main-image-lg" />
            </div>
            <div className="thumbnails-grid">
              {vehicle.gallery.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail-item ${activeImage === img ? 'active' : ''}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`${vehicle.model} ${index}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="details-info">
            <h1 className="details-title">{vehicle.model}</h1>
            <p className="details-description">{vehicle.description}</p>
            
            <div className="details-specs-grid">
              <div className="details-spec">
                <span className="spec-label">Año</span>
                <span className="spec-value">{vehicle.year}</span>
              </div>
              <div className="details-spec">
                <span className="spec-label">Kilometraje</span>
                <span className="spec-value">{vehicle.mileage}</span>
              </div>
              <div className="details-spec">
                <span className="spec-label">Motor</span>
                <span className="spec-value">{vehicle.engine}</span>
              </div>
            </div>
            
            <div className="details-action-box">
              <div className="details-price">{vehicle.price}</div>
              <a href={whatsappLink} className="btn btn-primary whatsapp-large">
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsPage;
