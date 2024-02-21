import { React, useEffect, useState } from 'react';
import logo from '../images/Logo.png';
import '../stylesheets/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  // TODO: Ajustar el logout

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const logout = () => {
  //   localStorage.removeItem('token')
  //   window.location.reload()
  // }
  
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   setIsLoggedIn(!!token); 
  // }, []); 
  
  return (
    <div>
      <header className='navbar'>
        <Link to={'/'}><img className="header-logo" src={logo} alt="Logo"/></Link>
        <ul>
          {/* {isLoggedIn ? (
            <li className='rojo hover'><Link to={'/'} className='nav-link' onClick={logout}>Logout</Link></li>
          ) : (
            <li className='rojo hover'><Link to={'/ingresar'} className='nav-link'>Ingresar</Link></li>
          )} */}
          <li className='rojo hover'><Link to={'/ingresar'} className='nav-link'>Ingresar</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Header