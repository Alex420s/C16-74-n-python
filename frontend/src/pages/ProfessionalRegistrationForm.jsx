import React from 'react';
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import FormContainer from '../components/containers/FormContainer.jsx'
import ProfessionalForm from '../components/forms/ProfessionalForm.jsx'

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
