import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import schoolCrest from '../components/escudo.png';

export const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Brand/Logo */}
                
                <a href="#home" className="navbar-brand" onClick={() => handleLinkClick('Home')}>
                    {/* El escudo y el texto están ahora en un solo enlace */}
                    <img src={schoolCrest} alt="Escudo del Colegio Crear" className="navbar-logo" />
                    Crear News 
                </a>
                
                {/* Hamburger menu icon for mobile */}
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Navigation links */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" className="navbar-link" onClick={() => handleLinkClick('Home')}>
                            School News
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;