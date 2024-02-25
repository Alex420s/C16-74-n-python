import { React, useEffect, useState } from 'react';
import logo from '../../images/Logo.png';
import '../../stylesheets/footer-header/Header.css';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {

  // TODO: Ajustar el logout

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    navigate('/');
    // window.location.reload();
  }
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userFirstName = localStorage.getItem('firstName');
    setIsLoggedIn(!!token);
    if (userFirstName) {
      setFirstName(userFirstName);
    }
  }, []); 
  
  return (
    <div>
      <header className='navbar'>
        <Link to={'/'}><img className="header-logo" src={logo} alt="Logo"/></Link>
        <ul>
          {isLoggedIn ? (
            <>
            <li>Hola, {firstName} </li>
            <li className='rojo hover'><Link to={'/'} className='nav-link' onClick={logout}>Logout</Link></li>
            </>
          ) : (
            <li className='rojo hover'><Link to={'/ingresar'} className='nav-link'>Ingresar</Link></li>
          )}
        </ul>
      </header>
    </div>
  )
}

export default Header