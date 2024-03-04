import React from 'react'
import '../stylesheets/Sidebar.css'
import images from '../images/image.png'
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const SidebarUser = () => {

  const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
        navigate('/');
        // window.location.reload();
      }
  return (
    <div className="sidebar">
      <ul>
        <li>
          <span className="sidebarIcons"> <img src={images} alt="Logo" /> </span>
          <p>Inicio</p>
        </li>
        <li>
          <span className="sidebarIcons"> <MdOutlineEditCalendar /> </span>
          <p>Nuevos Turnos</p>
        </li>
        <li>
          <span className="sidebarIcons" onClick={logout}> <TbLogout /> </span>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  )
}

export default SidebarUser