import React from 'react'
import '../stylesheets/UserPage.css'

const UserPage = () => {

  const objetoPrueba = [
    {
      speciality: 'Boxeo',
      professional: 'Daniel García',
      day: 'Martes',
      date: '05-03-24',
      time: '15:00',
    },
    {
      speciality: 'Zumba',
      professional: 'Marcela López',
      day: 'Viernes',
      date: '08-03-2024',
      time: '18:00',
    },
    {
      speciality: 'Gap',
      professional: 'Juan Márquez',
      day: 'Miércoles',
      date: '13-03-2024',
      time: '16:00',
    },
  ]

  return (
    <div className="novedades">
      <p className="tituloNov">Proximos Turnos</p>
      {objetoPrueba.sort((a, b) => new Date(a.date) - new Date(b.date)).map((persona, index) => (
        <div className="novedadBox">
          <div className="boxProf">
            <p className='profesional'>{persona.professional}</p>
            <p className='disciplina'>{persona.speciality}</p>
          </div>  
          <div className="boxFecha">
            <p className="fechaHora"><span>Fecha:&nbsp;</span> {persona.day} {persona.date}</p>
            <p className="fechaHora"><span>Horario:&nbsp;</span> {persona.time} hs</p>
          </div>
        </div> 
      ))}
    </div>
  )
}

export default UserPage