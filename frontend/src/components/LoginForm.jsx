import React from 'react'
import '../stylesheets/Login.css'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div>
      <form>
        <h2>Ingresá</h2>
        <div>
          <input type="text" name="user_p" id="user_p" placeholder="Ingrese su usuario" />
        </div>
        <div>  
          <input type="password" name="password_p" id="password_p" placeholder="Contraseña" />
        </div>
        <div id="contenedor-ingresar">
          <input type="submit" name="ingreso" value="Ingresar" id="ingresar" />
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