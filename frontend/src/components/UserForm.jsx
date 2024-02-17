import React from 'react'

const UserForm = () => {
  return (
    <div>
      <form>
            <h2>Registrate</h2>
            <fieldset class="registrate">
                <div class="fila">
                    <div class="col">
                        <input type="text" name="name_p" id="name_p" placeholder="Nombre" />
                        <input type="number" name="number_p" min="0" id="number_p" placeholder="Teléfono" />
                    </div>
                    <div class="col">
                        <input type="text" name="lastname_p" id="lastname_p" placeholder="Apellido" />
                        <input type="email" name="mail_p" id="mail_p" placeholder="Email" />    
                    </div>
                </div>
                <div class="fila">
                    <input type="text" name="user_p" id="user_p" placeholder="Ingrese su usuario" />
                </div>
                <div class="fila">
                    <input type="password" name="password_p" id="password_p" placeholder="Contraseña" />
                    <input type="password" name="password2_p" id="password2_p" placeholder="Verifique su contraseña" />
                </div>
                <button type="submit" value="Ingresar" class="ingresar">Registrate</button>
            </fieldset>
            <br />
            <br />
        </form> 
        <div class="linea2"></div>
    </div>
  )
}

export default UserForm