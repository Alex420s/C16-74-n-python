import React, { useState } from 'react';
import CheckOut from './CheckOut';
import trainer from '../images/trainer.jpg';
import '../stylesheets/PerfilProf.css';

const objetoPrueba = [
    {
        id: "2",
        dia: "Lun",
        fecha: "26/02/24",
        horario: "9:00 a 10:00",
    },
    {
        id: "4",
        dia: "Mié",
        fecha: "28/02/24",
        horario: "13:00 a 14:00",
    },
    {
        id: "6",
        dia: "Vie",
        fecha: "01/03/24",
        horario: "10:00 a 11:00",
    },
    {
        id: "8",
        dia: "Lun",
        fecha: "04/03/24",
        horario: "9:00 a 10:00",
    },
    {
        id: "10",
        dia: "Mié",
        fecha: "06/03/24",
        horario: "13:00 a 14:00",
    },
    {
        id: "12",
        dia: "Vie",
        fecha: "08/03/24",
        horario: "10:00 a 11:00",
    },
    {
        id: "14",
        dia: "Lun",
        fecha: "11/03/24",
        horario: "9:00 a 10:00",
    }
]

localStorage.setItem('name', "Gabriela Sastre");
localStorage.setItem('speciality', "Nutricionista");
localStorage.setItem('neighborhood', "San Isidro");
localStorage.setItem('description', "Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. I don't what is the problem with this anyone here");


const PerfilP = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);

    const handleReservarClick = (clase) => {
        setSelectedClass(clase);
        setShowModal(true);
    };

    return (
        <div>
            <div className="infoTrain">
                <div><img className="fotoTrainer" src={trainer} alt="" /></div>
                <div className="data">
                    <div>
                        <h2 className="h2p">{localStorage.getItem('name')}</h2>
                    </div>
                    <div>
                        <p className="h3">{localStorage.getItem('speciality')}</p>
                    </div>
                    <div>
                        <p className="h3">{localStorage.getItem('neighborhood')}</p>
                    </div>
                    <div>
                        <p className="h3">Descripción:</p>
                        <p>{localStorage.getItem('description')}</p>
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
                            <div className="columna2">{clase.dia}</div>
                            <div className="columna2">{clase.fecha}</div>
                            <div className="columna2">{clase.horario}</div>
                            <div className="columna2">
                                <button className='hover reservar' onClick={() => handleReservarClick(objetoPrueba[0])}>Reservar</button>
                                {showModal && selectedClass && (
                                    <div className="modal-overlay">
                                        <CheckOut
                                            clase={selectedClass}
                                            onClose={() => {
                                                setShowModal(false);
                                                setSelectedClass(null);
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PerfilP;

//  {showModal && selectedClass && (
//                 <CheckOut
//                     clase={selectedClass}
//                     onClose={() => {
//                         setShowModal(false);
//                         setSelectedClass(null);
//                     }}
//                 />
//             )} 