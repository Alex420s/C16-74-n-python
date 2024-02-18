import React from 'react'
import HeaderUser from '../components/HeaderUser'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Novedades from '../components/Novedades'
import Searchbar from '../components/Searchbar'
import '../stylesheets/UserHome.css'
const UserHome = () => {
  return (
    <>
      <HeaderUser />
      <div class="main">
        <Sidebar />
        <Novedades />
        <Searchbar />
      </div>
      <Footer />
    </>
  )
}

export default UserHome