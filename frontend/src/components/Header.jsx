import React from 'react'
import logo from '../images/Logo.png'
import '../stylesheets/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='navbar'>
        <Link to={'/'}><img className="header-logo" src={logo} alt="Logo"/></Link>
        <ul>
          <li className='rojo hover'><Link to={'/ingresar'} className='nav-link'>Ingresar</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Header