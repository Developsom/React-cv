import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="container">
            <h2>Portfolio</h2>
            <p>Welcome to my portfolio! Here are some of the projects I have worked on:</p>

            <div className="project">
                <h3>Project 1</h3>
                <p>Description of project 1</p>
            </div>

            <div className="project">
                <h3>Project 2</h3>
                <p>Description of project 2</p>
            </div>

            <div className="project">
                <h3>Project 3</h3>
                <p>Description of project 3</p>
            </div>

            {/* Add more project items as needed */}

        </div>
    );
}

export default Portfolio;
