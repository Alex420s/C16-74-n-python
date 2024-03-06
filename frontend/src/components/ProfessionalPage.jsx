import { useState, useEffect } from 'react'
import '../stylesheets/ProfessionalPage.css'
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';

const ProfessionalPage = () => {
  const pruebaDatos = [
    {
      title: 'Clase',
      start: '2024-03-04T13:00:00',
    },
    {
      title: 'Clase',
      start: '2024-03-06T15:00:00',
    },
    {
      title: 'Clase',
      start: '2024-03-08T18:00:00',
    },
    {
      title: 'Clase',
      start: '2024-03-12T09:00:00',
    },
    {
      title: 'Clase',
      start: '2024-03-15T11:00:00',
    },
    {
      title: 'Clase',
      start: '2024-03-16T18:00:00',
    },
    {
      title: 'Clase',
      start: '2024-03-20T12:00:00',
    }
  ];

  const [eventos] = useState(pruebaDatos);

  return (
    <div className="cuerpo">
      <p className="titulo">Próximos Turnos</p>
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
          aspectRatio={1.5}
          headerToolbar={{
            start: '',
            center: '',
            end: ''
          }}
          contentHeight="auto"
          dayMaxEvents={true}
          eventContent={true}
          dayMaxEventRows={true}
        />
      </div>
    </div>
  );
}
    
export default ProfessionalPage