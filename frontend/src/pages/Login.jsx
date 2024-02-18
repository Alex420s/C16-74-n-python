import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormContainer from '../components/FormContainer'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <Footer />
    </>
  )
}

export default Login