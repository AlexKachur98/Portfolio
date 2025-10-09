/**
 * @file Projects.jsx
 * @author Alex Kachur
 * @since 2025-10-08
 * @purpose Renders the content for the Projects page, showcasing highlighted projects.
 */
import React from 'react';

// Project data stored in an array of objects for easy mapping.
const myProjects = [
    {
        title: 'C# Hangman Game',
        description: 'A console-based word guessing game built in C# applying OOP basics.',
        tags: ['C#', 'OOP', 'Game'],
        imageUrl: '/project-hangman.webp',
    },
    {
        title: 'Prestige Exotics Website',
        description: 'Luxury car showcase using HTML, CSS, JavaScript and jQuery animations.',
        tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        imageUrl: '/project-exotics.webp',
    },
    {
        title: 'UniLabBooker SRS',
        description: 'Software Requirements Specification for a lab-booking system.',
        tags: ['SRS', 'UML', 'Requirements'],
        imageUrl: '/project-srs.webp',
    },
];

export default function Projects() {
    return (
        <div>
            <h1>My Projects</h1>
            <p>Here are a few projects I wish to highlight.</p>

            {myProjects.map((project) => (
                <div key={project.title} className="card">
                    <img
                        src={project.imageUrl}
                        alt={`Screenshot of the ${project.title} project`}
                        style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '1rem' }}
                    />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                style={{
                                    backgroundColor: '#333',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
