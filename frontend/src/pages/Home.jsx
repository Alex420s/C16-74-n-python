import React from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import HomeContainer from '../components/containers/HomeContainer.jsx'
import HomePage from '../components/HomePage.jsx'


const Home = () => {
  return (
    <>
      <Header />
        <HomeContainer>
          <HomePage />
        </HomeContainer>
      <Footer /> 
    </>
  )
}

export default Home