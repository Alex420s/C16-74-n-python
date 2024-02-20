import React from 'react'
import HeaderUser from '../components/HeaderUser.jsx'
import Footer from '../components/Footer.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Novedades from '../components/Novedades.jsx'
import UserSearchbar from '../components/UserSearchbar.jsx'
import UserContainer from '../components/UserContainer.jsx'
import '../stylesheets/UserHome.css'
const UserHome = () => {
  return (
    <div>
      <HeaderUser />
        <UserContainer>
          <div class="main">
            <Sidebar />
            <Novedades />
            <UserSearchbar />
          </div>
          </UserContainer>  
      <Footer />
    </div>
  )
}

export default UserHome