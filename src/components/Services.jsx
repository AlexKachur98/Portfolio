/**
 * @file Services.jsx
 * @author Alex Kachur
 * @since 2025-10-08
 * @purpose Renders the content for the Services page, listing services offered.
 */
import React from 'react';

export default function Services() {
    return (
        <div>
            <h1>Services I Offer</h1>
            <ul>
                <li><strong>General Programming:</strong> C#, Java, Python — clean, readable problem solving.</li>
                <li><strong>Web Development:</strong> React, Node.js, JavaScript — responsive and accessible UIs.</li>
                <li><strong>Databases & SQL:</strong> Relational design, queries, and ERDs for normalized schemas.</li>
                <li><strong>Version Control:</strong> Git & GitHub — branching, merging, and collaboration.</li>
                <li><strong>Custom PCs:</strong> Parts selection, builds, optimization — budget to high-end rigs.</li>
                <li><strong>Peer Mentorship:</strong> Helping classmates learn faster through code reviews, study tips, and debugging.</li>
            </ul>
        </div>
    );
}
