export const GAME_CONFIG = {
  BOARD_SIZE: 3,
  MAX_EMOJIS_PER_PLAYER: 3,
  TOTAL_CELLS: 9
};

export const GAME_STATUS = {
  CATEGORY_SELECTION: 'category_selection',
  PLAYING: 'playing',
  GAME_OVER: 'game_over',
  PAUSED: 'paused'
};

export const PLAYER = {
  ONE: 1,
  TWO: 2
};

export const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];