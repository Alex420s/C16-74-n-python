import React from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import FormContainer from '../components/containers/FormContainer.jsx'
import SearchPage from '../components/SearchPage.jsx'

const Search = () => {
    return (
      <>
        <Header />
          <FormContainer>
            <SearchPage />
          </FormContainer>
        <Footer /> 
      </>
    )
  }
  
export default Search