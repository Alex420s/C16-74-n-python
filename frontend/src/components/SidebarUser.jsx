import React from 'react'
import '../stylesheets/Sidebar.css'
import images from '../images/image.png'
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';

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
          <span className="sidebarIcons"><Link style={{textDecoration: 'none', color: 'black'}} to={'/usuario'}> <img src={images} alt="Logo" /> </Link> </span>
          <p>Inicio</p>
        </li>
        <li>
          <span className="sidebarIcons"><Link style={{textDecoration: 'none', color: 'black'}} to={'/search'}> <MdOutlineEditCalendar /> </Link> </span>
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