import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FormContainer from '../components/FormContainer.jsx'
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