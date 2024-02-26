import React from 'react'
import '../stylesheets/Sidebar.css'
import images from '../images/image.png'
<<<<<<< Updated upstream
import { TbLogout, TbUserEdit } from "react-icons/tb";
=======
import { MdOutlineEditCalendar, MdOutlineCalendarToday, MdOutlineReceipt } from "react-icons/md";
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

const SidebarUser = () => {
  return (
    <div className="sidebar">
<<<<<<< Updated upstream
        <ul>
            <li>
                <span className="sidebarIcons"> <img src={images} alt="Logo" /> </span>
                <p>Inicio</p>
            </li>
            <li>
                <span className="sidebarIcons"> <TbUserEdit /> </span>
                <p>Editar Perfil</p>
            </li>
            <li>
                <span className="sidebarIcons"> <TbLogout /> </span>
                <p>Logout</p>
            </li>
        </ul>
=======
      <ul>
        <li>
          <span className="sidebarIcons"> <img src={images} alt="Logo" /> </span>
          <p>Inicio</p>
        </li>
        <li>
          <Link to={'/agregarTurno'}>
            <span className="sidebarIcons">
              <MdOutlineEditCalendar />
            </span>
          </Link>
          <p>Agregar Turno</p>
        </li>
        <li>
          <Link>
            <span className="sidebarIcons">
              <MdOutlineCalendarToday />
            </span>
          </Link>
          <p>Calendario</p>
        </li>
      </ul>
>>>>>>> Stashed changes
    </div>
  )
}

export default SidebarUser