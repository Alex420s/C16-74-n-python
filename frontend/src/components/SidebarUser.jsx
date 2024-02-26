import React from 'react'
import '../stylesheets/Sidebar.css'
import { LuCalendarPlus } from "react-icons/lu";
import { MdOutlineEditCalendar, MdOutlineCalendarToday, MdOutlineReceipt } from "react-icons/md";

const SidebarUser = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
              <span className="sidebarIcons"> <LuCalendarPlus /> </span>
               <p>Nuevos Turnos</p>
            </li>
            <li>
            <span className="sidebarIcons"> <MdOutlineEditCalendar /> </span>
              <p>Editar Turnos</p>
            </li>
            <li>
            <span className="sidebarIcons"> <MdOutlineReceipt /> </span>
              <p>Pago</p>
            </li>
            <li>
            <span className="sidebarIcons"> <MdOutlineCalendarToday /> </span>
              <p>Calendario</p>
            </li>
        </ul>
    </div>
  )
}

export default SidebarUser