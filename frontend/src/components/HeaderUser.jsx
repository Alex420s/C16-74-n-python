import React from 'react'
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom'
import '../stylesheets/HeaderUser.css'
import { FaExchangeAlt, FaRegBell } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

const HeaderUser = () => {
    const fecha = new Date().toLocaleString('es-ES',{weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});
        
  return (
    <div class="header">
        <div class="logo">
            <Link to={'/Usuario'}><img className="header-logo" src={logo} alt="Logo"/></Link>
            <span class="iconos"> <FaRegBell /> <CgProfile /> </span>
        </div>
        <div class="saludo">
            <h1>Hola Fulana!</h1>
            <h3>{ fecha }</h3>
        </div>       
        
    </div>
  )
}

export default HeaderUser