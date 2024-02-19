import React from 'react'
import '../stylesheets/Searchbar.css'

const Searchbar = () => {
  return (
    <div className="searchbar">
      <h2>Buscar</h2>
      <div className="filtro_barrio">  
        <select name="barrios" id="barrios">
          <option value="">Todos los barrios</option>
          <option value="opcion1">Barrio1</option>
          <option value="opcion2">Barrio2</option>
          <option value="opcion3">Barrio3</option>
          <option value="opcion4">Barrio4</option>
          <option value="opcion5">Barrio5</option>
        </select>
      </div>
      <div className="filtro_disciplina">
        <select name="disciplina" id="disciplina">
          <option value="">Todas las disciplinas</option>
          <option value="Boxeo">Boxeo</option>
          <option value="Zumba">Zumba</option>
          <option value="Crossfit">Crossfit</option>
          <option value="Gap">Gap</option>
          <option value="Pilates">Pilates</option>
        </select>
      </div>
      <div>
        <input className='buscar hover' type="submit" name="buscar" value="Buscar" />  
      </div>
    </div>
  )
}

export default Searchbar