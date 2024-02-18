import React from 'react'
import '../stylesheets/FormContainer.css'

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