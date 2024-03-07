import React, { useState, useEffect } from 'react'
import '../stylesheets/UserPage.css'
import axios from 'axios'

const UserPage = () => {
  const [turnos, setTurnos] = useState([]);
  const id = localStorage.getItem('id');
  useEffect(() => {
  axios.get('http://127.0.0.1:5000/turnos-usuario/' + id)
    .then(response => {
      setTurnos(response.data);
    })
    .catch(error => {
      console.error('Error fetching user turns:', error);
    });
}, []);

  return (
    <div className="novedades">
      <p className="tituloNov">Proximos Turnos</p>
      {turnos.sort((a, b) => new Date(a.date) - new Date(b.date)).map((persona, index) => (
        <div className="novedadBox">
          <div className="boxProf">
            <p className='profesional'>{persona.professional_id}</p>
            <p className='disciplinaUser'>{persona.category}</p>
          </div>  
          <div className="boxFecha">
            <p className="fechaHora"><span>Fecha:&nbsp;</span> {persona.date}</p>
            <p className="fechaHora"><span>Horario:&nbsp;</span> {persona.time}hs</p>
          </div>
        </div> 
      ))}
    </div>
  )
}

export default UserPage