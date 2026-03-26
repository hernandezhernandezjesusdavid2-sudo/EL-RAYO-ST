import React from 'react';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  return (
    <div className="booking-page page-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Agendar Cita</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            Reserva tu espacio en EL RAYO de forma rápida y sencilla.
          </p>
        </div>
        
        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;
