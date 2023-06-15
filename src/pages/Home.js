import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Your Home</h1>
                <img src="home_image.jpg" alt="Home Image" />
            </header>

            <main>
                <section>
                    <h2>Discover Comfort and Style</h2>
                    <p>At Your Home, we believe that every home should be a sanctuary—a place where you can relax, unwind, and create lasting memories. Whether you're looking to revamp your living space or find inspiration for a new home, we have everything you need to turn your vision into reality.</p>
                </section>

                <section>
                    <h2>Explore Our Collections</h2>
                    <ul>
                        <li>Living Room</li>
                        <li>Bedroom</li>
                        <li>Kitchen</li>
                        <li>Bathroom</li>
                    </ul>
                </section>
            </main>

            <footer>
                <p>&copy; 2023 Your Home. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
