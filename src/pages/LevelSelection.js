// src/pages/LevelSelection.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/GamePage.css';

const LevelSelection = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const age = location.state.age;

    const recommendedLevel = age >= 6 && age <= 8 ? 'easy' : age <= 12 ? 'medium' : 'hard';

    const handleLevelSelect = (level) => {
        navigate(`/game/${level}`, { state: { level, age } });
    };

    return (
        <div className='container'>
            <h1>Select Your Level</h1>
            <p>Recommended Level: {recommendedLevel}</p>
            <button onClick={() => handleLevelSelect('easy')}>Easy</button>
            <button onClick={() => handleLevelSelect('medium')}>Medium</button>
            <button onClick={() => handleLevelSelect('hard')}>Hard</button>
        </div>
    );
};

export default LevelSelection;
