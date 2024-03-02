import { useState, useEffect } from 'react'
import '../stylesheets/ProfessionalPage.css'
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom';

const ProfessionalPage = () => {
  const pruebaDatos = [
    {
      claseId: '1',
      title: 'Clase',
      start: '2024-03-04T13:00:00',
      extendedProps: {
        reservaInfo: [
          {
            firstName: 'Daniela',
            lastName: 'García',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Gabriel',
            lastName: 'Pérez',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Samuel',
            lastName: 'Quiroz',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
        ],
      },   
    },
    {
      claseId: '2',
      title: 'Clase',
      start: '2024-03-06T15:00:00',
      extendedProps: {
        reservaInfo: [
          {
            firstName: 'Daniela',
            lastName: 'García',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Gabriel',
            lastName: 'Pérez',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Samuel',
            lastName: 'Quiroz',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
        ],
      },   
    },
    {
      title: 'Clase',
      start: '2024-03-08T18:00:00',
      extendedProps: {
        reservaInfo: [
          {
            firstName: 'Daniela',
            lastName: 'García',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Gabriel',
            lastName: 'Pérez',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Samuel',
            lastName: 'Quiroz',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
        ],
      },   
    },
    {
      title: 'Clase',
      start: '2024-03-12T09:00:00',
      extendedProps: {
        reservaInfo: [
          {
            firstName: 'Daniela',
            lastName: 'García',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Gabriel',
            lastName: 'Pérez',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Samuel',
            lastName: 'Quiroz',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
        ],
      },   
    },
    {
      title: 'Clase',
      start: '2024-03-15T11:00:00',
      extendedProps: {
        reservaInfo: [
          {
            firstName: 'Daniela',
            lastName: 'García',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Gabriel',
            lastName: 'Pérez',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Samuel',
            lastName: 'Quiroz',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
        ],
      },   
    },
    {
      title: 'Clase',
      start: '2024-03-16T18:00:00',
      extendedProps: {
        reservaInfo: [
          {
            firstName: 'Daniela',
            lastName: 'García',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Gabriel',
            lastName: 'Pérez',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Samuel',
            lastName: 'Quiroz',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
        ],
      },   
    },
    {
      title: 'Clase',
      start: '2024-03-20T12:00:00',
      extendedProps: {
        reservaInfo: [
          {
            firstName: 'Daniela',
            lastName: 'García',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Gabriel',
            lastName: 'Pérez',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
          {
            firstName: 'Samuel',
            lastName: 'Quiroz',
            price: '1500',
            state: ['Confirmado', 'Pagado', 'Completado'],
          },
        ],
      },  
    }
  ];

  const [eventos] = useState(pruebaDatos);

  const navigate = useNavigate();

  const handleEventClick = (event) => {
    if (event.extendedProps && event.extendedProps.reservaInfo) {
      const claseId = event.extendedProps.reservaInfo[0].claseId;
      console.log(claseId);
      navigate(`/reservarProf/${claseId}`);
    }
  };
  
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
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
}
    
export default ProfessionalPage