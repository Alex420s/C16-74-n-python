import React from 'react'
import flechaIzq from '../images/flechaIzquierda.png';
import flechaDer from '../images/flechaDerecha.png';
import '../stylesheets/ProfessionalPage.css'

const ProfessionalPage = () => {
  const handleAnteriorSemana = () => {
    /*const nuevaFecha = new Date(fechaActual);
    nuevaFecha.setDate(nuevaFecha.getDate() - 7);
    setFechaActual(nuevaFecha);*/
  };

  const handleSiguienteSemana = () => {
    /*const nuevaFecha = new Date(fechaActual);
    nuevaFecha.setDate(nuevaFecha.getDate() + 7);
    setFechaActual(nuevaFecha);*/
  };

  return (
    <div className="cuerpo">
      <h1 className="titulo">Proximos Turnos</h1>
      <div className="turnosBox">
        <table>
          <thead>
            <tr>
              <th>Lunes 00/00</th>
              <th>Martes 00/00</th>
              <th>Miércoles 00/00</th>
              <th>Jueves 00/00</th>
              <th>Viernes 00/00</th>
              <th>Sábado 00/00</th>
            </tr>
          </thead>
          <tbody>
            <tr className="turnosHorarios">
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
            </tr>  
            <tr>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
            </tr>
            <tr>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
              <td>13:00 - 14:00 <br /> 8/10</td>
            </tr>
          </tbody>  
        </table>
        <div className="navegacion-semanal">
          <button className='mover' onClick={handleAnteriorSemana}><img src={flechaIzq} alt="" /> </button>
          <button className='mover' onClick={handleSiguienteSemana}><img src={flechaDer} alt="" /> </button>
        </div>
      </div>   
    </div>
  )
}
  
export default ProfessionalPage