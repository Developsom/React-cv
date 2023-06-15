import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Auth from './pages/Auth';
import Motivation from './pages/Motivation';
import Portfolio from './pages/Portfolio';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/motivation" element={<Motivation />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
