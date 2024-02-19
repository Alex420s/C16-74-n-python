import React from 'react'
import HeaderUser from '../components/HeaderUser'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Novedades from '../components/Novedades'
import UserSearchbar from '../components/UserSearchbar'
import '../stylesheets/UserHome.css'
const UserHome = () => {
  return (
    <div class="userHome">
      <HeaderUser />
      <div class="main">
        <Sidebar />
        <Novedades />
        <UserSearchbar />
      </div>
      <Footer />
    </div>
  )
}

export default UserHome