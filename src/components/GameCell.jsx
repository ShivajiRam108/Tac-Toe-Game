import React from 'react';

const GameCell = ({ 
  index, 
  emoji, 
  onClick, 
  isWinning, 
  isDisabled,
  canPlace,
  willVanish 
}) => {
  const handleClick = () => {
    if (!isDisabled && canPlace) {
      onClick(index);
    }
  };

  return (
    <div 
      className={`
        game-cell 
        ${isWinning ? 'winning' : ''}
        ${canPlace && !isDisabled ? 'placeable' : ''}
        ${willVanish ? 'will-vanish' : ''}
        ${isDisabled ? 'disabled' : ''}
      `}
      onClick={handleClick}
    >
      {emoji && (
        <span className="emoji">{emoji}</span>
      )}
    </div>
  );
};

export default GameCell;