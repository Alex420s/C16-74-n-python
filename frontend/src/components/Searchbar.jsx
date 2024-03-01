import { useState } from 'react'
import '../stylesheets/Searchbar.css'
import { Link } from 'react-router-dom'
import SearchPage from './SearchPage'

const Searchbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any form submission logic if needed
  }

  const handleBuscarClick = () => {
    setShowModal(true);
  };

  return (
    <div className="searchbar">
      <h2 className="h2">Buscar</h2>
      <form className='inputsBuscador' onSubmit={handleSubmit}>
        <div>
          <input type="text" name="barrio" placeholder="Barrio" />
        </div>
        <div>
          <input type="text" name="provincia" placeholder="Provincia/Estado" />
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
          <button className='hover buscar' onClick={handleBuscarClick}>Buscar</button>
        </div>
      </form>
      {showModal && (
        <div className="modal-overlay">
          <SearchPage
            clase={selectedClass}
            onClose={() => {
              setShowModal(false);
              setSelectedClass(null);
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Searchbar
