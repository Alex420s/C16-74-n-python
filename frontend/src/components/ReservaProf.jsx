import react from 'react'
import '../stylesheets/Reserva.css'
import { useParams } from 'react-router-dom';

const ReservaProf = () => {
  const { claseId } = useParams(); // Obtiene el `claseId` de la ruta
  
  const objetoPrueba = [
    {
      claseId: '1',
      firstName: 'Daniela',
      lastName: 'García',
      date: '04-03-2024',
      time: '12:00',
      price: '1500',
      state: ['Confirmado', 'Pagado', 'Completado']   
    },
    {
      firstName: 'Gabriel',
      lastName: 'Perez',
      date: '04-03-2024',
      time: '15:00',
      price: '2500',
      state: ['Confirmado', 'Pagado', 'Completado']   
    },
    {
      firstName: 'Pablo',
      lastName: 'Gómez',
      date: '04-03-2024',
      time: '13:00',
      price: '2000',
      state: ['Confirmado', 'Pagado', 'Completado']   
    },
    {
      firstName: 'Sandra',
      lastName: 'López',
      date: '04-03-2024',
      time: '12:00',
      price: '1500',
      state: ['Confirmado', 'Pagado', 'Completado']   
    },
  ];

  const filteredPrueba = objetoPrueba.filter((persona) => persona.extendedProps.claseId === claseId);

  const handleStateSelect = (e) => {
    // Aquí puedes obtener el nuevo estado seleccionado del evento e
    // implementar la lógica para actualizar el estado de la reserva
    console.log("Estado seleccionado:", e.target.value);
  };

  return (
    <div className="todo2">
      <p className="texto_reser">Reservar del FECHA</p>
      <div className="lista_reser">
          {filteredPrueba.map((persona, index) => (
            <div key={index} id={`persona-${index}`} className="fila-reser">
            <div className="columna-r">{persona.extendedProps.firstName}</div>
            <div className="columna-r">{persona.extendedProps.lastName}</div>
            <div className="columna-r">{persona.time}</div>
            <div className="columna-r">{persona.extendedProps.price}</div>
            <div className="columna-r">
              <select name="state" id="state" onChange={(e) => handleStateSelect(e)}>
                <option value="confirmado">Confirmado</option>
                <option value="pagado">Pagado</option>
                <option value="completado">Completado</option>
              </select>
            </div>
            </div>
          ))}
      </div>
    </div>  
  );
}
    
export default ReservaProf