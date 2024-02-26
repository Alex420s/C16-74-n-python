import React from 'react'
import '../stylesheets/Sidebar.css'
import images from '../images/image.png'
import { TbLogout, TbUserEdit } from "react-icons/tb";

const SidebarUser = () => {
  return (
    <div className="sidebar">
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
    </div>
  )
}

export default SidebarUser