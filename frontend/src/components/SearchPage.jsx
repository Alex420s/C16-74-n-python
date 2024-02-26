import React from 'react'
import '../stylesheets/Search.css'
import { Link } from 'react-router-dom'

const objetoPrueba = [
    {
        nombre: "John",
        apellido: "Doe",
        disciplina: "Boxeo",
        barrio: "Example",
        provincia: "Example",
    },
    {
        nombre: "Juan",
        apellido: "Perez",
        disciplina: "Zumba",
        barrio: "Villa Urquiza",
        provincia: "Villa Urquiza",
    },
    {
        nombre: "Daniel",
        apellido: "Garcia",
        disciplina: "Spinning",
        barrio: "Boedo",
        provincia: "Boedo",
    }
]

const SearchPage = () => {
    const handleVer = (id) => {
      };

    return (
      <div>
        <div className="searchbar">
          <h2 className="h2">Buscar</h2>
          <div className='inputsBuscador'>
            <div>  
              <input type="text" name="barrio" placeholder="Barrio" />
            </div>
            <div>
              <input type="text" name="provincia" placeholder="Provincia/Estado" />
            </div>
            <div>
              <select name="disciplina">
                <option value="">Todas las disciplinas</option>
                <option value="Boxeo">Boxeo</option>
                <option value="Zumba">Zumba</option>
                <option value="Crossfit">Crossfit</option>
                <option value="Gap">Gap</option>
                <option value="Pilates">Pilates</option>
              </select>
            </div>
            <div>
              <Link style={{textDecoration: 'none'}} to={'/search'}><input className='buscar hover' type="submit" name="buscar" value="Buscar" /></Link>
            </div>
          </div>
        </div>
        <div className="listado">
          <h1 className="texto_rojo">Resultados búsqueda</h1>
          <div className="lista_prof">
            <div className="encabezado">
              <div className="columna titulos-encab">Nombre</div>
              <div className="columna titulos-encab">Apellido</div>
              <div className="columna titulos-encab">Disciplina</div>
              <div className="columna titulos-encab">Barrio</div>
              <div className="columna titulos-encab">Provincia/Estado</div>
              <div className="columna titulos-encab">Reservar</div>
            </div>
            {objetoPrueba.map((persona, index) => (
              <div key={index} id={`persona-${index}`} className="fila-prof">
                <div className="columna">{persona.nombre}</div>
                <div className="columna">{persona.apellido}</div>
                <div className="columna">{persona.disciplina}</div>
                <div className="columna">{persona.barrio}</div>
                <div className="columna">{persona.provincia}</div>
                <div className="columna">
                  <button className="ver" onClick={() => handleVer(index)}>Ver</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>  
    );
};

export default SearchPage;