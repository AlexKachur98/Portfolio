/**
 * @author Alex Kachur
 * @since 2025-10-08
 * @purpose Renders the content for the Home page, including a welcome message,
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h2>Welcome to My Personal Portfolio</h2>
            <p>
                <strong>Mission Statement:</strong> To leverage my passion for technology and problem-solving to build clean, maintainable, and accessible software solutions.
            </p>
            <br />
            <Link to="/about">
                <button>Learn More About Me</button>
            </Link>
        </div>
    );
}