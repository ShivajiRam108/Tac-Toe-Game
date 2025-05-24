import React from "react";
import { EMOJI_CATEGORIES } from "../Utils/emojiCategories.js";

const PlayerInfo = ({
  playerId,
  category,
  isCurrentPlayer,
  positions,
  emojis,
  score,
}) => {
  const categoryInfo = EMOJI_CATEGORIES[category];

  return (
    <div className={`player-info ${isCurrentPlayer ? "current-player" : ""}`}>
      <div className="player-header">
        <h3>Player {playerId}</h3>
        <div className="player-score">Score: {score}</div>
      </div>

      <div className="player-category">
        <span className="category-icon">{categoryInfo?.icon}</span>
        <span className="category-name">{categoryInfo?.name}</span>
      </div>

      <div className="player-emojis">
        <div className="emoji-count">Emojis on board: {positions.length}/3</div>
        <div className="active-emojis">
          {[...new Set(emojis.slice(-3))].map((emoji, index) => (
            <span key={index} className="active-emoji">
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {isCurrentPlayer && (
        <div className="turn-indicator">
          <span>Your Turn!</span>
        </div>
      )}
    </div>
  );
};

export default PlayerInfo;
