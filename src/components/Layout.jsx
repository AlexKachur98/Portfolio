/**
 * @author Alex Kachur
 * @since 2025-10-08
 * @purpose Renders the shared site header, including the custom logo and main navigation links.
 */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Layout() {
    // Simple CSS-in-JS for the logo.
    const logoStyle = {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#646cff',
        textDecoration: 'none',
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
            {/* Custom Logo for the site */}
            <Link to="/" style={logoStyle}>AK</Link>

            {/* Main navigation bar */}
            <nav>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#646cff' : 'inherit', marginRight: '1rem' })}>Home</NavLink>
                <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#646cff' : 'inherit', marginRight: '1rem' })}>About</NavLink>
                <NavLink to="/projects" style={({ isActive }) => ({ color: isActive ? '#646cff' : 'inherit', marginRight: '1rem' })}>Projects</NavLink>
                <NavLink to="/education" style={({ isActive }) => ({ color: isActive ? '#646cff' : 'inherit', marginRight: '1rem' })}>Education</NavLink>
                <NavLink to="/services" style={({ isActive }) => ({ color: isActive ? '#646cff' : 'inherit', marginRight: '1rem' })}>Services</NavLink>
                <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? '#646cff' : 'inherit' })}>Contact</NavLink>
            </nav>
        </header>
    );
}