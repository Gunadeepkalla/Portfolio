import React from 'react'
import './Navbar.css';
import logo from '../assets/portfolio.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='nav-logo' />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
      <div className="nav-connect">Connect With Me </div>
    </div>
  )
}

export default Navbar
