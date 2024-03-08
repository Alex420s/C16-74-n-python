import React, { useEffect } from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import Saludo from '../components/Saludo.jsx'
import SidebarUser from '../components/SidebarUser.jsx'
import UserPage from '../components/UserPage.jsx'
import '../stylesheets/UserHome.css'
import { useNavigate } from 'react-router-dom';

const UserHome = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === 'professional') {
        navigate('/profesional');
      }
      else if (localStorage.getItem('role') === 'user') {
        navigate('/usuario');
      }
    }
    else {
      navigate('/ingresar');
    }
  }, []); 

  return (
    <div>
      <Header />
      <Saludo />
          <div className="main">
            <div className='side-novedades'>
              <SidebarUser />
              <UserPage />
            </div>
          </div>
      <Footer />
    </div>
  )
}

export default UserHome