import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../stylesheets/forms/ProfessionalForm.css";
import { useNavigate } from "react-router-dom";
import terms from "../../terminosycondiciones.pdf";

const ProfessionalForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("role") === "professional") {
        navigate("/profesional");
      } else if (localStorage.getItem("role") === "user") {
        navigate("/usuario");
      }
    }
  }, []);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    description: "",
    phone_number: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "passwordMatch") {
      setPasswordsMatch(formData.password === value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (passwordsMatch) {
        const response = await axios.post(
          "https://c16-74-n-python.onrender.com/registro-profesional",
          formData
        );
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("firstName", response.data.first_name);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("role", response.data.role);
        navigate("/profesional");
      } else {
        console.log("Passwords do not match");
      }
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  return (
    <div>
      <p className="h2FormP">
        Registrate como
        <br />
        <span>profesional</span>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="info-1">
          <p className="h3FormP">Información personal</p>
          <div>
            <div className="fila">
              <input
                className="input-box inputFormP"
                type="text"
                placeholder="Nombre"
                required
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
              <input
                className="inputFormP"
                type="text"
                placeholder="Apellido"
                required
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="fila">
              <input
                className="inputFormP"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="inputFormP"
                type="text"
                name="username"
                id="usuario"
                placeholder="Usuario"
                required
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="fila">
              <input
                className="inputFormP"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <input
                className="inputFormP"
                type="password"
                name="passwordMatch"
                placeholder="Verifique su contraseña"
                required
              />
            </div>
            {!passwordsMatch && (
              <p style={{ color: "red" }}>Las contraseñas no coinciden</p>
            )}
          </div>
        </div>
        <div className="info-2">
          <p className="h3FormP">Información profesional</p>
          <div>
            <textarea
              name="description"
              id="descripcion"
              placeholder="Descripción"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="info-3">
          <p className="h3FormP">Información clases</p>
          <div className="fila">
            {/* <input className="inputFormP" type="text" name="address" id="Barrio" required placeholder="Dirección" value={formData.barrio} onChange={handleChange} /> */}
            <input
              className="inputFormP"
              type="text"
              name="phone_number"
              id="Provincia"
              required
              placeholder="Teléfono"
              value={formData.province}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="contenedor-enviar">
          <input
            className={!passwordsMatch ? "disabled hover" : "enviar hover"}
            type="submit"
            name="registro"
            value="Registrarte"
          />
        </div>
        <div className="caja">
          <input
            type="checkbox"
            name="condiciones"
            value="condiciones"
            onChange={handleChange}
          />
          <label>
            Acepto{" "}
            <a href={terms} target="_blank" rel="noopener noreferrer">
              los términos y las condiciones
            </a>
          </label>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalForm;
