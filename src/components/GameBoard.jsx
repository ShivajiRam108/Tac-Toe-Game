import React from 'react';
import GameCell from './GameCell.jsx';
import { canPlaceEmoji } from '../Utils/gameLogic.js';

const GameBoard = ({ 
  board, 
  onCellClick, 
  winningCombination, 
  currentPlayer,
  playerPositions,
  gameStatus,
  // playerEmojis
}) => {
  const isGameActive = gameStatus === 'playing';
  
  return (
    <div className="game-board">
      {board.map((emoji, index) => {
        const isWinning = winningCombination?.includes(index);
        const currentPlayerPositions = playerPositions[currentPlayer] || [];
        const canPlace = canPlaceEmoji(board, index, currentPlayerPositions, currentPlayer);
        const willVanish = currentPlayerPositions.length >= 3 && 
                          currentPlayerPositions[0] === index;
        
        return (
          <GameCell
            key={index}
            index={index}
            emoji={emoji}
            onClick={onCellClick}
            isWinning={isWinning}
            isDisabled={!isGameActive}
            canPlace={canPlace}
            willVanish={willVanish}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;