import { useState, useEffect } from 'react'
import '../stylesheets/ProfessionalPage.css'
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';

const ProfessionalPage = () => {
  const [turnos, setTurnos] = useState([]);
  const [id, setId] = useState([]);
  const [eventos, setEventos] = useState([
    {
      title: 'Clase',
      start: '2024-02-26T13:00', 
      end: '2024-02-26T14:00',   
    },
    {
      title: 'Clase',
      start: '2024-02-29T09:00', 
      end: '2024-02-29T10:00',   
    },
    {
      title: 'Clase',
      start: '2024-03-01T12:00', 
      end: '2024-03-01T13:00',   
    },
    {
      title: 'Clase',
      start: '2024-03-04T13:00', 
      end: '2024-03-04T14:00',   
    },
    {
      title: 'Clase',
      start: '2024-03-07T09:00', 
      end: '2024-03-07T10:00',   
    },
    {
      title: 'Clase',
      start: '2024-03-08T12:00', 
      end: '2024-03-08T13:00',   
    },
    {
      title: 'Clase',
      start: '2024-03-11T13:00', 
      end: '2024-03-11T14:00',   
    }
  ]);

  
    // useEffect(() => {
    //   setId(localStorage.getItem('id'));
    //   const fetchShifts = async () => {
    //     try {
    //       const response = await axios.post(`http://127.0.0.1:5000/api/shifts/${localStorage.getItem('id')}`);
    //       setTurnos(response.data);
    //       console.log(turnos);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error('Error fetching shifts:', error);
    //     }
    //   };
    //   fetchShifts();
    // }, []);
  
  return (
    <div className="cuerpo">
      <h1 className="titulo">Próximos Turnos</h1>
      <div className="turnosBox">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={eventos}
          fixedWeekCount={false}
          buttonText={{
            prev: '<<',
            next: '>>',
          }}
        />
      </div>
    </div>
  );
}
    
export default ProfessionalPage