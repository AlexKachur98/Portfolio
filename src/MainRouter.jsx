/**
 * @file MainRouter.jsx
 * @author Alex Kachur
 * @since 2025-10-08
 * @purpose Defines routes for the required pages using a nested layout.
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

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="education" element={<Education />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}
