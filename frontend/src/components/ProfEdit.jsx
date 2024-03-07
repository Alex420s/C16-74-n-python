import React, { useState } from 'react'
import '../stylesheets/ProfesionalEdit.css'
import image from '../images/image.jpg'
import { MdAddAPhoto } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const ProfEdit = () => {
  // Formulario utilizado para editar datos a un usuario existente
  // https://render-api-a6du.onrender.com/user/professional
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    speciality: '',
    description: '',
    city: '',
    province: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
    console.log(formData); // Temporal; solo para probar
  };

  // Función para manejar cambios en la imagen
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    // Agregar campo de "foto" al objeto `formData`
    reader.onloadend = () => {
      setFormData({...formData, image: reader.result}); // Reemplaza la imagen por defecto con la subida
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  // Esta variable se debe llenar con los turnos registrados en la base de datos utilizando un useEffect
  const [additionalRows, setAdditionalRows] = useState([
    {
      day: 'martes',
      date: '05-03-2024',
      time: '15:00',
      price: '5000',
      capacity: '15',
    },
  ]);

  // Variable para agregar turnos
  const [newRow, setNewRow] = useState({
    day: '',
    date: '',
    time: '',
    price: '',
    capacity: '',
  });

  // Función para agregar turnos
  const addRow = () => {
    setAdditionalRows((prevState) => [...prevState, { ...newRow }]);
    setNewRow({ day: '', date: '', time: '', price: '', capacity: '' }); // Limpia el formulario
  };

  // Función para manejar cambios en los turnos
  const handleRowChange = (event) => {
    setNewRow({ ...newRow, [event.target.name]: event.target.value });
    console.log(newRow); // Temporal; solo para probar
  }

  return (
    <div className="todo">
      <div className="cuerpoEdit">
        <div>
          <div className="info-1">
            <p className='tituloInfo'>Información personal</p>
            <div>
              <div className="imagen-subir">
                <img className="fotoSubir" src={formData.image} alt="Imagen de perfil" />
                <input
                  id="file-upload"
                  type="file"
                  className="imagen-subir-input"
                  onChange={handleImageUpload}
                  accept="image/*"
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
            <p className='tituloInfo'>Informacion profesional</p>
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
            <p className='tituloInfo'>Información clases</p>
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
      <p className='h2NvosTurnos'>Agendá nuevos turnos</p>
      {additionalRows.map((row, index) => (
          <div className='turnoAgendar' key={index}>
            <input className="editP" readOnly={true} value={row.day}/>
            <input className="editP" readOnly={true} value={row.date} />
            <input className="editP" readOnly={true} value={row.time} />
            <input className="editP" readOnly={true} value={row.price} />
            <input className="editP" readOnly={true} value={row.capacity} />
          </div>
        ))}
      <div className="turnoAgendar">
        <select name="day" id="dia" value={newRow.day} onChange={handleRowChange}>
          <option value="lunes">Lunes</option>
          <option value="martes">Martes</option>
          <option value="miercoles">Miércoles</option>
          <option value="jueves">Jueves</option>
          <option value="viernes">Viernes</option>
          <option value="sabado">Sábado</option>
        </select>
        <input className="editP" type="date" name="date" required value={newRow.date} onChange={handleRowChange} />
        <input className="editP" type="time" name="time" required value={newRow.time} onChange={handleRowChange} />
        <input className="editP" type="number" min="0" name="price" required placeholder="Precio" value={newRow.price} onChange={handleRowChange} />
        <input className="editP" type="number" min="0" name="capacity" required placeholder='Cupo' value={newRow.capacity} onChange={handleRowChange} />
        <div className="mas hover">
          <span onClick={addRow}> <FaPlus /></span>
        </div>
        <br />
        
      </div>
    </div>
  );
}

export default ProfEdit
