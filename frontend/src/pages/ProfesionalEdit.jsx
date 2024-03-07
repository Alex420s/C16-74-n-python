import React, { useEffect } from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import ProfEdit from '../components/ProfEdit.jsx'
import Saludo from '../components/Saludo.jsx'
import SidebarProf from '../components/SidebarProf.jsx'
import '../stylesheets/ProfesionalEdit.css'
import { useNavigate } from 'react-router-dom';

const ProfessionalEdit = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === 'user') {
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
          <ProfEdit />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProfessionalEdit