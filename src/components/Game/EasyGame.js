// src/components/Game/EasyGame.js
import React, { useState } from 'react';
import '../../styles/GamePage.css';

const EasyGame = ({ gameData, fetchNewGameData, score, setScore }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = () => {
        if (selectedOption === gameData.correctOption) {
            setFeedback('Correct!');
            setScore(score + 1); // Increment score
        } else {
            setFeedback('Incorrect. The correct answer is ' + gameData.correctOption);
        }
        setTimeout(() => {
            fetchNewGameData();
            setFeedback('');
            setSelectedOption(null);
        }, 3000); // Wait for 3 seconds before fetching new question
    };

    return (
        <div>
            <img className='game-image' src={`/images/${gameData.name}.jpg`} alt="quiz" />
            <p>{gameData.description}</p>
            <div className="options-container">
                {gameData.options.map((option, index) => (
                    <button
                        key={index}
                        className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => handleOptionChange(option)}
                    >
                        {option.toUpperCase()}
                    </button>
                ))}
            </div>
            <button className="quiz-button" onClick={handleSubmit}>Submit</button>
            {feedback && <p className={`feedback ${feedback === 'Correct!' ? 'correct' : ''}`}>{feedback}</p>}
        </div>
    );
};

export default EasyGame;
