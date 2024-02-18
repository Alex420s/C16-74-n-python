import React from 'react'
import '../stylesheets/Sidebar.css'
import { LuCalendarPlus } from "react-icons/lu";
import { MdOutlineEditCalendar, MdOutlineCalendarToday, MdOutlineReceipt } from "react-icons/md";

const Sidebar = () => {
  return (
    <div class="sidebar">
        <ul>
            <li>
              <LuCalendarPlus />
               <p>Nuevos Turnos</p>
            </li>
            <li>
              <MdOutlineEditCalendar />
              <p>Editar Turnos</p>
            </li>
            <li>
              <MdOutlineReceipt />
              <p>Pago</p>
            </li>
            <li>
              <MdOutlineCalendarToday />
              <p>Calendario</p>
            </li>
        </ul>
      
    </div>
  )
}

export default Sidebar