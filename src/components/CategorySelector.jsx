import React, { useState } from 'react';
import { EMOJI_CATEGORIES } from '../Utils/emojiCategories.js';

const CategorySelector = ({ onCategoriesSelected }) => {
  const [player1Category, setPlayer1Category] = useState('');
  const [player2Category, setPlayer2Category] = useState('');

  const handleSubmit = () => {
    if (player1Category && player2Category && player1Category !== player2Category) {
      onCategoriesSelected(player1Category, player2Category);
    }
  };

  return (
    <div className="category-selector">
      <h2>Choose Your Emoji Categories</h2>
      
      <div className="player-selection">
        <div className="player-category">
          <h3>Player 1</h3>
          <div className="category-grid">
            {Object.entries(EMOJI_CATEGORIES).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${player1Category === key ? 'selected' : ''}`}
                onClick={() => setPlayer1Category(key)}
                disabled={player2Category === key}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                <div className="category-preview">
                  {category.emojis.slice(0, 4).map((emoji, i) => (
                    <span key={i}>{emoji}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="player-category">
          <h3>Player 2</h3>
          <div className="category-grid">
            {Object.entries(EMOJI_CATEGORIES).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${player2Category === key ? 'selected' : ''}`}
                onClick={() => setPlayer2Category(key)}
                disabled={player1Category === key}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                <div className="category-preview">
                  {category.emojis.slice(0, 4).map((emoji, i) => (
                    <span key={i}>{emoji}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button 
        className="start-game-btn"
        onClick={handleSubmit}
        disabled={!player1Category || !player2Category || player1Category === player2Category}
      >
        Start Game
      </button>
    </div>
  );
};

export default CategorySelector;