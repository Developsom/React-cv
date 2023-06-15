import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="Header-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="Header-link">About</Link>
                    </li>
                    <li>
                        <Link to="/motivation" className="Header-link">Motivation</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="Header-link">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/auth" className="Header-link">Log in / Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

