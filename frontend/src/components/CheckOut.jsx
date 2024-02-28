import React from 'react';
import '../stylesheets/CheckOut.css';

const objetoPrueba = [
  {
      dia: "Lunes",
      fecha: "26/02/24",
      horario: "9:00 a 10:00",
  },
  {
      dia: "Miércoles",
      fecha: "28/02/24",
      horario: "13:00 a 14:00",
  },
  {
      dia: "Viernes",
      fecha: "01/03/24",
      horario: "10:00 a 11:00",
  },
  {
      dia: "Lunes",
      fecha: "04/03/24",
      horario: "9:00 a 10:00",
  },
  {
      dia: "Miércoles",
      fecha: "06/03/24",
      horario: "13:00 a 14:00",
  },
  {
      dia: "Viernes",
      fecha: "08/03/24",
      horario: "10:00 a 11:00",
  },
  {
      dia: "Lunes",
      fecha: "11/03/24",
      horario: "9:00 a 10:00",
  }
]

const CheckOut = ({ clase, onClose }) => {
  return (
    <div className="checkout-container">
      <div className="checkout-texto">
        <p className="reserva">Reserva</p>
        <p>
          Profesor: Nombre Apellido<br />
          Día {objetoPrueba[0].dia} / Fecha {objetoPrueba[0].fecha} / Horario {objetoPrueba[0].horario}
        </p>
      </div>
      <div className="checkout-texto">
        <p className="metodos">Información transferencias</p>
        <p>USB: 000000000000000000000<br />Alias: ALIAS.PROFE.GOFIT</p>
        <button className="btnConfirm" onClick={onClose}>
          Confirmar reserva
        </button>
      </div>
    </div>
  );
};

export default CheckOut;