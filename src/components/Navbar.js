import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header>
            <h1>Navegador</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/search-page">Search Page</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar