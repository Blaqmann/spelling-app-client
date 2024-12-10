// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Spelling App</h1>
            <p>This app allows you to get familiar with spellings. Enjoy your learning!</p>
            <div className="centered-content">
                <Link to="/sign-in" className="button-link">
                    <button>Log In</button>
                </Link>
                <Link to="/sign-up" className="button-link">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
