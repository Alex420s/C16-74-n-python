import React from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import FormContainer from '../components/containers/FormContainer.jsx'
import SearchPage from '../components/SearchPage.jsx'
import SidebarUser from '../components/SidebarUser.jsx'

const Search = () => {
    return (
      <>
        <Header />
          <div className="main">
              <div className='side-novedades'>
                <SidebarUser />
                <SearchPage />
              </div>
            </div>
        <Footer /> 
      </>
    )
  }
  
export default Search