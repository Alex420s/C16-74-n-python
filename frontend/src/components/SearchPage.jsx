import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../stylesheets/Search.css'
import flechaIzq from '../images/flechaIzquierda.png';
import flechaDer from '../images/flechaDerecha.png';

const SearchPage = () => {
    const hoy = new Date(); // Fecha actual
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    const [fechaActual, setFechaActual] = useState(hoy);
    const [celdasSeleccionadas, setCeldasSeleccionadas] = useState(new Set());
    const [posicionCalendario, setPosicionCalendario] = useState(0); 
  
    const handleVer = (id) => {
        // Aquí puedes agregar lógica para determinar la posición de la fila específica con respecto a la parte superior de la ventana del navegador
    
        // Esto es para abrir el calendario debajo del botón "Ver" en la fila específica
        const fila = document.getElementById(id);
        const posicionFila = fila.offsetTop + fila.offsetHeight;
    
        setPosicionCalendario(posicionFila); // Actualizamos el estado con la posición de apertura del calendario
        setMostrarCalendario(true);
    };

    const handleSeleccionarHorario = (hora) => {
        
    };
        
    const handleReservar = () => {
        /* Lógica para reservar el horario seleccionado */
    };
    
    const CalendarioHorarios = ({ diasSemana, obtenerFecha }) => {
        // Horarios de ejemplo para cada día
        const horarios = [
            ["13:00 - 14:00", "", "13:00 - 14:00", "13:00 - 14:00", "", ""],
            ["13:00 - 14:00", "", "13:00 - 14:00", "13:00 - 14:00", "", ""]
        ];
    
        return (
            <table className="calendario-table">
                <thead>
                    <tr>
                        {diasSemana.map((dia, indice) => (
                            <th key={indice}>{dia} <br /> {obtenerFecha(indice + 1)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {horarios.map((fila, indexFila) => (
                        <tr key={indexFila}>
                            {fila.map((hora, indexColumna) => (
                                <td key={indexColumna} data-hora={hora} onClick={() => handleSeleccionarHorario(hora)}>
                                    {hora}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
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

    const EncabezadoCalendario = ({fecha}) => {
        function obtenerFecha(dia) {
            const diaActual = fecha.getDay();
            const diferenciaDias = dia - diaActual;
            const nuevaFecha = new Date(fecha.getTime() + (diferenciaDias * 24 * 60 * 60 * 1000));
            const diaNumero = nuevaFecha.getDate();
            const mes = nuevaFecha.getMonth() + 1;
            return `${diaNumero < 10 ? '0' : ''}${diaNumero}/${mes < 10 ? '0' : ''}${mes}`;
        }
    
        return (
            <CalendarioHorarios diasSemana={["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]} obtenerFecha={obtenerFecha} />
        );
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
                {/*falta la lógica del back*/}
                <tr>
                    <td>Prueba</td>
                    <td>Uno</td>
                    <td>Boxeo</td>
                    <td>Las mejores clases</td>
                    <td>Villa Urquiza</td>
                    <td>CABA - Bs As</td>
                    <td>$ 2000</td>
                    <td><input className='ver hover' type="submit" name="ver" value="Ver" onClick={() => handleVer('idDeLaFila')} /></td>          
                </tr>
                {/*en el handlever podemos usar el id del profesional desde la tabla*/}
                <tr>
                    <td>Prueba</td>
                    <td>Dos</td>
                    <td>Zumba</td>
                    <td>Me aburre inventar</td>
                    <td>Villa Pueyrredón</td>
                    <td>CABA - Bs As</td>
                    <td>$ 2000</td>
                    <td><input className='ver hover' type="submit" name="ver" value="Ver" onClick={() => handleVer('idDeLaFila')} /></td>          
                </tr>
            </tbody>
        </table>
        {mostrarCalendario && (
          <div className="calendario">
            <EncabezadoCalendario fecha={fechaActual}/>
            <div>
                <button className='mover' onClick={handleAnteriorSemana}><img src={flechaIzq} alt="" /> </button>
                <button className='mover' onClick={handleSiguienteSemana}><img src={flechaDer} alt="" /> </button>
            </div>    
            <div className="posicion2">  
                <button className="reserva" onClick={handleReservar}>Reservar</button>
            </div>
          </div>
        )}
        
        </div>
    );
  };

export default SearchPage