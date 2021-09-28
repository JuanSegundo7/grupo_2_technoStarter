import React from "react";
import '../assets/css/header.css';
import Logo from "../assets/img/TechnoStarter1.png"

function Header(){
    return(
        <React.Fragment>
            <header>
            <nav className="navbar--top">
                <figure className="desktop-visible logo">
                    <a href="/"><img src={Logo} alt="logo" id="desktop-techno" /></a>
                </figure>
                <ul className="navbar-icons">
                    <ul className="desktop-visible flex-ul-top">
                        <li><a href="/descubrir">Descubrir</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                    </ul>
                </ul>
            </nav>
            </header>
        </React.Fragment>
    )
}

export default Header;