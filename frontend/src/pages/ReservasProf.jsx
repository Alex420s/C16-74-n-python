import React from 'react'
import Header from '../components/footer-header/Header'
import Footer from '../components/footer-header/Footer'
import ReservaProf from '../components/ReservaProf'
import Saludo from '../components/Saludo'
import SidebarProf from '../components/SidebarProf'

const ReservasProf = () => {
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