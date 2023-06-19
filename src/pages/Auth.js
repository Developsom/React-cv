import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleToggle = () => {
        setIsRegistered(!isRegistered);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isRegistered) {
                // Login logic
                const response = await axios.post('http://localhost:8080/api/login', { email, password });
                console.log('Login successful');
                console.log('Response:', response.data);
            } else {
                // Register logic
                const response = await axios.post('http://localhost:8080/api/register', { email, password });
                console.log('Registration successful');
                console.log('Response:', response.data);
            }

            // Reset form fields
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h2>{isRegistered ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">{isRegistered ? 'Login' : 'Register'}</button>
            </form>
            <p>
                {isRegistered ? "Don't have an account?" : 'Already have an account?'}
                <button onClick={handleToggle}>{isRegistered ? 'Register' : 'Login'}</button>
            </p>
        </div>
    );
}

export default Auth;

