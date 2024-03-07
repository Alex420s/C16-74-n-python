import React, { useState } from 'react'
import axios from 'axios';
import '../../stylesheets/forms/UserForm.css'
import { Link } from 'react-router-dom'
import terms from '../../terminosycondiciones.pdf'

const UserForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    username: "",
    last_name: "",
    phone_number: "",
    address: "",
    email: "",
    password: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    if (name === 'passwordMatch') {
      setPasswordsMatch(formData.password === value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (passwordsMatch) {
        const response = await axios.post('https://render-api-a6du.onrender.com/user/register', formData);
        console.log('Response:', response.data);
      } else {
        console.log('Passwords do not match');
      }
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <div>
      <p className='h2FormU'>Registrate como<br />
        <span>usuario</span></p>
      <form onSubmit={handleSubmit}>
        <div className="info">
          <div className="unico">
            <input className='inputFormU' type="text" name="username" placeholder="Usuario" required onChange={handleChange} />
          </div>
          <div className="fila">
            <input className="input-box inputFormU" type="text" placeholder="Nombre" required name="first_name" onChange={handleChange} />
            <input className='inputFormU' type="text" placeholder="Apellido" required name="last_name" onChange={handleChange} />
          </div>
          <div className="fila">
            <input className='inputFormU' type="tel" placeholder="Teléfono" required name="phone_number" onChange={handleChange} />
            <input className='inputFormU' type="email" name="email" required placeholder="Email" onChange={handleChange} />
          </div>

          <div class="fila">
            <input className='inputFormU' type="password" name="password" placeholder="Contraseña" required value={formData.password} onChange={handleChange} />
            <input className='inputFormU' type="password" name="passwordMatch" placeholder="Verifique su contraseña" required value={formData.passwordMatch} onChange={handleChange} />
          </div>
          {!passwordsMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}
          <div className="unico">
            <input className='inputFormU' type="text" name="address" placeholder="Direccion" required onChange={handleChange} />
          </div>
          <div className="contenedor-enviar">
            <input className={!passwordsMatch ? 'disabled hover' : 'enviar hover'} type="submit" name="registro" value="Registrate" />
          </div>
          <div className="caja">
            <input type="checkbox" name="condiciones" value="condiciones" onChange={handleChange} />
            <label>Acepto <a href={terms} target="_blank" rel="noopener noreferrer">los términos y las condiciones</a></label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserForm