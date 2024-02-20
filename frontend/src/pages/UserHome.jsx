import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Saludo from '../components/Saludo.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Novedades from '../components/Novedades.jsx'
import UserSearchbar from '../components/UserSearchbar.jsx'
import UserContainer from '../components/UserContainer.jsx'
import '../stylesheets/UserHome.css'

const UserHome = () => {
  return (
    <div>
      <Header />
      <Saludo />
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