import { useVehicles } from '../context/VehicleContext';
import VehicleCard from './VehicleCard';
import './Catalog.css';

const Catalog = ({ type, title, onSelect }) => {
  const { vehicles } = useVehicles();
  const filteredVehicles = vehicles.filter(v => v.type === type);
  
  return (
    <section id={type} className="catalog">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="catalog-slogan">Un diseño limpio donde el {type === 'car' ? 'automóvil' : 'vehículo'} sea el protagonista.</p>
        
        <div className="catalog-grid">
          {filteredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
