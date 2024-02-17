import React from 'react';
import '../stylesheets/ProfessionalRegistrationForm.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormContainer from '../components/FormContainer.jsx'

const ProfessionalRegistrationForm = () => {
  return (
    <>
      <Header />
      <FormContainer />
      {/* <main>
        <h2>Registrate como<br />
          <span>profesional</span>
        </h2>
        <div className="info-1">
          <h3>Información personal</h3>
          <div>
            <div>
              <input type="text" placeholder="Nombre" required name="Nombre" />
              <input type="text" placeholder="Apellido" required name="Apellido" />
            </div>
            <div>
              <input type="tel" placeholder="Teléfono" required name="Telefono" />
              <input type="email" name="email" id="email" required placeholder="Email" />
            </div>
            <div>
              <input type="text" name="usuario" id="usuario" placeholder="Usuario" required />
            </div>
            <div>
              <input type="password" name="contraseña" placeholder="Contraseña" required />
              <input type="password" name="contraseña-verificar" placeholder="Verifique su contraseña" required />
            </div>
          </div>
        </div>
        <div className="info-2">
          <h3>Informacion profesional</h3>
          <div>
            <select name="discipline" id="discipline">
              <option value="Boxeo">Boxeo</option>
              <option value="Zumba">Zumba</option>
              <option value="Crossfit">Crossfit</option>
              <option value="Gap">Gap</option>
              <option value="Pilates">Pilates</option>
              <option value="Yoga">Yoga</option>
            </select>
            <textarea name="descripcion" id="descripcion" placeholder="Descripción" readonly></textarea>
          </div>
        </div>
        <div className="info-3">
          <h3>Información clases</h3>
          <div>
            <input type="text" name="Barrio" id="Barrio" required placeholder="Barrio" />
          </div>
          <div id="contenedor">
            <div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="lunes-opcion" id="lunes-opcion" />
                  <label for="lunes-opcion">Lunes</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-lunes" />
                    <input type="time" name="opcion1-2-lunes" />
                  </div>
                  <div>
                    <input type="time" name="opcion2-lunes" />
                    <input type="time" name="opcion2-2-lunes" />
                  </div>
                  <div>
                    <input type="time" name="opcion3-lunes" />
                    <input type="time" name="opcion3-2-lunes" />
                  </div>
                </div>
              </div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="martes-opcion" id="martes-opcion" />
                  <label for="martes-opcion">Martes</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-martes" />
                    <input type="time" name="opcion1-2-martes" />
                  </div>
                  <div>
                    <input type="time" name="opcion2-martes" />
                    <input type="time" name="opcion2-2-martes" />
                  </div>
                  <div>
                    <input type="time" name="opcion3-martes" />
                    <input type="time" name="opcion3-2-martes" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="miercoles-opcion" id="miercoles-opcion" />
                  <label for="miercoles-opcion">Miércoles</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-miercoles" />
                    <input type="time" name="opcion1-2-miercoles" />
                  </div>
                  <div>
                    <input type="time" name="opcion2-miercoles" />
                    <input type="time" name="opcion2-2-miercoles" />
                  </div>
                  <div>
                    <input type="time" name="opcion3-miercoles" />
                    <input type="time" name="opcion3-2-miercoles" />
                  </div>
                </div>
              </div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="jueves-opcion" id="jueves-opcion" />
                  <label for="jueves-opcion">Jueves</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-jueves" />
                    <input type="time" name="opcion1-2-jueves" />
                  </div>
                  <div>
                    <input type="time" name="opcion2-jueves" />
                    <input type="time" name="opcion2-2-jueves" />
                  </div>
                  <div>
                    <input type="time" name="opcion3-jueves" />
                    <input type="time" name="opcion3-2-jueves" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="viernes-opcion" id="viernes-opcion" />
                  <label for="viernes-opcion">Viernes</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-viernes" />
                    <input type="time" name="opcion1-2-viernes" />
                  </div>
                  <div>
                    <input type="time" name="opcion2-viernes" />
                    <input type="time" name="opcion2-2-viernes" />
                  </div>
                  <div>
                    <input type="time" name="opcion3-viernes" />
                    <input type="time" name="opcion3-2-viernes" />
                  </div>
                </div>
              </div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="sabado-opcion" id="sabado-opcion" />
                  <label for="sabado-opcion">Sabado</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-sabado" />
                    <input type="time" name="opcion1-2-sabado" />
                  </div>
                  <div>
                    <input type="time" name="opcion2-sabado" />
                    <input type="time" name="opcion2-2-sabado" />
                  </div>
                  <div>
                    <input type="time" name="opcion3-sabado" />
                    <input type="time" name="opcion3-2-sabado" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contenedor-enviar">
          <input type="submit" name="registro" value="Registrarte" id="enviar" />
        </div>
      </main> */}
      <Footer />
    </>
  );
}

export default ProfessionalRegistrationForm;
