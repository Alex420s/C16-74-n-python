import React from 'react'
import Header from '../components/footer-header/Header'
import Footer from '../components/footer-header/Footer'
import FormContainer from '../components/containers/FormContainer'
import ReservaProf from '../components/ReservaProf'

const ReservasProf = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <ReservaProf />
      </FormContainer>
      <Footer />
    </>
  )
}

export default ReservasProf