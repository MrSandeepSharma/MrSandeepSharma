import React from 'react'
import "./header.css"

import Logo from '../Logo'
import { Navbar } from '../NavBar'
import { Link } from 'react-router-dom'

function Header() {
    const navItems = [
        {
            name: "Resources",
            path: "resources"
        },
        {
            name: "Projects",
            path: "projects"
        },
        {
            name: "Blog",
            path: "blog"
        },
    ]

  return (
    <header className='container header'>
        <Link className='logo' to="/"><Logo /></Link>
        <Navbar menu="true" navItems={navItems} aria-label="Primary Navigation" />
    </header>
  )
}

export default Header
