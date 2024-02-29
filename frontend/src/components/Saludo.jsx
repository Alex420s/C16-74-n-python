import { useState, useEffect } from 'react'
import '../stylesheets/Saludo.css'

const Saludo = () => {
    const fecha = new Date().toLocaleString('es-ES',{weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});
    const [firstName, setFirstName] = useState('');

    // Temporal, para mostrar el nombre del usuario
    localStorage.setItem('firstName', 'Fulano/a');

    useEffect(() => {
        const userFirstName = localStorage.getItem('firstName');
        if (userFirstName) {
          setFirstName(userFirstName);
        }
      }, []); 
      
    return (
        <div className="saludo">
            <div className='hola-fulana'><p>Hola, {firstName}</p></div>
            <div className='fecha-hoy'><p>{ fecha }</p></div>
        </div>   
    )
}
        
export default Saludo