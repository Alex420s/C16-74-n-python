import React from 'react';
import '../stylesheets/CheckOut.css';
import { IoCloseCircleOutline } from "react-icons/io5";

const objetoPrueba =
  {
      nombre: "Gabriela Sastre",
      dia: "Lunes",
      fecha: "26/02/24",
      horario: "9:00 a 10:00",
      cuenta: "000000000000000000000",
      alias: "ALIAS.PROFE.GOFIT",
  }

const CheckOut = ({ clase, onClose }) => {

  const handleClose = () => {
    onClose();
  }

  return (
    <div className="checkout-container">
      <div className="checkout-texto">
      <IoCloseCircleOutline className='close-button' onClick={handleClose}/>
        <p className="reserva">Reserva</p>
        <p>
          Profesor: {objetoPrueba.nombre}<br />
          Día {objetoPrueba.dia} / Fecha {objetoPrueba.fecha} / Horario {objetoPrueba.horario}
        </p>
      </div>
      <div className="checkout-texto">
        <p className="metodos">Información transferencias</p>
        <p>USB: {objetoPrueba.cuenta}<br />Alias: {objetoPrueba.alias}</p>
        <button className="hover btnConfirm" onClick={onClose}>
          Confirmar reserva
        </button>
      </div>
    </div>
  );
};

export default CheckOut;