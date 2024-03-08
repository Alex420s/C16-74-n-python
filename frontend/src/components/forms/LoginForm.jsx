import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../../stylesheets/forms/Login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [emptyPasswordFieldError, setEmptyPasswordFieldError] = useState(false);
  const [emptyemailFieldError, setEmptyemailFieldError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);

    if (name === "password" && value.trim() === "") {
      setEmptyPasswordFieldError(true);
    } else {
      setEmptyPasswordFieldError(false);
    }
    if (name === "user" && value.trim() === "") {
      setEmptyemailFieldError(true);
    } else {
      setEmptyemailFieldError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emptyPasswordFieldError || !emptyemailFieldError) {
      console.log("click");
      try {
        const response = await axios.post(
          "https://c16-74-n-python.onrender.com/login",
          {
            username: formData.username,
            password: formData.password,
          }
        );
        console.log("Logged in user:", response.data);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("firstName", response.data.first_name);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("id", response.data.id);
        console.log(response.data.role);
        if (response.data.role === "professional") {
          navigate("/profesional");
        } else {
          navigate("/usuario");
        }
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="h2Login">Ingresá</p>
        <div>
          <input
            className="inputLogin"
            type="text"
            name="username"
            id="user_p"
            placeholder="Ingrese su usuario"
            onChange={handleChange}
          />
        </div>
        {emptyemailFieldError && (
          <p style={{ color: "red" }}>Este campo no puede estar vacío</p>
        )}
        <div>
          <input
            className="inputLogin"
            type="password"
            name="password"
            id="password_p"
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </div>
        {emptyPasswordFieldError && (
          <p style={{ color: "red" }}>Este campo no puede estar vacío</p>
        )}
        <div className="contenedor-ingresar">
          <input
            className={
              emptyPasswordFieldError || emptyemailFieldError
                ? "disabled"
                : "hover ingresar"
            }
            type="submit"
            name="ingreso"
            value="Ingresar"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="registro">
          <p>¿No tenés cuenta?</p>
          <p>
            Registrate como{" "}
            <Link to={"/nuevo-usuario"}>
              {" "}
              <span> Usuario</span>
            </Link>{" "}
            o{" "}
            <Link to={"/nuevo-profesional"}>
              <span>Profesional</span>
            </Link>
          </p>
        </div>
      </form>
      <br />
      <br />
    </div>
  );
};

export default LoginForm;
