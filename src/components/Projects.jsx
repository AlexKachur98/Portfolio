/**
 * @author Alex Kachur
 * @since 2025-10-08
 * @purpose Renders the content for the Projects page, showcasing highlighted projects.
 */
import React from 'react';

// Project data stored in an array of objects for easy mapping.
const myProjects = [
    {
        title: "C# Hangman Game",
        description: "A console-based word guessing game built in C# applying OOP basics.",
        tags: ["C#", "OOP", "Game"]
    },
    {
        title: "Prestige Exotics Website",
        description: "Luxury car showcase using HTML, CSS, JavaScript and jQuery animations.",
        tags: ["HTML", "CSS", "JavaScript", "jQuery"]
    },
    {
        title: "UniLabBooker SRS",
        description: "Software Requirements Specification for a lab-booking system.",
        tags: ["SRS", "UML", "Requirements"]
    }
];

export default function Projects() {
    return (
        <div>
            <h2>My Projects</h2>
            <p>Here are a few projects I wish to highlight.</p>
            {/* I map over the array to display each project dynamically.*/}
            {myProjects.map((project, index) => (
                <div key={index} style={{ border: '1px solid #444', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
                    <h3>{project.title}</h3>
                    {/* A short description of the project.*/}
                    <p>{project.description}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                        {project.tags.map((tag, i) => (
                            <span key={i} style={{ backgroundColor: '#333', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}