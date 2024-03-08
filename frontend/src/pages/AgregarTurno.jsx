import React from 'react'
import Header from '../components/footer-header/Header'
import Footer from '../components/footer-header/Footer'
import FormContainer from '../components/containers/FormContainer'
import TurnoForm from '../components/forms/TurnoForm'

const AgregarTurno = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <TurnoForm />
      </FormContainer>
      <Footer />
    </>
  )
}

export default AgregarTurno