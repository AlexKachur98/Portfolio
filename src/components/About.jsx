/**
 * @author Alex Kachur
 * @since 2025-10-07
 * @purpose Renders the content for the About Me page.
 */
import React from 'react';

export default function About() {
    return (
        <div>
            <h2>About Me</h2>
            {/* Place image (e.g., 'profile.jpg') in the /public folder and link it here. */}
            {/* <img src="/profile.jpg" alt="A head and shoulder shot of Alex Kachur" style={{ maxWidth: '200px', borderRadius: '8px', margin: '1rem 0' }} /> */}
            <p>
                Hi, I’m Alex, a Software Engineering Technology student at Centennial College with a passion for building modern web applications and exploring emerging technologies.
            </p>
            <h3>My Journey</h3>
            <p>
                My love for technology started young, I was the kid taking apart radios and DVDs asking what every part did. During COVID, I rediscovered coding through a free HTML course, and it felt like magic to create something from nothing. That spark grew into a full commitment when I joined Centennial, where I’ve built console games in C#, designed UML diagrams, and developed React applications from the ground up.
            </p>
            <h3>My Philosophy</h3>
            <p>
                I believe software should be clean, maintainable, and accessible. I value collaboration and continuous learning, and I embrace challenges with the same competitive spirit I’ve honed in poker and gaming tournaments. My leadership experiences as a team captain have taught me how to guide and support others while striving for excellence.
            </p>
            <h3>Beyond Coding</h3>
            <p>
                Outside of development, I’m passionate about gaming (video and board), sports (NBA, NFL, MMA), and building custom PCs, from budget builds to high-end water-cooled systems. I’m also a lifelong animal lover; I share my life with two cats, Moura and Simba, and my dream is to one day open an animal rescue ranch.
            </p>
            <br />
            {/* Link to a PDF version of my Resume.*/}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button>View My Resume (PDF)</button>
            </a>
        </div>
    );
}