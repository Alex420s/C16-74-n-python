import { useState } from 'react'
import '../stylesheets/Searchbar.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchCriteria, setSearchCriteria] = useState({
    address: "",
    category: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
    console.log(searchCriteria);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://127.0.0.1:5000/buscar-turnos', {
        params: searchCriteria
      });
      navigate('/search', response.data ? { state: response.data } : null);
    } catch (error) {
      console.log(error);   
    }
  }

  return (
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
  )
}

export default Searchbar
