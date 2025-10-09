/**
 * @file Layout.jsx
 * @author Alex Kachur
 * @since 2025-10-08
 * @purpose Minimal layout shell: logo + navbar + content outlet.
 */
import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

export default function Layout() {
    const nav = ({ isActive }) => (isActive ? 'navlink active' : 'navlink');

    return (
        <>
            <header className="site-header">
                {/* simple custom logo/wordmark per brief */}
                <Link to="/" className="brand" aria-label="Home">AK</Link>

                <nav>
                    <NavLink to="/" end className={nav}>Home</NavLink>
                    <NavLink to="/about" className={nav}>About</NavLink>
                    <NavLink to="/projects" className={nav}>Projects</NavLink>
                    <NavLink to="/education" className={nav}>Education</NavLink>
                    <NavLink to="/services" className={nav}>Services</NavLink>
                    <NavLink to="/contact" className={nav}>Contact</NavLink>
                </nav>
            </header>

            <main className="site-main">
                <Outlet />
            </main>
        </>
    );
}
