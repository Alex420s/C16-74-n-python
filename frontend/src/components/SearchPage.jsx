import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../stylesheets/Search.css'
import flechaIzq from '../images/flechaIzquierda.png';
import flechaDer from '../images/flechaDerecha.png';

const SearchPage = () => {
    const hoy = new Date(); // Fecha actual
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    const [fechaActual, setFechaActual] = useState(hoy);
  
    const handleVer = () => {
       setMostrarCalendario(true);
    };

    const handleSeleccionarHorario = (fecha) => {
        /*falta la lógica*/
        console.log('Reservar horario para:', fecha);
    };

    const handleReservar = () => {
        ;
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

    const EncabezadoCalendario = () => {
        function obtenerFecha(dia) {
          const diaActual = hoy.getDay();
          const diferenciaDias = dia - diaActual;
          const nuevaFecha = new Date(hoy.getTime() + (diferenciaDias * 24 * 60 * 60 * 1000));
          const diaNumero = nuevaFecha.getDate();
          const mes = nuevaFecha.getMonth() + 1;
          return `${diaNumero < 10 ? '0' : ''}${diaNumero}/${mes < 10 ? '0' : ''}${mes}`;
        }
    
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
                    <tr>
                        <td>13:00 - 14:00</td>
                        <td></td>
                        <td>13:00 - 14:00</td>
                        <td>13:00 - 14:00</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>13:00 - 14:00</td>
                        <td></td>
                        <td>13:00 - 14:00</td>
                        <td>13:00 - 14:00</td>
                        <td></td>
                        <td></td>
                    </tr>        
                </tbody>
            </table>
        );
    };

    return (
      <div className="listado">
        <h1>Listado de Profesionales</h1>
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
                <tr>
                    <td>Prueba</td>
                    <td>Uno</td>
                    <td>Boxeo</td>
                    <td>Las mejores clases</td>
                    <td>Villa Urquiza</td>
                    <td>CABA - Bs As</td>
                    <td>$ 2000</td>
                    <td><input className='ver hover' type="submit" name="ver" value="Ver" onClick={handleVer} /></td>          
                </tr>
            </tbody>
        </table>
        {mostrarCalendario && (
          <div className="calendario">
            <EncabezadoCalendario />
            <div>
                <button className='mover' onclick={handleAnteriorSemana}><img src="flechaIzq" alt="" /> </button>
                <button className='mover' onClick={handleSiguienteSemana}><img src="flechaDer" alt="" /> </button>
            </div>    
            <button onClick={handleReservar}>Reservar</button>
          </div>
        )}
        
        </div>
    );
  };

export default SearchPage