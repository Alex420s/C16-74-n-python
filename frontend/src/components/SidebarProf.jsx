import React from 'react'
import '../stylesheets/Sidebar.css'
import images from '../images/image.png'
import { MdOutlineEditCalendar, MdOutlineCalendarToday, MdOutlineReceipt } from "react-icons/md";

const SidebarUser = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
                <span className="sidebarIcons"> <img src={images} alt="Logo" /> </span>
                <p>Inicio</p>
            </li>
            <li>
                <span className="sidebarIcons"> <MdOutlineEditCalendar /> </span>
                <p>Editar Turnos</p>
            </li>
            <li>
                <span className="sidebarIcons"> <MdOutlineReceipt /> </span>
                <p>Pagos</p>
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