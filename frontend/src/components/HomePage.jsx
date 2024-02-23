import React from 'react'
import Gofit from '../images/gofit.png'
import Promo1 from '../images/promo1.png'
import Promo2 from '../images/promo2.png'
import Promo3 from '../images/promo3.png'
import Promo4 from '../images/promo4.jpg'
import Searchbar from '../components/Searchbar.jsx'
import '../stylesheets/Home.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <div className="promos">
        <ul>
          <li>
            <img src={ Promo1 } alt="Promo 1" />
          </li>
          <li>
            <img src={ Promo2 } alt="Promo 2" />
          </li>
          <li>
            <img src={ Promo3 } alt="Promo 3" />
          </li>
          <li>
            <img src={ Promo4 } alt="Promo 4" />
          </li>
        </ul>
      </div>
      <div className="info_GO">
        <img src={ Gofit } alt="" />
        <div className="texto">        
          <p className="negrita">¿Tenés un espacio vacío entre dos actividades?</p>
          <p>Con GoFitApp gestiona tu entrenamiento y el de los miembros de tu familia. Como profesional hacete visible y extendé tus horizontes</p>
            <ul>
              <li>Flexibilidad Total </li>
              <li>Notificaciones en Tiempo Real</li>
              <li>Reservas para Toda la Familia</li> 
              <li>Interfaz Intuitiva</li>
            </ul>
          <p className="negrita">¡No pierdas más tiempo valioso esperando!</p>
        </div>
      </div>
      <br />
      <br />
      <Searchbar/>
      <br />
      <br />
      <div className="infos">
        <h2>USUARIOS</h2>
        <div className="fila">
          <div className="texto">
            <p>Con GoFitApp podrás:</p>
            <ul>
              <li>Reservar turnos en cualquier momento y lugar con un directorio completo de profesionales </li>
              <li>Elegir el día y la hora que mejor se adapte a vos</li>
              <li>Verificar la disponibilidad en tiempo real</li>
              <li>Recibir notificaciones y recordatorios de tus turnos</li>
              <li>Calificar y opinar sobre tu experiencia</li>
            </ul> 
          </div>
          <div className="contenedor-registrar">
            <Link style={{ textDecoration: 'none' }} to={'/nuevo-usuario'}><input type="submit" name="registro_usuario" value="Reserva tu turno" className="registroHome hover" /></Link>  
          </div>
        </div>  
      </div>
      <div className="infos">
        <h2>PROFESIONALES</h2>
        <div className="fila">
          <div className="contenedor-registrar">
            <Link style={{ textDecoration: 'none' }} to={'/nuevo-profesional'}><input type="submit" name="registro_profesional" value="Publica tus clases" className="registroHome hover" /></Link>
          </div>
          <div className="texto">
          <p>Con GoFitApp podrás:</p>
            <ul>
              <li>Armar la vidriera de tu servicio y subir una foto</li>
              <li>Gestionar tu agenda de manera eficiente seleccionando los días y horas en los que estás disponible para atender a tus clientes</li>
              <li>Confirmar y rechazar turnos</li>
              <li>Recibirás notificaciones por correo electrónico y en la aplicación cuando un usuario reserve</li>
            </ul>  
          </div>
        </div>  
      </div>
    </div>
  )
}

export default HomePage