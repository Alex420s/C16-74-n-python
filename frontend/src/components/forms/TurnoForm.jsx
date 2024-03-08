import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// import '../../stylesheets/forms/TurnoForm.css'

const TurnoForm = () => {
  const [id, setId] = useState(null);
  useEffect(() => {
    const storedId = localStorage.getItem('id');
    setId(storedId);
  }, []);
// https://render-api-a6du.onrender.com/appointments/turn/1
  const [formData, setFormData] = useState({
    'date': '',
    'time': '',
    'category': '',
    'capacity': '',
    'instructor_message': '',
    'repeat': false,
    'instructor_id': id,
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/crear-turno', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  }

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    const { name, checked, value } = e.target;
    const newValue = e.target.type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='date'>Fecha</label>
          <input name='date' placeholder='Fecha' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='date'>Hora</label>
          <input name='time' placeholder='Hora' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='date'>Categoría</label>
          <input name='category' placeholder='Categoría' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='date'>Capacidad</label>
          <input name='capacity' placeholder='Capacidad' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='date'>Mensaje</label>
          <textarea name='message' placeholder='Comentario' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='date'>Repetir semanalmente</label>
          <input name='repeat' type='checkbox' checked={formData.repeat} onChange={handleChange} />
        </div>
        <div>
        {/* input temporal */}
          <label htmlFor='intructor_id'>instructor_id</label>
          <input name='instructor_id' placeholder='Id del instructor' onChange={handleChange} />
        </div>
        <div>
          <input type='submit' value='Crear' />
        </div>
      </form>
    </>
  )
}

export default TurnoForm