import { Link } from "react-router-dom"

import Logo from "../Logo"
import { PrimaryBtn } from "../Buttons";

import "./header.css"

import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
  return (
    <header className="header container">
        <Link className="skip-main outline" path="#" onClick={() => window.location.replace("#main")}>Skip to main content</Link>
        <Link to="/" className="header__logo outline-white">
              <Logo />
        </Link>
        <PrimaryBtn className="outline-white" target="_blank" to="https://dev-palette.vercel.app/" text="View Resources" icon={<FaArrowRightLong />} />
    </header>
  )
}

export default Header