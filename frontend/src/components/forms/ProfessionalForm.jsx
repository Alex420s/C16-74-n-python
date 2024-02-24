import React, { useState } from 'react';
import axios from 'axios';
import '../../stylesheets/forms/ProfessionalForm.css'
import { Link } from 'react-router-dom'

const ProfessionalForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    usuario: '',
    password: '',
    passwordMatch: '',
    description: '',
    speciality: '',
    barrio: '',
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  //   if (e.target.name === 'contraseña-verificar') {
  //     setPasswordsMatch(formData.password === e.target.value);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'passwordMatch') {
      setPasswordsMatch(formData.password === value);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('https://render-api-a6du.onrender.com/', formData);
  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error:', error.response.data);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (passwordsMatch) {
        const response = await axios.post('https://render-api-a6du.onrender.com/', formData);
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
      <h2>Registrate como<br />
        <span>profesional</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="info-1">
          <h3>Información personal</h3>
          <div>
            <div className="fila">
              <input className="input-box" type="text" placeholder="Nombre" required name="first_name" value={formData.first_name} onChange={handleChange} />
              <input type="text" placeholder="Apellido" required name="last_name" value={formData.last_name} onChange={handleChange} />
            </div>
            <div className="fila">
              <input type="tel" placeholder="Teléfono" required name="phone_number" value={formData.phone_number} onChange={handleChange} />
              <input type="email" name="email" id="email" required placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <input type="text" name="username" id="usuario" placeholder="Usuario" required value={formData.username} onChange={handleChange} />
            </div>
            <div className="fila">
              <input type="password" name="password" placeholder="Contraseña" required value={formData.password} onChange={handleChange} />
              <input type="password" name="passwordMatch" placeholder="Verifique su contraseña" required value={formData.passwordMatch} onChange={handleChange} />
            </div>
            {!passwordsMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}
          </div>
        </div>
        <div className="info-2">
          <h3>Informacion profesional</h3>
          <div>
            <select name="discipline" id="discipline" value={formData.speciality} onChange={handleChange}>
              <option value="Boxeo">Boxeo</option>
              <option value="Zumba">Zumba</option>
              <option value="Crossfit">Crossfit</option>
              <option value="Gap">Gap</option>
              <option value="Pilates">Pilates</option>
              <option value="Yoga">Yoga</option>
            </select>
            <textarea name="description" id="descripcion" placeholder="Descripción" readonly value={formData.description} onChange={handleChange}></textarea>
          </div>
        </div>
        <div className="info-3">
          <h3>Información clases</h3>
          <div className="fila">
            <input type="text" name="barrio" id="Barrio" required placeholder="Barrio" value={formData.barrio} onChange={handleChange} />
            <input type="text" name="provincia" id="Provincia" required placeholder="Provincia/Estado" value={formData.provincia} onChange={handleChange} />
          </div>
          <div id="contenedor">
            <div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="lunes-opcion" id="lunes-opcion" value={formData['lunes-opcion']} onChange={handleChange} />
                  <label for="lunes-opcion">Lunes</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-lunes" value={formData['opcion1-lunes']} onChange={handleChange} />
                    <input type="time" name="opcion1-2-lunes" value={formData['opcion1-2-lunes']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion2-lunes" value={formData['opcion2-lunes']} onChange={handleChange} />
                    <input type="time" name="opcion2-2-lunes" value={formData['opcion2-2-lunes']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion3-lunes" value={formData['opcion3-lunes']} onChange={handleChange} />
                    <input type="time" name="opcion3-2-lunes" value={formData['opcion3-2-lunes']} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="martes-opcion" id="martes-opcion" value={formData['martes-opcion']} onChange={handleChange} />
                  <label for="martes-opcion">Martes</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-martes" value={formData['opcion1-martes']} onChange={handleChange} />
                    <input type="time" name="opcion1-2-martes" value={formData['opcion1-2-martes']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion2-martes" value={formData['opcion2-martes']} onChange={handleChange} />
                    <input type="time" name="opcion2-2-martes" value={formData['opcion2-2-martes']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion3-martes" value={formData['opcion3-martes']} onChange={handleChange} />
                    <input type="time" name="opcion3-2-martes" value={formData['opcion3-2-martes']} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="miercoles-opcion" id="miercoles-opcion" value={formData['miercoles-opcion']} onChange={handleChange} />
                  <label for="miercoles-opcion">Miércoles</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-miercoles" value={formData['opcion1-miercoles']} onChange={handleChange} />
                    <input type="time" name="opcion1-2-miercoles" value={formData['opcion1-2-miercoles']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion2-miercoles" value={formData['opcion2-miercoles']} onChange={handleChange} />
                    <input type="time" name="opcion2-2-miercoles" value={formData['opcion2-2-miercoles']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion3-miercoles" value={formData['opcion3-miercoles']} onChange={handleChange} />
                    <input type="time" name="opcion3-2-miercoles" value={formData['opcion3-2-miercoles']} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="jueves-opcion" id="jueves-opcion" value={formData['jueves-opcion']} onChange={handleChange} />
                  <label for="jueves-opcion">Jueves</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-jueves" value={formData['opcion1-jueves']} onChange={handleChange} />
                    <input type="time" name="opcion1-2-jueves" value={formData['opcion1-2-jueves']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion2-jueves" value={formData['opcion2-jueves']} onChange={handleChange} />
                    <input type="time" name="opcion2-2-jueves" value={formData['opcion2-2-jueves']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion3-jueves" value={formData['opcion3-jueves']} onChange={handleChange} />
                    <input type="time" name="opcion3-2-jueves" value={formData['opcion3-2-jueves']} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="viernes-opcion" id="viernes-opcion" value={formData['viernes-opcion']} onChange={handleChange} />
                  <label for="viernes-opcion">Viernes</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-viernes" value={formData['opcion1-viernes']} onChange={handleChange} />
                    <input type="time" name="opcion1-2-viernes" value={formData['opcion1-2-viernes']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion2-viernes" value={formData['opcion2-viernes']} onChange={handleChange} />
                    <input type="time" name="opcion2-2-viernes" value={formData['opcion2-2-viernes']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion3-viernes" value={formData['opcion3-viernes']} onChange={handleChange} />
                    <input type="time" name="opcion3-2-viernes" value={formData['opcion3-2-viernes']} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="posicion">
                <div className="opciones-checkbox">
                  <input type="checkbox" name="sabado-opcion" id="sabado-opcion" value={formData['sabado-opcion']} onChange={handleChange} />
                  <label for="sabado-opcion">Sabado</label>
                </div>
                <div className="columna-de-tiempo">
                  <div>
                    <input type="time" name="opcion1-sabado" value={formData['opcion1-sabado']} onChange={handleChange} />
                    <input type="time" name="opcion1-2-sabado" value={formData['opcion1-2-sabado']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion2-sabado" value={formData['opcion2-sabado']} onChange={handleChange} />
                    <input type="time" name="opcion2-2-sabado" value={formData['opcion2-2-sabado']} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="time" name="opcion3-sabado" value={formData['opcion3-sabado']} onChange={handleChange} />
                    <input type="time" name="opcion3-2-sabado" value={formData['opcion3-2-sabado']} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor-enviar">
          <input className={!passwordsMatch ? 'disabled hover' : 'enviar hover'} type="submit" name="registro" value="Registrarte" />
        </div>
        <div className="caja">
          <input type="checkbox" name="condiciones" value="condiciones" onChange={handleChange}/> <label>Acepto <Link to="../Terminos y Condiciones.pdf" target="_blank">los términos y las condiciones</Link></label>
        </div>

      </form>
    </div>
  )
}

export default ProfessionalForm
