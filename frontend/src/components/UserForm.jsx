import React from 'react'
import '../stylesheets/UserForm.css'

const UserForm = () => {
  return (
    <div>
        <h2>Registrate como<br />
          <span>usuario</span></h2>
        <form>
            <div className="info">
                <div className="fila">
                    <input className="input-box" type="text" placeholder="Nombre" required name="Nombre" />
                    <input type="text" placeholder="Apellido" required name="Apellido" />
                </div>
                <div className="fila">
                    <input type="tel" placeholder="Teléfono" required name="Telefono" />
                    <input type="email" name="email" id="email" required placeholder="Email" />    
                </div>
                <div>
                    <input type="text" name="usuario" id="usuario" placeholder="Usuario" required />
                </div>
                <div class="fila">
                    <input type="password" name="contraseña" placeholder="Contraseña" required/>
                    <input type="password" name="contraseña-verificar" placeholder="Verifique su contraseña" required />
                </div>
                <div id="contenedor-enviar">
                    <input type="submit" name="registro" value="Registrarte" id="enviar" />
                </div>
            </div>
        </form> 
    </div>
  )
}

export default UserForm