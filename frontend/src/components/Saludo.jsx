import React from 'react'
import '../stylesheets/Saludo.css'

const Saludo = () => {
    const fecha = new Date().toLocaleString('es-ES',{weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});

    return (
        <div class="saludo">
            <h1 className="h1">Hola Fulana!</h1>
            <h3>{ fecha }</h3>
        </div>   
    )
}
        
export default Saludo