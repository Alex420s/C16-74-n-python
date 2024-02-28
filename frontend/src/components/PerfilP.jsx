import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckOut from './CheckOut';
import trainer from '../images/trainer.jpg';
import '../stylesheets/PerfilProf.css';

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

    const PerfilP = () => {
        const [showModal, setShowModal] = useState(false);
        const [selectedClass, setSelectedClass] = useState(null);

        const handleReservarClick = (clase) => {
            setSelectedClass(clase);
            setShowModal(true);
        };

        const navigate = useNavigate();    

  return (
    <div>
      <div className="infoTrain">
                <div><img className="fotoTrainer" src={ trainer } alt="" /></div>
                <div className="data">
                    <div>
                        <h2 className="h2p">Nombre Profesional</h2>
                    </div>
                    <div>
                        <p className="h3">Disciplina</p>
                    </div>
                    <div>
                        <p className="h3">Barrio</p>
                    </div>
                    <div>
                        <p className="h3">Descripción</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, exercitationem, ipsa perferendis dolores a repudiandae amet nobis culpa tenetur enim eveniet? Repellat error nisi sapiente nam labore tenetur harum porro?</p>
                    </div>
                </div>
            </div>
            <div className="clases">
                <h2>Reserva tu clase</h2>
                <div className="lista">
                    <div className="encabezado2">
                        <div className="columna2 titulos-encab2">Día</div>
                        <div className="columna2 titulos-encab2">Fecha</div>
                        <div className="columna2 titulos-encab2">Horario</div>
                        <div className="columna2 titulos-encab2">Reservar</div>
                    </div>
                    {objetoPrueba.map((clase, index) => (
                        <div key={index} id={`clase-${index}`} className="clase">
                            <div className="columna2">{clase.dia}</div>*/
                            <div className="columna2">{clase.fecha}</div>
                            <div className="columna2">{clase.horario}</div>
                            <div className="columna2">
                                <button
                                className="reservar"
                                onClick={() => {
                                    handleReservarClick(clase);
                                    navigate('/check-out'); // Redirige a la ruta '/CheckOut'
                                }} >
                                    Reservar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && selectedClass && (
                <CheckOut
                    clase={selectedClass}
                    onClose={() => {
                        setShowModal(false);
                        setSelectedClass(null);
                    }}
                />
            )}
    </div>
  );
};

export default PerfilP;