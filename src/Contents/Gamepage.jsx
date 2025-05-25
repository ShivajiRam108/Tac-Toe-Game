import React, { useState, useEffect } from 'react';
import { useGameState } from '../Hooks/useGameState.js';
import { useSound } from '../Hooks/useSound.js';
import GameBoard from '../components/GameBoard.jsx';
import CategorySelector from '../components/CategorySelector.jsx';
import PlayerInfo from '../components/PlayerInfo.jsx';
import GameStatus from '../components/GameStatus.jsx';
import HelpModal from '../components/HelpModal.jsx';
import ScoreTracker from '../components/ScoreTracker.jsx';
import WinCelebration from '../components/WinCelebration.jsx';

const GamePage = () => {
  const {
    gameStatus,
    currentPlayer,
    board,
    playerCategories,
    playerPositions,
    playerEmojis,
    winner,
    winningCombination,
    scores,
    gameHistory,
    makeMove,
    selectCategories,
    resetGame,
    startNewGame
  } = useGameState();

  const { playMoveSound, playWinSound } = useSound();
  const [showHelp, setShowHelp] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    // Get sound preference from localStorage or default to true
    const savedPref = localStorage.getItem('soundEnabled');
    return savedPref ? JSON.parse(savedPref) : true;
  });
  const [showCelebration, setShowCelebration] = useState(false);

  // Save sound preference to localStorage
  useEffect(() => {
    localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  const handleCellClick = (cellIndex) => {
    const success = makeMove(cellIndex);
    if (success && soundEnabled) {
      playMoveSound();
    }
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  useEffect(() => {
    if (winner && soundEnabled) {
      playWinSound();
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [winner, playWinSound, soundEnabled]);

  const handlePlayAgain = () => {
    resetGame();
  };

  const handleNewGame = () => {
    startNewGame();
  };

  return (
    <div className="game-page">
      {showCelebration && <WinCelebration winner={winner} />}
      
      <header className="game-header">
        <h1>🎮 PickyPop</h1>
        <div className="header-controls">
          <button 
            className="sound-btn"
            onClick={toggleSound}
            aria-label={soundEnabled ? "Mute sound" : "Unmute sound"}
          >
            {soundEnabled ? '🔊' : '🔇'}
          </button>
          <button 
            className="help-btn"
            onClick={() => setShowHelp(true)}
          >
            ❓ Help
          </button>
          {gameStatus === 'playing' && (
            <button 
              className="new-game-btn"
              onClick={handleNewGame}
            >
              🔄 New Game
            </button>
          )}
        </div>
      </header>

      <main className="game-main">
        {gameStatus === 'category_selection' && (
          <CategorySelector onCategoriesSelected={selectCategories} />
        )}

        {gameStatus !== 'category_selection' && (
          <div className="game-container">
            <div className="game-sidebar">
              <PlayerInfo
                playerId={1}
                category={playerCategories[1]}
                isCurrentPlayer={currentPlayer === 1}
                positions={playerPositions[1]}
                emojis={playerEmojis[1]}
                score={scores[1]}
              />
              
              <ScoreTracker 
                scores={scores} 
                gameHistory={gameHistory} 
              />
              
              <PlayerInfo
                playerId={2}
                category={playerCategories[2]}
                isCurrentPlayer={currentPlayer === 2}
                positions={playerPositions[2]}
                emojis={playerEmojis[2]}
                score={scores[2]}
              />
            </div>

            <div className="game-center">
              <GameStatus
                winner={winner}
                currentPlayer={currentPlayer}
                gameStatus={gameStatus}
                onPlayAgain={handlePlayAgain}
                onNewGame={handleNewGame}
              />
              
              <GameBoard
                board={board}
                onCellClick={handleCellClick}
                winningCombination={winningCombination}
                currentPlayer={currentPlayer}
                playerPositions={playerPositions}
                gameStatus={gameStatus}
                playerEmojis={playerEmojis}
              />
            </div>
          </div>
        )}
      </main>

      <HelpModal 
        isOpen={showHelp} 
        onClose={() => setShowHelp(false)} 
      />
    </div>
  );
};

export default GamePage;