import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormContainer from '../components/FormContainer'
import UserForm from '../components/UserForm'

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