import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../stylesheets/Search.css'

const SearchPage = () => {
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
    <div>
        <h1>Listado de Profesionales</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Especialidad</th>
                    <th>Descripción</th>
                    <th>Barrio</th>
                    <th>Provincia/Estado</th>
                    <th>Tarifa por Sesión</th>
                    <th>Reservar</th>
                </tr>
            </thead>
            <tbody>
    {/*            {data.map((professional, index) => (
                    <tr key={index}>
                        <td>{professional.user_id.first_name}</td>
                        <td>{professional.user_id.last_name}</td>
                        <td>{professional.speciality}</td>
                        <td>{professional.description}</td>
                        <td>{professional.barrio}</td>     Ver los nombres de la tabla profesionales 
                        <td>{professional.provincia}</td>
                        <td>{professional.tarifa}</td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    </div>
  )
}

export default SearchPage