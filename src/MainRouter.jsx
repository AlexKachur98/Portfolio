/**
 * @author Alex Kachur
 * @since 2025-10-07
 * @purpose Defines the application's routing structure, rendering the shared layout
 * and the specific page component based on the URL.
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

const MainRouter = () => {
    return (
        <>
            {/* The Layout component contains the shared navigation and is always rendered. */}
            <Layout />
            <hr />
            <main style={{ padding: '2rem 0' }}>
                {/* The Routes component conditionally renders a page based on the path. */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </>
    );
};

export default MainRouter;