import '../stylesheets/Reserva.css'

const ReservaProf = () => {
  const objetoPrueba = [
    {
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
      date: '06-03-2024',
      time: '13:00',
      price: '2000',
      state: ['Confirmado', 'Pagado', 'Completado']   
    },
    {
      firstName: 'Sandra',
      lastName: 'López',
      date: '10-03-2024',
      time: '12:00',
      price: '1500',
      state: ['Confirmado', 'Pagado', 'Completado']   
    },
    {
      firstName: 'Santino',
      lastName: 'Guarino',
      date: '07-03-2024',
      time: '10:00',
      price: '1500',
      state: ['Confirmado', 'Pagado', 'Completado']   
    },
    {
      firstName: 'Agustina',
      lastName: 'Pérez',
      date: '08-03-2024',
      time: '15:00',
      price: '1800',
      state: ['Confirmado', 'Pagado', 'Completado']   
    },
    {
      firstName: 'Lautaro',
      lastName: 'González',
      date: '12-03-2024',
      time: '18:00',
      price: '2500',
      state: ['Confirmado', 'Pagado', 'Completado']   
    },
  ];

  const handleStateSelect = (e) => {
    // Aquí puedes obtener el nuevo estado seleccionado del evento e
    // implementar la lógica para actualizar el estado de la reserva
    console.log("Estado seleccionado:", e.target.value);
  };

  return (
    <div className="todo2">
      <p className="texto_reser">Mis Reservas</p>
      <div className="lista_reser">
        <div className="encabezado2">
          <div className="columna-r titulos-encab2">Fecha</div>
          <div className="columna-r titulos-encab2">Nombre</div>
          <div className="columna-r titulos-encab2">Apellido</div>
          <div className="columna-r titulos-encab2">Hora</div>
          <div className="columna-r titulos-encab2">Precio</div>
          <div className="columna-r titulos-encab2">Estado</div>
        </div>
        {objetoPrueba.sort((a, b) => new Date(a.date) - new Date(b.date)).map((persona, index) => (
            <div key={index} id={`persona-${index}`} className="fila-reser">
            <div className="columna-r">{persona.date}</div>
            <div className="columna-r">{persona.firstName}</div>
            <div className="columna-r">{persona.lastName}</div>
            <div className="columna-r">{persona.time}</div>
            <div className="columna-r"><p>$ {persona.price}</p></div>
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