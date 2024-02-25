import React, { useState } from 'react'
import '../stylesheets/Search.css'
import flechaIzq from '../images/flechaIzquierda.png';
import flechaDer from '../images/flechaDerecha.png';

const objetoPrueba = [
    {
        nombre: "John",
        apellido: "Doe",
        especialidad: "Boxeo",
        descripcion: "Lorem ipsum dolor sit amet",
        barrio: "Example",
        provincia: "Example",
        valorSesion: "$ 2500",
        disponibilidad: [["13:00 - 14:00"],["15:00 - 16:00"],["14:00 - 15:00"],["10:00 - 11:00"],["18:00 - 19:00"],["10:00 - 11:00"]],
    },
    {
        nombre: "Juan",
        apellido: "Perez",
        especialidad: "Zumba",
        descripcion: "Lorem ipsum dolor sit amet",
        barrio: "Villa Urquiza",
        provincia: "Villa Urquiza",
        valorSesion: "$ 5000",
        disponibilidad: [["15:00 - 16:00"], [""],["18:00 - 19:00"], ["10:00 - 11:00"],[""],[""]],
    },
    {
        nombre: "Daniel",
        apellido: "Garcia",
        especialidad: "Spinning",
        descripcion: "Lorem ipsum dolor sit amet",
        barrio: "Boedo",
        provincia: "Boedo",
        valorSesion: "$ 3500",
        disponibilidad: [["15:00 - 16:00"], ["18:00 - 19:00"], [""], ["10:00 - 11:00"],[""],["16:00 - 17:00"]],
    }
]

const Calendario = ({ persona, handleAnteriorSemana, handleSiguienteSemana }) => {
  const EncabezadoCalendario = ({ fechas }) => {
    return (
        <thead>
            <tr>
                {fechas.map((fecha, index) => (
                    <th key={index}>
                        <span style={{ display: 'block' }}>{fecha.split(' ')[1]}</span>
                        <span style={{ display: 'block' }}>{fecha.split(' ')[0]}</span>
                    </th>
                ))}
            </tr>
        </thead>
    );
  };
  
  const obtenerFechasSemana = (fecha) => {
      const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const fechas = [];
      for (let i = 1; i <= 6; i++) { // Modificado para mostrar solo de Lunes a Sábado
          const nuevaFecha = new Date(fecha.getTime() + i * 24 * 60 * 60 * 1000);
          const diaNumero = nuevaFecha.getDate();
          const mes = nuevaFecha.getMonth() + 1;
          fechas.push(`${diaNumero < 10 ? '0' : ''}${diaNumero}/${mes < 10 ? '0' : ''}${mes} ${diasSemana[nuevaFecha.getDay()]}`);
      }
      return fechas;
  };
  
  return (
    <div className="calendario">
      <div className="tabla-calendario">
      <table>
        <EncabezadoCalendario fechas={obtenerFechasSemana(new Date())} />
        <tbody>
          {[...Array(6)].map((_, indexFila) => (
            <tr key={indexFila}>
              {persona.disponibilidad.map((horarios, indexColumna) => (
                <td key={indexColumna} data-horario={horarios[indexFila]}>
                  {horarios[indexFila]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>  
      </div>
      <div className="navegacion-calendario">
        <button className='mover' onClick={handleAnteriorSemana}><img src={flechaIzq} alt="" /> </button>
        <button className='mover' onClick={handleSiguienteSemana}><img src={flechaDer} alt="" /> </button>
      </div>
    </div>
  );
};

const SearchPage = () => {
    const hoy = new Date(); // Fecha actual
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    const [fechaActual, setFechaActual] = useState(hoy);
    const [idPersonaSeleccionada, setIdPersonaSeleccionada] = useState(null);

    const handleVer = (id) => {
      setIdPersonaSeleccionada(id);
      setMostrarCalendario(true);
    };

    const handleAnteriorSemana = () => {
        const nuevaFecha = new Date(fechaActual);
        nuevaFecha.setDate(nuevaFecha.getDate() - 7);
        setFechaActual(nuevaFecha);
    };
    
    const handleSiguienteSemana = () => {
        const nuevaFecha = new Date(fechaActual);
        nuevaFecha.setDate(nuevaFecha.getDate() + 7);
        setFechaActual(nuevaFecha);
    };

    const handleReservar = () => {
        console.log(idPersonaSeleccionada);
    }

    return (
      <div className="listado">
        <h1 className="texto_rojo">Resultados búsqueda</h1>
        <table className="lista_prof">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Descripción</th>
              <th>Barrio</th>
              <th>Provincia/Estado</th>
              <th>Valor Sesión</th>
              <th>Reservar</th>
            </tr>
          </thead>
          <tbody>
            {objetoPrueba && objetoPrueba.map((persona, index) => (
              <tr key={index} id={`persona-${index}`}>
                <td>{persona.nombre}</td>
                <td>{persona.apellido}</td>
                <td>{persona.especialidad}</td>
                <td>{persona.descripcion}</td>
                <td>{persona.barrio}</td>
                <td>{persona.provincia}</td>
                <td>{persona.valorSesion}</td>
                <td><button className="ver" onClick={() => handleVer(index)}>Ver</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {mostrarCalendario && (
          <>
            <Calendario 
              persona={objetoPrueba[idPersonaSeleccionada]}
              handleAnteriorSemana={handleAnteriorSemana} 
              handleSiguienteSemana={handleSiguienteSemana}
            />
            <div className="posicion2">  
              <button className="reserva" onClick={handleReservar}>Reservar</button>
            </div>
          </>
        )}
      </div>
    );
  };

export default SearchPage;