import React from 'react';
import { Link } from 'react-router-dom';
import { useVehicles } from '../context/VehicleContext';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  const { isVehicleNew } = useVehicles();
  return (
    <Link to={`/vehiculo/${vehicle.id}`} className="vehicle-card animate">
      {isVehicleNew(vehicle) && <span className="badge">Recién Llegado</span>}
      <div className="vehicle-img-container">
        <img src={vehicle.mainImage} alt={vehicle.model} className="vehicle-img" />
      </div>
      <div className="vehicle-info">
        <h3 className="vehicle-model">{vehicle.model}</h3>
        <div className="vehicle-footer">
          <span className="vehicle-price">{vehicle.price}</span>
          <button className="btn btn-primary btn-sm">Ver Detalles</button>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
