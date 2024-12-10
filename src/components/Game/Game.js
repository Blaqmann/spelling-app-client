// src/components/Game/Game.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Game = ({ level }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Fetch questions based on the level
        const fetchQuestions = async () => {
            const response = await axios.get(`http://your-backend-url/questions?level=${level}`);
            setQuestions(response.data);
        };

        fetchQuestions();
    }, [level]);

    const handleAnswer = (option) => {
        if (option === questions[currentQuestion].correctOption) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    if (questions.length === 0) return <p>Loading...</p>;

    return (
        <div>
            <h2>Score: {score}</h2>
            <div>
                <img src={questions[currentQuestion].name} alt="question" />
                <p>{questions[currentQuestion].description}</p>
                {questions[currentQuestion].options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Game;
