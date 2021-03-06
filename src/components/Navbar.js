import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <header>
            <h1>Navegador</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/search-page">Search Page</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar