import React, { useEffect } from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import ProfessionalPage from '../components/ProfessionalPage.jsx'
import Saludo from '../components/Saludo.jsx'
import SidebarProf from '../components/SidebarProf.jsx'
import '../stylesheets/ProfessionalHome.css'
import { useNavigate } from 'react-router-dom';

const ProfessionalHome = () => {

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
              <SidebarProf />
              <ProfessionalPage />
            </div>
          </div>
      <Footer />
    </div>
  )
}

export default ProfessionalHome