import { React, useEffect, useState } from 'react'
import logo from '../images/Logo.png'
import '../stylesheets/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const logout = () => {
    localStorage.removeItem('token')
    console.log("logged out");
  }

  // const [IsLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   try {
  //     const storedUser = localStorage.getItem('token');
  //     console.log(localStorage.getItem('token'));
  //     if (storedUser) {
  //       setIsLoggedIn(true);
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving user from storage:', error);
  //   }
  // }, []);

  return (
    <div>
      <header className='navbar'>
        <Link to={'/'}><img className="header-logo" src={logo} alt="Logo" /></Link>
        <ul>
          {/* {IsLoggedIn ? (
            <li className='rojo hover'><Link to={'/'} className='nav-link' onClick={logout}>Logout</Link></li>
          ) : (
            <li className='rojo hover'><Link to={'/ingresar'} className='nav-link'>Ingresar</Link></li>
          )} */}
          <li className='rojo hover'><Link to={'/ingresar'} className='nav-link'>Ingresar</Link></li>
          <li className='rojo hover'><Link to={'/'} className='nav-link' onClick={logout}>Logout</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Header