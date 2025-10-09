/**
 * @file Contact.jsx
 * @author Alex Kachur
 * @since 2025-10-08
 * @purpose Renders the Contact page, featuring contact information and an interactive form.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted. Redirecting to Home page...');
        navigate('/');
    };

    return (
        <div>
            <h1>Get in Touch</h1>
            <p>Whether you’re looking to collaborate, discuss a project, or just say hi — feel free to reach out!</p>

            <div style={{ margin: '2rem 0', border: '1px solid #444', padding: '1rem', borderRadius: '8px' }}>
                <p><strong>Email:</strong> akachur@my.centennialcollege.ca</p>
                <p><strong>Phone:</strong> 647-281-2180</p>
                <p><strong>Location:</strong> Toronto • Canada</p>
            </div>

            <form onSubmit={handleSubmit} aria-label="Contact form">
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="contactNumber">Contact Number: </label>
                    <input type="tel" id="contactNumber" name="contactNumber" />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email">Email Address: </label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="message">Message: </label>
                    <textarea id="message" name="message" required rows="4" style={{ width: '100%' }}></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
