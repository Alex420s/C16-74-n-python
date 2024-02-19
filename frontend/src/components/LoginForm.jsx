import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../stylesheets/Login.css'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [emptyPasswordFieldError, setEmptyPasswordFieldError] = useState(false);
  const [emptyUsernameFieldError, setEmptyUsernameFieldError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'password_p' && value.trim() === '') {
      setEmptyPasswordFieldError(true);
    } else {
      setEmptyPasswordFieldError(false);
    }
    if (name === 'user_p' && value.trim() === '') {
      setEmptyUsernameFieldError(true);
    } else {
      setEmptyUsernameFieldError(false);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emptyPasswordFieldError || emptyUsernameFieldError) {
      try {
        const response = await axios.post('', formData);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error.response.data);
      }
    }     
  }
  return (
    <div>
      <form>
        <h2>Ingresá</h2>
        <div>
          <input type="text" name="user_p" id="user_p" placeholder="Ingrese su usuario" onChange={handleChange} />
        </div>
        {emptyUsernameFieldError && <p style={{ color: 'red' }}>Este campono puede estar vacío</p>}
        <div>  
          <input type="password" name="password_p" id="password_p" placeholder="Contraseña" onChange={handleChange} />
        </div>
        {emptyPasswordFieldError && <p style={{ color: 'red' }}>Este campo no puede estar vacío</p>}
        <div id="contenedor-ingresar">
          <input className={emptyPasswordFieldError || emptyUsernameFieldError ? 'disabled' : 'hover ingresar'} type="submit" name="ingreso" value="Ingresar" />
        </div>
        <div class="registro">
        <p>¿No tenés cuenta?</p>
        <p>Registrate como <Link to={'/nuevo-usuario'}> <span> Usuario</span></Link> o <Link to={'/nuevo-profesional'}><span>Profesional</span></Link></p>
        </div>
      </form> 
      <br />
      <br />

    </div>
  )
}

export default LoginForm