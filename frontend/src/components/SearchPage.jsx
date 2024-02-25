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
        disponibilidad: [["15:00 - 16:00"], [""], ["18:00 - 19:00"], ["10:00 - 11:00"],[""],[""]],
    }
]

const SearchPage = () => {
    const hoy = new Date(); // Fecha actual
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    const [fechaActual, setFechaActual] = useState(hoy);
    const [posicionCalendario, setPosicionCalendario] = useState(0); 
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

    const obtenerFecha = (fecha, dia) => {
        if (!(fecha instanceof Date)) {
        fecha = new Date(); // Si no es una fecha válida, utilizamos la fecha actual
    }
        const diaActual = fecha.getDay();
        const diferenciaDias = dia - diaActual;
        const nuevaFecha = new Date(fecha.getTime() + (diferenciaDias * 24 * 60 * 60 * 1000));
        const diaNumero = nuevaFecha.getDate();
        const mes = nuevaFecha.getMonth() + 1;
        return `${diaNumero < 10 ? '0' : ''}${diaNumero}/${mes < 10 ? '0' : ''}${mes}`;
    };
    const Calendario = () => {
        const EncabezadoCalendario = ({fecha}) => {
                   
        }
          
        return (
          <div className="calendario">
            <EncabezadoCalendario fecha={fechaActual}/>
            <div className="tabla-calendario">
              {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"].map((dia, indice) => (
                <th key={indice}>{dia} <br /> {obtenerFecha(indice + 1)}</th>
              ))}
              <tbody>
                {[...Array(6)].map((_, indexFila) => (
                  <tr key={indexFila}>
                    {objetoPrueba[idPersonaSeleccionada].disponibilidad.map((horarios, indexColumna) => (
                        <td key={indexColumna} data-horario={horarios[indexFila]}>
                            {horarios[indexFila]}
                        </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </div>
            <div className="navegacion-calendario">
              <button className='mover' onClick={handleAnteriorSemana}><img src={flechaIzq} alt="" /> </button>
              <button className='mover' onClick={handleSiguienteSemana}><img src={flechaDer} alt="" /> </button>
            </div>
          </div>
        );
      };
    
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
                    <td><button onClick={() => handleVer(index)}>Ver</button></td>
                </tr>
                ))}
            </tbody>
        </table>
        {mostrarCalendario && (
          <><Calendario/>
          <div className="posicion2">  
              <button className="reserva" onClick={handleReservar}>Reservar</button>
          </div>
          </>
        
        )}
        
        </div>
    );
  };

export default SearchPage