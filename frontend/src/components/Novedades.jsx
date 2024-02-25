import React from 'react'
import '../stylesheets/Novedades.css'

const Novedades = () => {
  return (
    <div class="novedades">
       <h1 class="titulo">Proximos Turnos</h1>
       <div class="novedadBox">
        <p>Disciplina</p>
        <p className='profesional'>Profesional</p>
        <div class="novedadBoxFecha">
          <p>Dia de la semana + n </p>
          <p>00:00 - 00:00 </p>
        </div>
       </div> 

       <div class="novedadBox">
        <p>Disciplina</p>
        <p className='profesional'>Profesional</p>
        <div class="novedadBoxFecha">
          <p>Dia de la semana + n </p>
          <p>00:00 - 00:00 </p>
        </div>
       </div> 

       <div class="novedadBox">
        <p>Disciplina</p>
        <p className='profesional'>Profesional</p>
        <div class="novedadBoxFecha">
          <p>Dia de la semana + n </p>
          <p>00:00 - 00:00 </p>
        </div>
       </div> 
      
    </div>
  )
}

export default Novedades