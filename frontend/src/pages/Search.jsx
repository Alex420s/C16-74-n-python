import React from 'react'
import Header from '../components/footer-header/Header.jsx'
import Footer from '../components/footer-header/Footer.jsx'
import SearchPage from '../components/SearchPage.jsx'
import SidebarUser from '../components/SidebarUser.jsx'
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const searchData = location.state;
    return (
      <>
        <Header />
          <div className="main">
              <div className='side-novedades'>
                {localStorage.getItem('token') ? <SidebarUser /> : null}
                <SearchPage turns={searchData} />
              </div>
            </div>
        <Footer /> 
      </>
    )
  }
  
export default Search