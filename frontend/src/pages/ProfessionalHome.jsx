import React from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import FormContainer from '../components/containers/FormContainer.jsx'
import ProfessionalPage from '../components/ProfessionalPage.jsx'
import Saludo from '../components/Saludo.jsx'


const ProfessionalHome = () => {
  return (
    <>
      <Header />
      <Saludo />
        <FormContainer>
          <ProfessionalPage />
        </FormContainer>
      <Footer /> 
    </>
  )
}

export default ProfessionalHome