// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import HomePage from './pages/HomePage';
import LevelSelection from './pages/LevelSelection';
import GamePage from './pages/GamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/select-level" element={<LevelSelection />} />
        <Route path="/game/:level" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
