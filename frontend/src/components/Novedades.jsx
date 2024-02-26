import React from 'react'
import '../stylesheets/Novedades.css'

const Novedades = () => {
  return (
    <div className="novedades">
       <h1 className="titulo">Proximos Turnos</h1>
       <div className="novedadBox">
        <p>Disciplina</p>
        <p className='profesional'>Profesional</p>
        <div className="novedadBoxFecha">
          <p>Dia de la semana + n </p>
          <p>00:00 - 00:00 </p>
        </div>
       </div> 

       <div className="novedadBox">
        <p>Disciplina</p>
        <p className='profesional'>Profesional</p>
        <div className="novedadBoxFecha">
          <p>Dia de la semana + n </p>
          <p>00:00 - 00:00 </p>
        </div>
       </div> 

       <div className="novedadBox">
        <p>Disciplina</p>
        <p className='profesional'>Profesional</p>
        <div className="novedadBoxFecha">
          <p>Dia de la semana + n </p>
          <p>00:00 - 00:00 </p>
        </div>
       </div> 
    </div>
  )
}

export default Novedades