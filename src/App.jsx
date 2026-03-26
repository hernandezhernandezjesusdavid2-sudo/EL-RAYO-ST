import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Motos from './pages/Motos';
import ServicesPage from './pages/ServicesPage';
import Workshop from './pages/Workshop';
import Booking from './pages/Booking';
import VehicleDetailsPage from './pages/VehicleDetailsPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import { VehicleProvider } from './context/VehicleContext';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import { Navigate } from 'react-router-dom';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <VehicleProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/autos" element={<Cars />} />
              <Route path="/motos" element={<Motos />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/taller" element={<Workshop />} />
              <Route path="/citas" element={<Booking />} />
              <Route path="/vehiculo/:id" element={<VehicleDetailsPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
            </Routes>
            <Footer />
          </div>
        </Router>
      </VehicleProvider>
    </AuthProvider>
  );
}

export default App;
