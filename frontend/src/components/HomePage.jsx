import React from 'react'
import Gofit from '../images/gofit.png'
import Promo1 from '../images/promo1.png'
import Promo2 from '../images/promo2.png'
import Promo3 from '../images/promo3.png'
import Promo4 from '../images/promo4.jpg'
import Searchbar from '../components/Searchbar.jsx'
import '../stylesheets/Home.css'
import { Link } from 'react-router-dom'
import ImgGral from '../images/img-principal.jpg'
import ImgUser from '../images/img-index-usuario.jpg'
import ImgProf from '../images/img-index-prof.jpg'

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
      <img src={ Gofit } alt="" className='logo'/>
        <div className='img-container'><img src={ImgGral} alt="" className="imgPricipal"/></div>
        <div className="texto infoGral">
          <p className="negrita">Plataforma de autogestión de turnos para entrenar</p>
          <p>GoFitApp es la app que te facilita la gestión de tus entrenamientos y el de los miembros de tu familia. Manteniendo actualizada la disponibilidad de los entrenadores en tu zona.<br/>Como profesional te ayuda a visibilizarte y llegar a mas clientes.</p>
        </div>
      </div>
      <br />
      <br />
      <div className='searchbar'>
        <Searchbar/>
      </div>
      <div className='infoUserProf'>
        <div className="user">
          <p className='titUserProf'>USUARIOS</p>
          <div className='detalleUserProf'>
            <div className='infoBtn'>
              <div className="texto textoUserProf">
                <p>Con <b>GoFitApp</b> podrás:</p>
                <p>Reservar turnos en cualquier momento y lugar.<br/>Elegir el día y la hora.<br/>Verificar la disponibilidad en tiempo real.<br/>Recibir notificaciones y recordatorios.</p>
              </div>
              <div className="contenedor-registrar">
                  <Link style={{ textDecoration: 'none' }} to={'/nuevo-usuario'}><input type="submit" name="registro_usuario" value="Reserva tu turno" className="registroHome hover" /></Link>  
              </div>
            </div>
            <div className="imgUserProf"><img src={ImgUser} alt="" className="imgUserProf"/></div>
          </div>
        </div>
        <div className="prof">
          <p className='titUserProf'>PROFESIONALES</p>
          <div className='detalleUserProf'>
            <div className="imgUserProf"><img src={ImgProf} alt="" className="imgUserProf"/></div>
            <div className='infoBtn'>
              <div className="texto textoUserProf">
                <p>Con <b>GoFitApp</b> podrás:</p>
                <p>Armar la vidriera de tu servicio.<br/>Gestionar tu agenda de manera eficiente.<br/>Confirmar y rechazar turnos.<br/>Recibir notificaciones cuando un usuario reserve.</p>
              </div>
              <div className="contenedor-registrar">
              <Link style={{ textDecoration: 'none' }} to={'/nuevo-profesional'}><input type="submit" name="registro_profesional" value="Publica tus clases" className="registroHome hover" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage