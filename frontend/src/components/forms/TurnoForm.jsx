import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../../stylesheets/forms/TurnoForm.css'

const TurnoForm = () => {
  const [id, setId] = useState(null);
  useEffect(() => {
    const storedId = localStorage.getItem('id');
    setId(storedId);
  }, []);

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
      const response = await axios.post('http://127.0.0.1:5000/api/turno', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
    }

  /*return (
    <> 
    <form onSubmit={handleSubmit}>

    </>
  )*/
}

export default TurnoForm