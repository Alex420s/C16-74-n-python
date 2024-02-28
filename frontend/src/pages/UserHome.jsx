import React from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import Saludo from '../components/Saludo.jsx'
import SidebarUser from '../components/SidebarUser.jsx'
import Novedades from '../components/Novedades.jsx'
import '../stylesheets/UserHome.css'

const UserHome = () => {
  return (
    <div>
      <Header />
      <Saludo />
          <div className="main">
            <div className='side-novedades'>
              <SidebarUser />
              <Novedades />
            </div>
          </div>
      <Footer />
    </div>
  )
}

export default UserHome