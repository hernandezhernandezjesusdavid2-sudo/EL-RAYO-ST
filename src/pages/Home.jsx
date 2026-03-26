import Hero from '../components/Hero';
import Services from '../components/Services';
import Catalog from '../components/Catalog';
import { useVehicles } from '../context/VehicleContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { vehicles, isVehicleNew } = useVehicles();
  const recentVehicles = vehicles.filter(v => isVehicleNew(v)).slice(0, 3);

  return (
    <div className="home-page">
      <Hero />
      <Services />
      <section className="recent-arrivals catalog">
        <div className="container">
          <h2 className="section-title">Recién Llegados</h2>
          <div className="catalog-grid">
            {recentVehicles.map(v => (
              <div key={v.id} className="vehicle-card animate" onClick={() => navigate(`/vehiculo/${v.id}`)}>
                <div className="vehicle-img-container">
                  <img src={v.mainImage} alt={v.model} className="vehicle-img" />
                </div>
                <div className="vehicle-info">
                  <h3 className="vehicle-model">{v.model}</h3>
                  <div className="vehicle-footer">
                    <span className="vehicle-price">{v.price}</span>
                    <button className="btn btn-primary btn-sm">Ver Detalles</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-outline" onClick={() => navigate('/autos')}>Ver Todo el Inventario</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
