// src/components/Auth/SignIn.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Auth.css'; // Assuming you have separate styles for auth

const SignIn = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        try {
            const response = await axios.post('http://127.0.0.1:8000/sign-in', {
                username: username.value,
                password: password.value,
            });
            console.log(response.data);
            const age = response.data.age; // Assuming the backend returns the user's age
            navigate('/select-level', { state: { age } });
        } catch (err) {
            console.error('Error signing in:', err);
        }
    };

    return (
        <div className="auth-container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" required />
                <label>Password</label>
                <input type="password" name="password" required />
                <button className="full-width" type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
