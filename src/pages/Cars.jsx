import React from 'react';
import Catalog from '../components/Catalog';
import { useNavigate } from 'react-router-dom';

const Cars = () => {
  const navigate = useNavigate();
  return (
    <div className="page-padding">
      <Catalog type="car" title="Catálogo de Autos" onSelect={(v) => navigate(`/vehiculo/${v.id}`)} />
    </div>
  );
};

export default Cars;
