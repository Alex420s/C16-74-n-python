import React, { useState } from 'react'
import axios from 'axios';
import '../stylesheets/UserForm.css'

const UserForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        usuario: '',
        password: '',
        passwordMatch: '',
        description: '',
        speciality: '',
        barrio: '',
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);

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
                const response = await axios.post('', formData);
                console.log('Response:', response.data);
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
            <form>
                <div className="info">
                    <div className="fila">
                        <input className="input-box" type="text" placeholder="Nombre" required name="Nombre" />
                        <input type="text" placeholder="Apellido" required name="Apellido" />
                    </div>
                    <div className="fila">
                        <input type="tel" placeholder="Teléfono" required name="Telefono" />
                        <input type="email" name="email" required placeholder="Email" />
                    </div>
                    <div className="unico">
                        <input type="text" name="usuario" placeholder="Usuario" required />
                    </div>
                    <div class="fila">
                        <input type="password" name="password" placeholder="Contraseña" required value={formData.password} onChange={handleChange} />
                        <input type="password" name="passwordMatch" placeholder="Verifique su contraseña" required value={formData.passwordMatch} onChange={handleChange} />
                    </div>
                    {!passwordsMatch && <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>}
                    <div className="contenedor-enviar">
                        <input className={!passwordsMatch ? 'disabled hover' : 'enviar hover'} type="submit" name="registro" value="Registrarte" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserForm