import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <form>
            <h2>Ingresá</h2>
            <fieldset class="registrate">
                <div class="col">
                    <input type="text" name="user_p" id="user_p" placeholder="Ingrese su usuario" />
                    <input type="password" name="password_p" id="password_p" placeholder="Contraseña" />
                </div>
                <button type="submit" value="Ingresar" class="ingresar">Ingresar</button>
            </fieldset>
            <br />
            <br />
        </form> 
        <div class="linea2"></div>
    </div>
  )
}

export default LoginForm