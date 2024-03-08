import React, { useEffect } from 'react'
import Header from '../components/footer-header/Header'
import Footer from '../components/footer-header/Footer'
import ReservaProf from '../components/ReservaProf'
import Saludo from '../components/Saludo'
import SidebarProf from '../components/SidebarProf'
import { useNavigate } from 'react-router-dom';

const ReservasProf = () => {

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
              <ReservaProf />
            </div>
          </div>
      <Footer />
    </div>
  )
}

export default ReservasProf