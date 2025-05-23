import React from 'react';

const HomePage = ({ onStartGame }) => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>🎮 Blink Tac Toe</h1>
        <p className="subtitle">A twisted version of Tic Tac Toe with vanishing emojis!</p>
        
        <div className="game-preview">
          <div className="preview-grid">
            <div className="preview-cell">🐶</div>
            <div className="preview-cell">🍕</div>
            <div className="preview-cell">🐱</div>
            <div className="preview-cell">🍟</div>
            <div className="preview-cell">🐵</div>
            <div className="preview-cell">🍔</div>
            <div className="preview-cell">🐰</div>
            <div className="preview-cell">🍩</div>
            <div className="preview-cell">🦊</div>
          </div>
        </div>

        <div className="features">
          <div className="feature">
            <h3>🎯 Strategic Gameplay</h3>
            <p>Plan your moves as emojis vanish after 3 placements</p>
          </div>
          <div className="feature">
            <h3>🎨 Multiple Categories</h3>
            <p>Choose from Animals, Food, Sports, Nature, Space & Fruits</p>
          </div>
          <div className="feature">
            <h3>🏆 Competitive Scoring</h3>
            <p>Track wins across multiple rounds</p>
          </div>
        </div>

        <button className="start-btn" onClick={onStartGame}>
          🚀 Start Playing
        </button>
      </div>
    </div>
  );
};

export default HomePage;