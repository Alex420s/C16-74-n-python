import React, { useState, useEffect } from 'react'
import '../stylesheets/ProfesionalEdit.css'
import image from '../images/image.jpg'
import { MdAddAPhoto } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import axios from 'axios';


const ProfEdit = () => {

  const id = localStorage.getItem('id')

  const [formData, setFormData] = useState({
    id: id,
    first_name: '',
    last_name: '',
    email: '',
    description: '',
    city: '',
    province: '',
    cbu: '',
    bank: '',
    photo: null,
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData); // Temporal; solo para probar
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    console.log(formDataToSend);
    try {
      const response = await axios.post('http://127.0.0.1:5000/editar-profesional/' + id, formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const [rows, setRows] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/turnos-profesional/${id}`);
        setRows(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  // Variable para agregar turnos
  const [newRow, setNewRow] = useState({
    category: 'Boxeo',
    date: '',
    time: '',
    address: '',
    cost: '',
    capacity: '',
  });

  // Función para agregar turnos
  const addRow = async () => {
    const response = await axios.post('http://127.0.0.1:5000/crear-turno/' + id, newRow);
    console.log(response.data);
    setRows((prevState) => [...prevState, { ...newRow }]);
    setNewRow({ category: '', date: '', time: '', address: '', cost: '', capacity: '' }); // Limpia el formulario
  };

  // Función para manejar cambios en los turnos
  const handleRowChange = (event) => {
    setNewRow({ ...newRow, [event.target.name]: event.target.value });
    console.log(newRow); // Temporal; solo para probar
  }

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <div className="cuerpoEdit">
          <div>
            <div className="info-1">
              <p className='tituloInfo'>Información personal</p>
              <div>
                <div className="imagen-subir">
                  <img className="fotoSubir" src={formData.photo ? URL.createObjectURL(formData.photo) : image} alt="Imagen de perfil" />
                  <input id="file-upload" type="file" className="imagen-subir-input" onChange={handleImageUpload} accept="image/*" />
                </div>
                <div className="fila">
                  <input className="editP" type="text" placeholder="Nombre" required name="first_name" value={formData.first_name} onChange={handleChange} />
                  <input className="editP" type="text" placeholder="Apellido" required name="last_name" value={formData.last_name} onChange={handleChange} />
                </div>
                <div className="fila">
                  <input className="editP" type="email" name="email" id="email" required placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="fila">
                  <input className="editP" type="number" placeholder="CBU" required name="cbu" value={formData.cbu} onChange={handleChange} />
                  <input className="editP" type="text" placeholder="Banco" required name="bank" value={formData.alias} onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="info-2">
              <p className='tituloInfo'>Informacion profesional</p>
              <div>
                <textarea name="description" id="descripcion" placeholder="Descripción" value={formData.description} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor-guardar">
          <input className="guardar hover" type="submit" name="guardar" value="Guardar" />
        </div>
      </form>
      <p className='h2NvosTurnos'>Agendá nuevos turnos</p>
      {rows.map((row, index) => (
        <div className='turnoAgendar' key={index}>
          <input className="editP2" readOnly={true} value={row.category} />
          <input className="editP2" readOnly={true} value={row.date} />
          <input className="editP2" readOnly={true} value={row.time} />
          <input className="editP2" readOnly={true} value={row.address} />
          <input className="editP2" readOnly={true} value={row.cost} />
          <input className="editP2" readOnly={true} value={row.capacity} />
          <span> <ImCross /></span>
        </div>
      ))}
      <div className="turnoAgendar">
        <select className='editP2' name="category" onChange={handleRowChange}>
          <option value="">Todas las disciplinas</option>
          <option value="Boxeo">Boxeo</option>
          <option value="Zumba">Zumba</option>
          <option value="Crossfit">Crossfit</option>
          <option value="Gap">Gap</option>
          <option value="Pilates">Pilates</option>
        </select>
        <input className="editP2" type="date" name="date" required value={newRow.date} onChange={handleRowChange} />
        <input className="editP2" type="time" name="time" required value={newRow.time} onChange={handleRowChange} />
        <input className="editP2" type="text" name="address" required placeholder="Dirección" value={newRow.address} onChange={handleRowChange} />
        <input className="editP2" type="number" min="0" name="cost" required placeholder="Precio" value={newRow.cost} onChange={handleRowChange} />
        <input className="editP2" type="number" min="0" name="capacity" required placeholder='Cupo' value={newRow.capacity} onChange={handleRowChange} />
        <div className="mas hover">
          <span onClick={addRow}> <FaPlus /></span>
        </div>
        <br />

      </div>
    </div>
  );
}

export default ProfEdit
