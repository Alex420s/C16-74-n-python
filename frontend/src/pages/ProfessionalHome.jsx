import React from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import ProfessionalPage from '../components/ProfessionalPage.jsx'
import Saludo from '../components/Saludo.jsx'
import SidebarProf from '../components/SidebarProf.jsx'
import '../stylesheets/ProfessionalHome.css'

const ProfessionalHome = () => {
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