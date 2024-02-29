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

  const handleChange = () => {
    };

  const handleWeekdayChange = () => {
    };
  
  const handleTimeChange = () => {
    };

  return (
    <div className="todo">
      <div className="cuerpoEdit">
        <div>
          <div className="info-1">
            <h3>Información personal</h3>
            <div>
              <div className="imagen-subir">
                <img className="fotoSubir" src={ image } alt="Imagen a subir" />
                <MdAddAPhoto />
                <input type="file" className="imagen-subir-input" />
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
              <input type="text" name="city" id="Barrio" required placeholder="Barrio" value={formData.barrio} onChange={handleChange} />
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