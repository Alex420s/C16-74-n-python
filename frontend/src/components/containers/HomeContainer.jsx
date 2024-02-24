import React from 'react'
import '../../stylesheets/containers/HomeContainer.css'

const HomeContainer = ({ children}) => {
  return (
    <div className='outers-container'>
      <div className='inners-container'>
        { children}
      </div>
    </div>
  )
}

export default HomeContainer