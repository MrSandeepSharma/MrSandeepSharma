import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import "./navbar.css"

function Navbar({navItems, menu=false, ...rest}) {
  const [navOpen, setNavOpen] = useState(false)

  function toggle() {
    setNavOpen(prev => !prev)
  }

  return (
    <nav {...rest}>
        {
          menu ? 
          <button className='nav__btn' aria-controls='nav-list' aria-expanded={navOpen} onClick={toggle}>
            <span className='sr-only'>menu</span>
            {
                navOpen ? <IoMdClose /> : <RiMenu3Line />
            }
          </button>
          : ""
        }
        <ul id='nav-list' className='nav__list'>
            {navItems.map(item => (
                <li key={item.name} className='nav__items'  onClick={menu ? toggle : ""}><NavLink to={item.path}>{item.name}</NavLink></li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar
