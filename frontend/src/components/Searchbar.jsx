import { useState } from 'react'
import '../stylesheets/Searchbar.css'
import { Link } from 'react-router-dom'

const Searchbar = () => {
  //const [showModal, setShowModal] = useState(false);
  //const [selectedClass, setSelectedClass] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  // Modal popup
  // const handleBuscarClick = () => {
  //   setShowModal(true);
  // };

  return (
    <div className="searchbar">
      <p className="h2Busca">Buscar</p>
      <form className='inputsBuscador' onSubmit={handleSubmit}>
        <div>
          <input className='inputsBuscar' type="text" name="barrio" placeholder="Barrio" />
        </div>
        <div>
          <input className='inputsBuscar' type="text" name="provincia" placeholder="Provincia/Estado" />
        </div>
        <div>
          <select name="disciplina" className='disciplina'>
            <option value="">Todas las disciplinas</option>
            <option value="Boxeo">Boxeo</option>
            <option value="Zumba">Zumba</option>
            <option value="Crossfit">Crossfit</option>
            <option value="Gap">Gap</option>
            <option value="Pilates">Pilates</option>
          </select>
        </div>
        <div>
          <Link to={'/search'}><button className='hover buscar' /*onClick={handleSubmit}*/>Buscar</button></Link>
        </div>
      </form>
      {/* {showModal && (
        <div className="modal-overlay">
          <SearchPage
            clase={selectedClass}
            onClose={() => {
              setShowModal(false);
              setSelectedClass(null);
            }}
          />
        </div>
      )} */}
    </div>
  )
}

export default Searchbar
