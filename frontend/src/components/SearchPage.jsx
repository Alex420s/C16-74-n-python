import React, { useState } from 'react'
import '../stylesheets/Search.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const SearchPage = (searchData) => {

  const [searchCriteria, setSearchCriteria] = useState({
    address: "",
    category: ""
  })

  const [rows, setRows] = useState(searchData.turns);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria({...searchCriteria, [name]: value });
    console.log(searchCriteria);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get('http://127.0.0.1:5000/buscar-turnos', {
        params: searchCriteria
      });
      setRows(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bodySearch">
      <p className="texto_rojo">Buscar</p>
      <div className="searchbar">
      <p className="h2Busca">Buscar</p>
      <form className='inputsBuscador' onSubmit={handleSubmit}>
          <input className='inputsBuscar' type="text" name="address" placeholder="Dirección" onChange={handleChange} />
          <select className='especialidad' name="category" onChange={handleChange}>
            <option value="">Todas las disciplinas</option>
            <option value="Boxeo">Boxeo</option>
            <option value="Zumba">Zumba</option>
            <option value="Crossfit">Crossfit</option>
            <option value="Gap">Gap</option>
            <option value="Pilates">Pilates</option>
          </select>
        <div>
          <input className='hover buscar' type="submit" value="Buscar"/>
        </div>
      </form>
    </div>
      <div className="listado">
        <p className="texto_rojo">Resultados búsqueda</p>
        <div className="lista_prof">
          <div className="encabezado">
            <div className="columna titulos-encab">Nombre del profesional</div>
            <div className="columna titulos-encab">Disciplina</div>
            <div className="columna titulos-encab">Fecha</div>
            <div className="columna titulos-encab prov">Dirección   </div>
            <div className="columna titulos-encab">Reservar</div>
          </div>
          {rows.map((turno, index) => (
            <div key={index} id={`turno-${index}`} className="fila-prof">
              <div className="columna nom">{turno.professional_id} {turno.apellido}</div>
              <div className="columna disc">{turno.category}</div>
              <div className="columna barrio">{turno.date}</div>
              <div className="columna prov">{turno.address}</div>
              <div className="columna">
                <Link style={{textDecoration: 'none'}} to={'/perfilProf'}><button className="hover ver">Ver</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>  
    );
};

export default SearchPage;