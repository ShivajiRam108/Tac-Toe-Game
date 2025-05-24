import React from 'react';

const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>How to Play Blink Tac Toe</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="rule-section">
            <h3>📝 Basic Rules</h3>
            <ul>
              <li>Each player chooses an emoji category before starting</li>
              <li>Players take turns placing random emojis from their category</li>
              <li>Goal: Get 3 of your emojis in a row (horizontal, vertical, or diagonal)</li>
            </ul>
          </div>

          <div className="rule-section">
            <h3>✨ The Vanishing Rule</h3>
            <ul>
              <li>Each player can only have 3 emojis on the board at once</li>
              <li>When you place a 4th emoji, your oldest emoji disappears</li>
              <li>You cannot place your 4th emoji where your 1st was placed</li>
            </ul>
          </div>

          <div className="rule-section">
            <h3>🏆 Winning</h3>
            <ul>
              <li>Form a line of 3 emojis from your category</li>
              <li>All winning emojis must belong to the same player</li>
              <li>The game continues until someone wins (no draws possible)</li>
            </ul>
          </div>

          <div className="rule-section">
            <h3>🎮 Tips</h3>
            <ul>
              <li>Watch which emoji will vanish next (highlighted in red)</li>
              <li>Plan your moves considering the vanishing rule</li>
              <li>Block your opponent while building your own lines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;