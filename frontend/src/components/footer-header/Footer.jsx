import React from 'react'
import '../../stylesheets/footer-header/Footer.css'
import logo from '../../images/Logo.png'
import facebook from '../../images/Facebook.png'
import twitter from '../../images/Twitter.jpg'
import instagram from '../../images/Instagram.png'
import linkedin from '../../images/Linkedin.png'
import copyright from '../../images/copyright.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <footer>
        <Link to={'/'}><img className="footer-logo" src={logo} alt="" /></Link>
        <div className="redes">
          <img className="red" src={facebook} alt="" />
          <img className="red" src={twitter} alt="" />
          <img className="red" src={instagram} alt="" />
          <img className="red" src={linkedin} alt="" />
        </div>
        <div className="footer">
          <p>Todos los derechos reservados 2024</p>
          <img className="copyright" src={copyright} alt="Copyright" />
        </div>
      </footer>
    </div>
  )
}

export default Footer