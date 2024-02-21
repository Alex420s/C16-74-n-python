import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'; // Importa useHistory para redirigir al usuario

import '../stylesheets/UserForm.css';

const UserForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        nick_name: '',
        password: '',
        passwordMatch: '', // Agrega el campo passwordMatch al estado
        description: '',
        speciality: '',
        barrio: '',
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const history = useNavigate(); // No pud instalar useHistory
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'passwordMatch') {
            setPasswordsMatch(formData.password === value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (passwordsMatch) {
                const response = await axios.post('http://localhost:8000/user/register', formData,);

                console.log('Response:', response.data);
                // Redirige al usuario al home después de enviar el formulario
                history('/');
            } else {
                console.log('Passwords do not match');
            }
        } catch (error) {
            console.error('Error:', error.response.data);
        }
    };

    return (
        <div>
            <h2>Registrate como<br />
                <span>usuario</span></h2>
            <form onSubmit={handleSubmit}>
                <div className="info">
                    <div className="fila">
                        <input className="input-box" type="text" placeholder="Nombre" required name="first_name" onChange={handleChange} />
                        <input type="text" placeholder="Apellido" required name="last_name" onChange={handleChange} />
                    </div>
                    <div className="fila">
                        <input type="tel" placeholder="Teléfono" required name="phone_number" onChange={handleChange} />
                        <input type="email" name="email" id="email" required placeholder="Email" onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="nick_name" id="nick_name" placeholder="Usuario" required onChange={handleChange} />
                    </div>
                    <div className="fila">
                        <input type="password" name="password" placeholder="Contraseña" required onChange={handleChange} />
                        <input type="password" name="passwordMatch" placeholder="Verifique su contraseña" required onChange={handleChange} />
                    </div>
                    {!passwordsMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}
                    <div id="contenedor-enviar">
                        <input className={!passwordsMatch ? 'disabled hover' : 'enviar hover'} type="submit" name="registro" value="Registrarte" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserForm;
