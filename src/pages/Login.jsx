import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <div className="login-page page-padding">
      <div className="container">
        <div className="login-card animate">
          <h2 className="section-title">Acceso Administrador</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Contraseña</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa la contraseña"
                required
              />
            </div>
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="btn btn-primary btn-block">
              <span>Entrar</span>
            </button>
          </form>
          <p className="login-hint">Pista: La contraseña por defecto es admin123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
