import { useState, useCallback } from 'react';
import { GAME_STATUS, PLAYER, GAME_CONFIG } from '../Utils/constants';
import { getRandomEmoji } from '../Utils/emojiCategories';
import { 
  checkWinner, 
  canPlaceEmoji, 
  getUpdatedBoard, 
  getUpdatedPlayerPositions 
} from '../Utils/gameLogic';

export const useGameState = () => {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.CATEGORY_SELECTION);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.ONE);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerCategories, setPlayerCategories] = useState({});
  const [playerPositions, setPlayerPositions] = useState({ 1: [], 2: [] });
  const [playerEmojis, setPlayerEmojis] = useState({ 1: [], 2: [] });
  const [winner, setWinner] = useState(null);
  const [winningCombination, setWinningCombination] = useState(null);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [gameHistory, setGameHistory] = useState([]);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setPlayerPositions({ 1: [], 2: [] });
    setPlayerEmojis({ 1: [], 2: [] });
    setCurrentPlayer(PLAYER.ONE);
    setWinner(null);
    setWinningCombination(null);
    setGameStatus(GAME_STATUS.PLAYING);
  }, []);

  const selectCategories = useCallback((player1Category, player2Category) => {
    setPlayerCategories({
      1: player1Category,
      2: player2Category
    });
    setGameStatus(GAME_STATUS.PLAYING);
  }, []);

  const makeMove = useCallback((cellIndex) => {
    if (gameStatus !== GAME_STATUS.PLAYING || winner) return false;

    const currentPlayerPositions = playerPositions[currentPlayer];
    const currentPlayerEmojis = playerEmojis[currentPlayer] || [];
    
    if (!canPlaceEmoji(board, cellIndex, currentPlayerPositions, currentPlayer)) {
      return false;
    }

    // Get unique emoji from category that's not currently in use
    const emoji = getRandomEmoji(
      playerCategories[currentPlayer],
      currentPlayerEmojis
    );

    if (!emoji) return false;

    const newBoard = getUpdatedBoard(board, cellIndex, emoji, currentPlayerPositions);
    
    const newPlayerPositions = {
      ...playerPositions,
      [currentPlayer]: getUpdatedPlayerPositions(currentPlayerPositions, cellIndex)
    };
    
    // Update player emojis with cycling logic
    const updatedPlayerEmojis = [...currentPlayerEmojis];
    if (updatedPlayerEmojis.length >= GAME_CONFIG.MAX_EMOJIS_PER_PLAYER) {
      updatedPlayerEmojis.shift();
    }
    updatedPlayerEmojis.push(emoji);

    const newPlayerEmojis = {
      ...playerEmojis,
      [currentPlayer]: updatedPlayerEmojis
    };

    setBoard(newBoard);
    setPlayerPositions(newPlayerPositions);
    setPlayerEmojis(newPlayerEmojis);

    const result = checkWinner(newBoard, newPlayerEmojis);
    
    if (result.winner) {
      setWinner(result.winner);
      setWinningCombination(result.combination);
      setGameStatus(GAME_STATUS.GAME_OVER);
      setScores(prev => ({
        ...prev,
        [result.winner]: prev[result.winner] + 1
      }));
      setGameHistory(prev => [...prev, {
        winner: result.winner,
        timestamp: new Date().toISOString()
      }]);
    } else {
      setCurrentPlayer(currentPlayer === PLAYER.ONE ? PLAYER.TWO : PLAYER.ONE);
    }

    return true;
  }, [gameStatus, winner, currentPlayer, board, playerPositions, 
      playerEmojis, playerCategories]);

  const startNewGame = useCallback(() => {
    setGameStatus(GAME_STATUS.CATEGORY_SELECTION);
    resetGame();
  }, [resetGame]);

  return {
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
  };
};