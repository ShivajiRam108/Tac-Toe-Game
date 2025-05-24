import { WINNING_COMBINATIONS, GAME_CONFIG } from './constants.js';

export const checkWinner = (board, playerEmojis) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    
    if (board[a] && board[b] && board[c]) {
      // Check if all three positions belong to the same player
      const player1Emojis = playerEmojis[1] || [];
      const player2Emojis = playerEmojis[2] || [];
      
      const isPlayer1Win = player1Emojis.includes(board[a]) && 
                          player1Emojis.includes(board[b]) && 
                          player1Emojis.includes(board[c]);
      
      const isPlayer2Win = player2Emojis.includes(board[a]) && 
                          player2Emojis.includes(board[b]) && 
                          player2Emojis.includes(board[c]);
      
      if (isPlayer1Win) return { winner: 1, combination };
      if (isPlayer2Win) return { winner: 2, combination };
    }
  }
  
  return { winner: null, combination: null };
};

export const canPlaceEmoji = (board, cellIndex, playerPositions) => {
  // Can't place on occupied cell
  if (board[cellIndex]) return false;
  
  // If player has less than 3 emojis, can place anywhere
  if (playerPositions.length < GAME_CONFIG.MAX_EMOJIS_PER_PLAYER) {
    return true;
  }
  
  // If player has 3 emojis, can't place on the oldest emoji position
  const oldestPosition = playerPositions[0];
  return cellIndex !== oldestPosition;
};

export const getUpdatedBoard = (board, cellIndex, emoji, playerPositions) => {
  const newBoard = [...board];
  
  // Remove oldest emoji if player has 3 emojis
  if (playerPositions.length >= GAME_CONFIG.MAX_EMOJIS_PER_PLAYER) {
    const oldestPosition = playerPositions[0];
    newBoard[oldestPosition] = null;
  }
  
  // Place new emoji
  newBoard[cellIndex] = emoji;
  
  return newBoard;
};

export const getUpdatedPlayerPositions = (playerPositions, cellIndex) => {
  let newPositions = [...playerPositions];
  
  // Remove oldest position if at max capacity
  if (newPositions.length >= GAME_CONFIG.MAX_EMOJIS_PER_PLAYER) {
    newPositions.shift();
  }
  
  // Add new position
  newPositions.push(cellIndex);
  
  return newPositions;
};