// // src/pages/GamePage.js
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import EasyGame from '../components/Game/EasyGame';
// import MediumGame from '../components/Game/MediumGame';
// import HardGame from '../components/Game/HardGame';
// import '../styles/GamePage.css';

// const GamePage = () => {
//     const location = useLocation();
//     const navigate = useNavigate(); // Use useNavigate instead of useHistory
//     const { level } = location.state || {};
//     const [gameData, setGameData] = useState(null);
//     const [usedQuizIds, setUsedQuizIds] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchGameData = async () => {
//         try {
//             let quizId;
//             do {
//                 quizId = Math.floor(Math.random() * 36); // Generate a random ID between 0 and 35
//             } while (usedQuizIds.includes(quizId));

//             setUsedQuizIds(prevIds => [...prevIds, quizId]);

//             const response = await axios.get(`http://127.0.0.1:8000/get-quiz/${quizId}`);
//             setGameData(response.data.data); // Access the data object correctly
//             setLoading(false);
//         } catch (err) {
//             console.error('Error fetching game data:', err);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchGameData();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []); // Use an empty dependency array to run once after the initial render

//     const handleLogout = () => {
//         navigate('/'); // Use navigate to redirect
//     };

//     const renderGameComponent = () => {
//         switch (level) {
//             case 'easy':
//                 return <EasyGame gameData={gameData} fetchNewGameData={fetchGameData} />;
//             case 'medium':
//                 return <MediumGame gameData={gameData} fetchNewGameData={fetchGameData} />;
//             case 'hard':
//                 return <HardGame gameData={gameData} fetchNewGameData={fetchGameData} />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="container">
//             <button className="logout-button" onClick={handleLogout}>Logout</button>
//             <h1>Game Level: {level}</h1>
//             {loading ? <p>Loading game data...</p> : renderGameComponent()}
//         </div>
//     );
// };

// export default GamePage;



// src/pages/GamePage.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import EasyGame from '../components/Game/EasyGame';
import MediumGame from '../components/Game/MediumGame';
import HardGame from '../components/Game/HardGame';
import '../styles/GamePage.css';

const GamePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { level } = location.state || {};
    const [gameData, setGameData] = useState(null);
    const [usedQuizIds, setUsedQuizIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0); // Initialize score state

    const fetchGameData = async () => {
        try {
            let quizId;
            do {
                quizId = Math.floor(Math.random() * 36); // Generate a random ID between 0 and 35
            } while (usedQuizIds.includes(quizId));

            setUsedQuizIds(prevIds => [...prevIds, quizId]);

            const response = await axios.get(`http://127.0.0.1:8000/get-quiz/${quizId}`);
            setGameData(response.data.data); // Access the data object correctly
            setLoading(false);
        } catch (err) {
            console.error('Error fetching game data:', err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGameData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Use an empty dependency array to run once after the initial render

    const handleLogout = () => {
        navigate('/');
    };

    const renderGameComponent = () => {
        switch (level) {
            case 'easy':
                return <EasyGame gameData={gameData} fetchNewGameData={fetchGameData} score={score} setScore={setScore} />;
            case 'medium':
                return <MediumGame gameData={gameData} fetchNewGameData={fetchGameData} score={score} setScore={setScore} />;
            case 'hard':
                return <HardGame gameData={gameData} fetchNewGameData={fetchGameData} score={score} setScore={setScore} />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            {/* <button className="back-button" onClick={handleBack}>Back</button> */}
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <h1>Game Level: {level}</h1>
            <h2>Score: {score}</h2> {/* Display the score */}
            {loading ? <p>Loading game data...</p> : renderGameComponent()}
        </div>
    );
};

export default GamePage;
