import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Función optimizada para detectar el filtro activo
    const getLinkClass = (filterValue) => {
        const params = new URLSearchParams(location.search);
        const currentFilter = params.get("filter") || "TODOS";
        
        // Si estamos en la raíz y no hay filtro en la URL, "Inicio" es el activo
        if (filterValue === "TODOS" && location.pathname === "/" && !params.get("filter")) {
            return "current";
        }
        
        return currentFilter === filterValue ? "current" : "";
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerramos el menú al hacer clic en un link (útil para móviles)
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`nav-minimal ${scrolled ? "is-scrolled" : ""}`}>
            <div className="nav-wrapper">
                {/* Logo - Siempre vuelve al inicio sin filtros */}
                <Link to="/" className="nav-logo-area" onClick={handleLinkClick}>
                    <img src="logo.png" alt="CREAR" className="nav-shield-simple" />
                    <div className="nav-divider"></div>
                    <span className="nav-brand-name">CREAR</span>
                </Link>

                <ul className={`nav-links-minimal ${isMenuOpen ? "is-active" : ""}`}>
                    <li>
                        <Link 
                            to="/" 
                            className={getLinkClass("TODOS")} 
                            onClick={handleLinkClick}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/?filter=NOTICIAS" 
                            className={getLinkClass("NOTICIAS")} 
                            onClick={handleLinkClick}
                        >
                            Noticias
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/?filter=CULTURA" 
                            className={getLinkClass("CULTURA")} 
                            onClick={handleLinkClick}
                        >
                            Cultura
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/?filter=DEPORTES" 
                            className={getLinkClass("DEPORTES")} 
                            onClick={handleLinkClick}
                        >
                            Deportes
                        </Link>
                    </li>
                </ul>

                <div className="nav-actions">
                    <span className="nav-live-date">
                        {new Date().toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric' })}
                    </span>
                    <button 
                        className={`nav-burger ${isMenuOpen ? "open" : ""}`} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};