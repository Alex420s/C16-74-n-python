import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../../stylesheets/forms/Login.css'

const LoginForm = () => {

  // TODO: Agregar error handling
  // TODO: Manejar el token recibido por el servidor

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [emptyPasswordFieldError, setEmptyPasswordFieldError] = useState(false);
  const [emptyUsernameFieldError, setEmptyUsernameFieldError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    
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
        const response = await axios.post('http://127.0.0.1:5000/api/login', {
          username: formData.username,
          password: formData.password
        });
        console.log('Logged in user:', response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('firstName', response.data.first_name);
        localStorage.setItem('id', response.data.id);
        if (response.data.category === 'instructor') {
          navigate('/profesional');
        } else {
          navigate('/usuario');
        }
      } catch (error) {
        setError(error.response.data.message); 
      }
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Ingresá</h2>
        <div>
          <input type="text" name="username" id="user_p" placeholder="Ingrese su usuario" onChange={handleChange} />
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
