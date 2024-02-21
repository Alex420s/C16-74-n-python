import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../stylesheets/Search.css'

const SearchPage = () => {
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    /*const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/professionals/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);*/

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
                    <td><input className='reservar hover' type="submit" name="reservar" value="Reservar" onClick={() => setMostrarCalendario(true)} /></td>          
                </tr>
    {/* Después hay que borrar el de prueba de arriba
                {data.map((professional, index) => (
                    <tr key={index}>
                        <td>{professional.user_id.first_name}</td>
                        <td>{professional.user_id.last_name}</td>
                        <td>{professional.speciality}</td>
                        <td>{professional.description}</td>
                        <td>{professional.barrio}</td>     Ver los nombres de la tabla profesionales 
                        <td>{professional.provincia}</td>
                        <td>$ {professional.tarifa}</td>
                        <td><input className='reservar hover' type="submit" name="reservar" value="Reservar" /></td>
                    </tr>
                ))} */}
            </tbody>
        </table>
        {mostrarCalendario && (
            <div id="calendario">
                <FullCalendar
                    plugins={[ dayGridPlugin ]} // Especifica los plugins que deseas utilizar, como el de visualización de día
                    initialView="dayGridMonth" // Establece la vista inicial del calendario
                    events={[ 
                        { title: 'Evento 1', date: '2024-02-21' },
                        { title: 'Evento 2', date: '2024-02-22' }
                    ]}
                />
            </div>
        )}
    </div>
  )
}

export default SearchPage