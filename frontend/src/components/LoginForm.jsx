import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../stylesheets/Login.css'

const LoginForm = () => {

  // TODO: Agregar error handling
  // TODO: Manejar el roke recibido por el servidor

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [emptyPasswordFieldError, setEmptyPasswordFieldError] = useState(false);
  const [emptyUsernameFieldError, setEmptyUsernameFieldError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === 'password' && value.trim() === '') {
      setEmptyPasswordFieldError(true);
    } else {
      setEmptyPasswordFieldError(false);
    }
    if (name === 'user' && value.trim() === '') {
      setEmptyUsernameFieldError(true);
    } else {
      setEmptyUsernameFieldError(false);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emptyPasswordFieldError || !emptyUsernameFieldError) {
      console.log("click")
      try {
        const response = await axios.post('https://render-api-a6du.onrender.com/user/login', formData);
        console.log('Logged in user:', response.data);
        navigate('/'); 
      } catch (error) {
        setError(error.response.data.error);
      }
    }     
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Ingresá</h2>
        <div>
          <input type="text" name="email" id="user_p" placeholder="Ingrese su email" onChange={handleChange} />
        </div>
        {emptyUsernameFieldError && <p style={{ color: 'red' }}>Este campono puede estar vacío</p>}
        <div>  
          <input type="password" name="password" id="password_p" placeholder="Contraseña" onChange={handleChange} />
        </div>
        {emptyPasswordFieldError && <p style={{ color: 'red' }}>Este campo no puede estar vacío</p>}
        <div className="contenedor-ingresar">
          <input className={emptyPasswordFieldError || emptyUsernameFieldError ? 'disabled' : 'hover ingresar'} type="submit" name="ingreso" value="Ingresar" />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
