import React from 'react'
import Header from '../components/footer-header/Header'
import Footer from '../components/footer-header/Footer'
import FormContainer from '../components/containers/FormContainer'
import LoginForm from '../components/forms/LoginForm'

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