import React from 'react'
import '../stylesheets/Saludo.css'

const Saludo = () => {
    const fecha = new Date().toLocaleString('es-ES',{weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});

    return (
        <div className="saludo">
            <div className='hola-fulana'><p>Hola Fulana!</p></div>
            <div className='fecha-hoy'><p>{ fecha }</p></div>
        </div>   
    )
}
        
export default Saludo