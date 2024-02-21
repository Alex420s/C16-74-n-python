import React from 'react'
import '../stylesheets/FormContainer.css'
import axios from 'axios' 
// Agrega withCredentials para incluir cookies
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const FormContainer = ({ children}) => {
  return (
    <div className='outer-container'>
      <div className='inner-container'>
        { children}
      </div>
    </div>
  )
}

export default FormContainer