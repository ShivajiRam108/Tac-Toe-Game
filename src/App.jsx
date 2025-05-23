import React, { useState } from 'react';
import HomePage from './Contents/HomePage.jsx';
import GamePage from './Contents/Gamepage.jsx';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleStartGame = () => {
    setCurrentPage('game');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <HomePage onStartGame={handleStartGame} />
      )}
      {currentPage === 'game' && (
        <GamePage onBackToHome={handleBackToHome} />
      )}
    </div>
  );
}

export default App;