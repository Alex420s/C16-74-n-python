import React from 'react'
import Header from '../components/footer-header/Header'
import Footer from '../components/footer-header/Footer'
import FormContainer from '../components/containers/FormContainer'
import UserForm from '../components/forms/UserForm'

const UserRegistrationForm = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <UserForm />
      </FormContainer>
      <Footer />
    </>
  )
}

export default UserRegistrationForm