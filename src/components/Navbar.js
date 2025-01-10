import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

function Navbar() {
    return (
        <nav className="navbar">
            <img
                src="https://www.rp.edu.sg/images/default-source/default-album/rp-logo.png"
                alt="Republic Polytechnic"
                className="logo"
            />
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Diplomas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Register
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
