import React from 'react'
import '../stylesheets/Sidebar.css'
import { LuCalendarPlus } from "react-icons/lu";
import { MdOutlineEditCalendar, MdOutlineCalendarToday, MdOutlineReceipt } from "react-icons/md";

const Sidebar = () => {
  return (
    <div class="sidebar">
        <ul>
            <li>
              <span class="sidebarIcons"> <LuCalendarPlus /> </span>
               <p>Nuevos Turnos</p>
            </li>
            <li>
            <span class="sidebarIcons"> <MdOutlineEditCalendar /> </span>
              <p>Editar Turnos</p>
            </li>
            <li>
            <span class="sidebarIcons"> <MdOutlineReceipt /> </span>
              <p>Pago</p>
            </li>
            <li>
            <span class="sidebarIcons"> <MdOutlineCalendarToday /> </span>
              <p>Calendario</p>
            </li>
        </ul>
      
    </div>
  )
}

export default Sidebar