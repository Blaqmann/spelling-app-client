// src/components/Game/HardGame.js
import React, { useState } from 'react';
import '../../styles/GamePage.css';

const HardGame = ({ gameData, fetchNewGameData, score, setScore }) => {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        if (answer.toLowerCase() === gameData.correctOption.toLowerCase()) {
            setFeedback('Correct!');
            setScore(score + 1); // Increment score
        } else {
            setFeedback('Incorrect. The correct answer is ' + gameData.correctOption);
        }
        setTimeout(() => {
            fetchNewGameData();
            setFeedback('');
            setAnswer('');
        }, 3000); // Wait for 3 seconds before fetching new question
    };

    return (
        <div>
            <img className='game-image' src={`/images/${gameData.name}.jpg`} alt="quiz" />
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />
            <button className="quiz-button" onClick={handleSubmit}>Submit</button>
            {feedback && <p className={`feedback ${feedback === 'Correct!' ? 'correct' : ''}`}>{feedback}</p>}
        </div>
    );
};

export default HardGame;
