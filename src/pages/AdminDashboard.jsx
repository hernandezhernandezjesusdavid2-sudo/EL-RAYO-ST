import React, { useState } from 'react';
import { useVehicles } from '../context/VehicleContext';
import { useAuth } from '../context/AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { vehicles, addVehicle, updateVehicle, deleteVehicle } = useVehicles();
  const { logout } = useAuth();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    model: '',
    price: '',
    type: 'car',
    year: '',
    mileage: '',
    engine: '',
    description: '',
    mainImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    gallery: [],
    new: true,
    recentDuration: 30
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, mainImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const availableSlots = 10 - formData.gallery.length;
    const filesToProcess = files.slice(0, availableSlots);

    filesToProcess.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          gallery: [...prev.gallery, reader.result]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeGalleryImage = (index) => {
    setFormData({
      ...formData,
      gallery: formData.gallery.filter((_, i) => i !== index)
    });
  };

  const handleEdit = (vehicle) => {
    setEditingId(vehicle.id);
    setFormData(vehicle);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateVehicle(formData);
      setEditingId(null);
    } else {
      addVehicle(formData);
    }
    setFormData({
      model: '',
      price: '',
      type: 'car',
      year: '',
      mileage: '',
      engine: '',
      description: '',
      mainImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      gallery: [],
      new: true,
      recentDuration: 30
    });
  };

  return (
    <div className="admin-dashboard page-padding">
      <div className="container">
        <div className="admin-header">
          <h1 className="section-title">Panel de Administración</h1>
          <button onClick={logout} className="btn btn-outline btn-sm">Cerrar Sesión</button>
        </div>

        <div className="admin-grid">
          <div className="admin-form-container">
            <h3>{editingId ? 'Editar Vehículo' : 'Agregar Nuevo Vehículo'}</h3>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-group">
                <label>Modelo / Nombre</label>
                <input name="model" value={formData.model} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Precio</label>
                  <input name="price" value={formData.price} onChange={handleChange} placeholder="$0,000" required />
                </div>
                <div className="form-group">
                  <label>Tipo</label>
                  <select name="type" value={formData.type} onChange={handleChange}>
                    <option value="car">Auto</option>
                    <option value="motorcycle">Moto</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Año</label>
                  <input name="year" value={formData.year} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Kilometraje</label>
                  <input name="mileage" value={formData.mileage} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="3" required />
              </div>
              <div className="form-group">
                <label>Foto del Vehículo</label>
                <div className="file-input-wrapper">
                  <input type="file" accept="image/*" onChange={handleFileChange} id="file-upload" />
                  <label htmlFor="file-upload" className="btn btn-outline btn-sm">Seleccionar de Galería</label>
                </div>
                {formData.mainImage && (
                  <div className="image-preview">
                    <img src={formData.mainImage} alt="Preview" />
                  </div>
                )}
              </div>
              <div className="form-row">
                <div className="form-group checkbox-group">
                  <input type="checkbox" name="new" checked={formData.new} onChange={handleChange} id="new-badge" />
                  <label htmlFor="new-badge">Etiqueta "Recién Llegado"</label>
                </div>
                {formData.new && (
                  <div className="form-group">
                    <label>Duración (Días)</label>
                    <input type="number" name="recentDuration" value={formData.recentDuration} onChange={handleChange} min="1" max="365" />
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label>Galería (Hasta 10 fotos)</label>
                <div className="file-input-wrapper">
                  <input type="file" accept="image/*" multiple onChange={handleGalleryChange} id="gallery-upload" disabled={formData.gallery.length >= 10} />
                  <label htmlFor="gallery-upload" className={`btn btn-outline btn-sm ${formData.gallery.length >= 10 ? 'disabled' : ''}`}>
                    {formData.gallery.length >= 10 ? 'Límite alcanzado' : 'Agregar más fotos'}
                  </label>
                </div>
                <div className="gallery-preview-grid">
                  {formData.gallery.map((img, index) => (
                    <div key={index} className="gallery-preview-item">
                      <img src={img} alt={`Gallery ${index}`} />
                      <button type="button" className="remove-img" onClick={() => removeGalleryImage(index)}>&times;</button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingId ? 'Guardar Cambios' : 'Agregar Vehículo'}
                </button>
                {editingId && (
                  <button type="button" onClick={() => setEditingId(null)} className="btn btn-outline">Cancelar</button>
                )}
              </div>
            </form>
          </div>

          <div className="admin-list">
            <h3>Inventario Actual ({vehicles.length})</h3>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Modelo</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map(v => (
                    <tr key={v.id}>
                      <td>{v.id}</td>
                      <td>{v.model}</td>
                      <td>{v.price}</td>
                      <td className="admin-actions">
                        <button onClick={() => handleEdit(v)} className="btn-icon">✏️</button>
                        <button onClick={() => deleteVehicle(v.id)} className="btn-icon delete">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
