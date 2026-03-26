import React from 'react';
import Catalog from '../components/Catalog';
import { useNavigate } from 'react-router-dom';

const Motos = () => {
  const navigate = useNavigate();
  return (
    <div className="page-padding">
      <Catalog type="motorcycle" title="Catálogo de Motos" onSelect={(v) => navigate(`/vehiculo/${v.id}`)} />
    </div>
  );
};

export default Motos;
