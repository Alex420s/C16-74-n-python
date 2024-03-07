import React from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import SearchPage from '../components/SearchPage.jsx'
import SidebarUser from '../components/SidebarUser.jsx'

const Search = () => {
    return (
      <>
        <Header />
          <div className="main">
              <div className='side-novedades'>
                {localStorage.getItem('token') ? <SidebarUser /> : null}
                <SearchPage />
              </div>
            </div>
        <Footer /> 
      </>
    )
  }
  
export default Search