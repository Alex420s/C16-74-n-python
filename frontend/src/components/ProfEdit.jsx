import React, { useState } from 'react'
import '../stylesheets/ProfesionalEdit.css'
import image from '../images/image.jpg'
import { MdAddAPhoto } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const ProfEdit = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    speciality: '',
    description: '',
    city: '',
    province: '',
    additionalRows: []
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

  const addRow = () => {
    const newRow = {
      day: '',
      date: '',
      time: '',
      price: '',
      capacity: '',
    };

    // Update the `additionalRows` state using the spread operator
    setFormData((prevState) => ({
      ...prevState,
      additionalRows: [...prevState.additionalRows, newRow],
    }));
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
                  <label htmlFor="file-upload" style={{ position: 'absolute', top: '20px', left: 0, width: '100%', height: '100%' }}>
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
                  <input className="editP" type="text" placeholder="Nombre" required name="first_name" value={formData.first_name} onChange={handleChange} />
                  <input className="editP" type="text" placeholder="Apellido" required name="last_name" value={formData.last_name} onChange={handleChange} />
                </div>
                <div className="fila">
                  <input className="editP" type="email" name="email" id="email" required placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="info-2">
              <h3>Informacion profesional</h3>
              <div>
                <select name="speciality" id="discipline" value={formData.speciality} onChange={handleChange}>
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
                <input className="editP" type="text" name="city" id="Barrio" required placeholder="Barrio" value={formData.city} onChange={handleChange} />
                <input className="editP" type="text" name="province" id="Provincia" required placeholder="Provincia/Estado" value={formData.province} onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor-guardar">
          <input className="guardar hover" type="submit" name="guardar" value="Guardar" />
        </div>
          <h2>Agendá nuevos turnos</h2>
          <div className="turnoAgendar">
            <select name="day" id="dia" value={formData.day} onChange={handleChange}>
              <option value="lunes">Lunes</option>
              <option value="martes">Martes</option>
              <option value="miercoles">Miércoles</option>
              <option value="jueves">Jueves</option>
              <option value="viernes">Viernes</option>
              <option value="sabado">Sábado</option>
            </select>
            <input className="editP" type="date" name="date" required value={formData.date} onChange={handleChange} />
            <input className="editP" type="time" name="time" required value={formData.time} onChange={handleChange} />
            <input className="editP" type="number" min="0" name="price" required placeholder="Precio" value={formData.price} onChange={handleChange} />
            <input className="editP" type="number" min="0" name="capacity" required placeholder='Cupo' value={formData.capacity} onChange={handleChange} />
            <div className="mas hover">
              <span onClick={addRow}> <FaPlus /></span>
            </div> 
            <br /> 
            {formData.additionalRows.length > 0 && (
            <div className="mas hover" style={{ position: "absolute", right: "0", bottom: "0" }}>
              <span onClick={addRow}>
              <FaPlus />
              </span>
              <br />
            </div>
            )}
          {formData.additionalRows.map((row, index) => (
            <><div key={index} className="turnoAgendar" style={{ order: `${index + 2}` }}>
              <select
                name={`day-${index}`} // Add an index to the name for unique IDs
                id={`dia-${index}`}
                value={row.day}
                onChange={(e) => {
                  // Update the specific row using its index
                  const updatedRows = [...formData.additionalRows];
                  updatedRows[index].day = e.target.value;
                  setFormData({ ...formData, additionalRows: updatedRows });
                } }
              >
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
                <option value="sabado">Sábado</option>
              </select>
              <input className="editP" type="date" name="date" required value={formData.date} onChange={handleChange} />
              <input className="editP" type="time" name="time" required value={formData.time} onChange={handleChange} />
              <input className="editP" type="number" min="0" name="price" required placeholder="Precio" value={formData.price} onChange={handleChange} />
              <input className="editP" type="number" min="0" name="capacity" required placeholder='Cupo' value={formData.capacity} onChange={handleChange} />
              <div className="mas hover">
                <span onClick={addRow}> <FaPlus /></span>
              </div>
            </div><div className="mas hover">
                <span onClick={addRow}> <FaPlus /></span>
              </div></>
          ))}
        </div>
      </div>
    ); 
  }

      
  export default ProfEdit