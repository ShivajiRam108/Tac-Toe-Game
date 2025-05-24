import React from 'react';

const ScoreTracker = ({ scores, gameHistory }) => {
  return (
    <div className="score-tracker">
      <h3>Score Tracker</h3>
      <div className="scores">
        <div className="player-score">
          <span>Player 1: {scores[1]}</span>
        </div>
        <div className="player-score">
          <span>Player 2: {scores[2]}</span>
        </div>
      </div>
      
      {gameHistory.length > 0 && (
        <div className="game-history">
          <h4>Recent Games</h4>
          <div className="history-list">
            {gameHistory.slice(-5).reverse().map((game, index) => (
              <div key={index} className="history-item">
                Player {game.winner} won
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreTracker;