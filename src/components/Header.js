import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="Header">
            <header>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#motivation">Motivation</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#account">Log in / Register</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;

