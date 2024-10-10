import React from 'react'
import "./Navbar.scss"
import Logo from "../../assets/Logo.png"

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav className='navbar__container wrapper'>
            <a href='#' className='navbar__logo'>
                <img src={Logo} alt='logo'/>
            </a>

            <ul>
                <li><a href='#'>product</a></li>
                <li><a href='#'>company</a></li>
                <li><a href='#'>pricing</a></li>
                <li><a href='#'>blog</a></li>
            </ul>

            <div className="navbar__btns">
                <a href="#">login</a>
                <a href="#" className="btn">register</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar