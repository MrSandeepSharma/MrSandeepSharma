import React from 'react'
import "./header.css"

import Logo from '../Logo'
import { Navbar } from '../NavBar'

function Header() {
    const navItems = [
        {
            name: "Resources",
            path: "/"
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
        <Logo />
        <Navbar navItems={navItems} aria-label="Primary Navigation" />
    </header>
  )
}

export default Header
