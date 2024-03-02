import React, { useState } from 'react'
import '../stylesheets/ProfesionalEdit.css'
import image from '../images/image.jpg'
import { MdAddAPhoto } from "react-icons/md";

const ProfEdit = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    speciality: '',
    description: '',
    city: '',
    province: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result, // Reemplaza la imagen por defecto con la subida
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="todo">
      <div className="cuerpoEdit">
        <div>
          <div className="info-1">
            <h3>Información personal</h3>
            <div>
              <div className="imagen-subir">
                <img className="fotoSubir" src={formData.image || require('../images/image.jpg')} alt="Imagen de perfil" />
                <label htmlFor="file-upload" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                  <MdAddAPhoto className="camera-icon" />
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="imagen-subir-input"
                  onChange={handleImageUpload}
                  accept="image/*"
                  style={{ opacity: 0 }} 
                />
              </div>  
              <div className="fila">
                <input className="input-box" type="text" placeholder="Nombre" required name="first_name" value={formData.first_name} onChange={handleChange} />
                <input type="text" placeholder="Apellido" required name="last_name" value={formData.last_name} onChange={handleChange} />
              </div>
              <div className="fila">
                <input type="email" name="email" id="email" required placeholder="Email" value={formData.email} onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="info-2">
            <h3>Informacion profesional</h3>
            <div>
              <select name="category" id="discipline" value={formData.speciality} onChange={handleChange}>
                <option value="Boxeo">Boxeo</option>
                <option value="Zumba">Zumba</option>
                <option value="Crossfit">Crossfit</option>
                <option value="Gap">Gap</option>
                <option value="Pilates">Pilates</option>
                <option value="Yoga">Yoga</option>
              </select>
              <textarea name="description" id="descripcion" placeholder="Descripción" value={formData.description} onChange={handleChange}></textarea>
            </div>
          </div>
          <div className="info-3">
            <h3>Información clases</h3>
            <div className="fila">
              <input type="text" name="city" id="Barrio" required placeholder="Barrio" value={formData.city} onChange={handleChange} />
              <input type="text" name="province" id="Provincia" required placeholder="Provincia/Estado" value={formData.province} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-guardar">
        <input className="enviar hover" type="submit" name="guardar" value="Guardar" />
      </div>
    </div>
  );
}
    
export default ProfEdit