import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FormContainer from '../components/FormContainer.jsx'
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