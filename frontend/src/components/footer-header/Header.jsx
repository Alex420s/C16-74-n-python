import { React, useEffect, useState } from 'react';
import logo from '../../images/Logo.png';
import '../../stylesheets/footer-header/Header.css';
import { useNavigate, Link } from 'react-router-dom';
import { VscAccount, VscBell } from "react-icons/vsc";
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {

  // TODO: Ajustar el logout

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    window.location.reload();
  }
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []); 
  
  return (
    <div>
      <header className='navbar'>
        <Link to={'/'}><img className="header-logo" src={logo} alt="Logo"/></Link>
        <ul>
          {isLoggedIn ? (
            <>
            <li className='hover'><Link to={'/ingresar'} className='nav-link'><VscBell className='navbar-logo' /></Link></li>
            <li className='hover'><Link to={'/ingresar'} className='nav-link'><VscAccount className='navbar-logo' /></Link></li>
            <li className='hover'><Link to={'/'} className='nav-link' onClick={logout}><IoIosLogOut className='navbar-logo' /></Link></li>
            </>
          ) : (
            <li className='hover'><Link to={'/ingresar'} className='nav-link'><CiLogin className='navbar-logo' /></Link></li>
          )}
        </ul>
      </header>
    </div>
  )
}

export default Header