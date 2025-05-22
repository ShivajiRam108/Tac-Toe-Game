import React from 'react';
import Cell from './Cell';

const Board = ({ board, onCellClick, winningCells }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)' }}>
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell?.emoji}
          onClick={() => onCellClick(index)}
          isWinningCell={winningCells.includes(index)}
        />
      ))}
    </div>
  );
};

export default Board;
