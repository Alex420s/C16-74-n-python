import React from 'react'
import '../stylesheets/Sidebar.css'
import images from '../images/image.png'
import { TbLogout, TbUserEdit } from "react-icons/tb";
import { Link } from 'react-router-dom';

const SidebarProf = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
                <span className="sidebarIcons"><Link style={{textDecoration: 'none'}} to={'/profesional'}> <img src={images} alt="Logo" /> </Link></span>
                <p>Inicio</p>
            </li>
            <li>
                <span className="sidebarIcons"><Link style={{textDecoration: 'none', color: 'black'}} to={'/editProf'}> <TbUserEdit /> </Link></span>
                <p>Editar Perfil</p>
            </li>
            <li>
                <span className="sidebarIcons"> <TbLogout /> </span>
                <p>Logout</p>
            </li>
        </ul>
    </div>
  )
}

export default SidebarProf