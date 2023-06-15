import React from 'react';
import './Home.css';
import Call from "../components/Call";
import Download from "../components/Download";

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to My Portfolio</h1>
                <img src="home_image.jpg" alt="Home Image" />
            </header>

            <main>
                <section>
                    <h2>Discover My Skills and Projects</h2>
                    <p>At My Portfolio, I showcase my skills and projects in web development, software engineering, and more. It's a place where you can explore my work, get to know me better, and see the impact I've made in the world of technology.</p>
                    <Download />
                </section>

                <section>
                    <h2>Explore My Areas of Expertise</h2>
                    <ul>
                        <li>Front-end Development</li>
                        <li>Back-end Development</li>
                        <li>Full-stack Development</li>
                        <li>UI/UX Design</li>
                    </ul>
                    <Call />
                </section>
            </main>

            <footer>
                <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
