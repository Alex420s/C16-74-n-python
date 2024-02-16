import React from 'react'
import '../stylesheets/Footer.css'
import logo from '../images/Logo.png'
import copyright from '../images/copyright.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <footer>
        <Link to={'/'}><img className="footer-logo" src={logo} alt="" /></Link>
        <div className="footer">
          <p>Todos los derechos reservados</p>
          <img className="copyright" src={copyright} alt="Copyright" />
          <p>2024</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer