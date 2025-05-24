import React from 'react';

const GameStatus = ({ 
  winner, 
  currentPlayer, 
  gameStatus, 
  onPlayAgain, 
  onNewGame 
}) => {
  if (gameStatus === 'game_over' && winner) {
    return (
      <div className="game-status game-over">
        <h2>🎉 Player {winner} Wins! 🎉</h2>
        <div className="game-controls">
          <button onClick={onPlayAgain} className="play-again-btn">
            Play Again
          </button>
          <button onClick={onNewGame} className="new-game-btn">
            New Game
          </button>
        </div>
      </div>
    );
  }

  if (gameStatus === 'playing') {
    return (
      <div className="game-status playing">
        <h3>Player {currentPlayer}'s Turn</h3>
        <p>Place your emoji on any empty cell</p>
      </div>
    );
  }

  return null;
};

export default GameStatus;