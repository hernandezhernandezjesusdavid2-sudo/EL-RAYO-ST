import React, { createContext, useContext, useState, useEffect } from 'react';
import { vehicles as initialVehicles } from '../data/vehicles';

const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState(() => {
    const saved = localStorage.getItem('el_rayo_vehicles');
    const data = saved ? JSON.parse(saved) : initialVehicles;
    // Asegurar que todos tengan fecha de creación y duración
    return data.map(v => ({
      ...v,
      createdAt: v.createdAt || new Date().toISOString(),
      recentDuration: v.recentDuration || 30 // Días por defecto
    }));
  });

  useEffect(() => {
    localStorage.setItem('el_rayo_vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  const isVehicleNew = (vehicle) => {
    if (!vehicle.new) return false;
    const createdDate = new Date(vehicle.createdAt);
    const now = new Date();
    const diffTime = Math.abs(now - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= (vehicle.recentDuration || 30);
  };

  const addVehicle = (newVehicle) => {
    const id = vehicles.length > 0 ? Math.max(...vehicles.map(v => v.id)) + 1 : 1;
    setVehicles([...vehicles, { 
      ...newVehicle, 
      id, 
      createdAt: new Date().toISOString() 
    }]);
  };

  const updateVehicle = (updatedVehicle) => {
    setVehicles(vehicles.map(v => v.id === updatedVehicle.id ? updatedVehicle : v));
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  return (
    <VehicleContext.Provider value={{ vehicles, addVehicle, updateVehicle, deleteVehicle, isVehicleNew }}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicles = () => useContext(VehicleContext);
