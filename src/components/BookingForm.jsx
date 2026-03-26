import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Mantenimiento General',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hola, quiero agendar una cita en EL RAYO:\n\n` +
      `👤 Nombre: ${formData.name}\n` +
      `📞 Teléfono: ${formData.phone}\n` +
      `🚗 Vehículo: ${formData.vehicle}\n` +
      `🔧 Servicio: ${formData.service}\n` +
      `📅 Fecha: ${formData.date}\n` +
      `⏰ Hora: ${formData.time}`
    );
    window.open(`https://wa.me/525652189129?text=${message}`, '_blank');
  };

  return (
    <form className="booking-form animate" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre Completo</label>
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Ej. Juan Pérez"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>Teléfono</label>
          <input 
            type="tel" 
            name="phone" 
            required 
            placeholder="Tu número de contacto"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Modelo del Vehículo</label>
          <input 
            type="text" 
            name="vehicle" 
            required 
            placeholder="Ej. Audi A4 / Yamaha R6"
            value={formData.vehicle}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Tipo de Servicio</label>
        <select name="service" value={formData.service} onChange={handleChange}>
          <option>Mantenimiento General</option>
          <option>Cambio de Aceite</option>
          <option>Frenos</option>
          <option>Diagnóstico Eléctrico</option>
          <option>Reparación de Motor</option>
          <option>Detallado / Estética</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Fecha Deseada</label>
          <input 
            type="date" 
            name="date" 
            required 
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Hora</label>
          <input 
            type="time" 
            name="time" 
            required 
            value={formData.time}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        <span>Agendar por WhatsApp</span>
      </button>
    </form>
  );
};

export default BookingForm;
