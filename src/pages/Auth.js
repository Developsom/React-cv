import React, { useState } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle authentication logic here
        if (isRegistered) {
            // Login logic
            console.log('Logging in...');
            console.log('Email:', email);
            console.log('Password:', password);
        } else {
            // Register logic
            console.log('Registering...');
            console.log('Email:', email);
            console.log('Password:', password);
        }
        // Reset form fields
        setEmail('');
        setPassword('');
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
                {isRegistered ? 'Don\'t have an account?' : 'Already have an account?'}
                <button onClick={handleToggle}>{isRegistered ? 'Register' : 'Login'}</button>
            </p>
        </div>
    );
}

export default Auth;
