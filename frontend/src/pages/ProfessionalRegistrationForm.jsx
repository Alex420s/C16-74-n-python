import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormContainer from '../components/FormContainer.jsx'
import ProfessionalForm from '../components/ProfessionalForm.jsx'

const ProfessionalRegistrationForm = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <ProfessionalForm />
      </FormContainer>
      <Footer />
    </>
  );
}

export default ProfessionalRegistrationForm;
