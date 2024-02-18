import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import HomeContainer from '../components/HomeContainer.jsx'
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