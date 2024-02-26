import React from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import ProfEdit from '../components/ProfEdit.jsx'
import Saludo from '../components/Saludo.jsx'
import SidebarProf from '../components/SidebarProf.jsx'
import '../stylesheets/ProfesionalEdit.css'

const ProfessionalEdit = () => {
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