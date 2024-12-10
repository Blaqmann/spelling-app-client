// src/components/Auth/SignUp.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Auth.css'; // Assuming you have separate styles for auth

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password, age } = e.target.elements;
        try {
            const response = await axios.post('http://127.0.0.1:8000/sign-up', {
                username: username.value,
                password: password.value,
                age: age.value,
            });
            console.log(response.data);
            navigate('/select-level', { state: { age: age.value } });
        } catch (err) {
            console.error('Error signing up:', err);
        }
    };

    return (
        <div className="auth-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" required />
                <label>Password</label>
                <input type="password" name="password" required />
                <label>Age</label>
                <input type="number" name="age" required />
                <button className="full-width" type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
