import React, { useState } from 'react';
import './VehicleModal.css';

const VehicleModal = ({ vehicle, onClose }) => {
  const [activeImage, setActiveImage] = useState(vehicle.mainImage);
  
  if (!vehicle) return null;

  const whatsappMessage = encodeURIComponent(`Hola, me interesa el ${vehicle.model} que vi en la web de EL RAYO.`);
  const whatsappLink = `https://wa.me/1234567890?text=${whatsappMessage}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-grid">
          <div className="modal-gallery">
            <div className="main-image-container">
              <img src={activeImage} alt={vehicle.model} className="main-image" />
            </div>
            <div className="thumbnails">
              {vehicle.gallery.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`${vehicle.model} ${index}`} 
                  className={`thumbnail ${activeImage === img ? 'active' : ''}`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>
          
          <div className="modal-details">
            <h2 className="modal-title">{vehicle.model}</h2>
            <p className="modal-description">{vehicle.description}</p>
            
            <div className="modal-specs">
              <div className="spec-item">
                <span className="spec-label">Año</span>
                <span className="spec-value">{vehicle.year}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">KM</span>
                <span className="spec-value">{vehicle.mileage}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Motor</span>
                <span className="spec-value">{vehicle.engine}</span>
              </div>
            </div>
            
            <div className="modal-footer">
              <div className="modal-price">{vehicle.price}</div>
              <a href={whatsappLink} className="btn btn-primary modal-whatsapp">
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModal;
