

import React from 'react';

const Cell = ({ value, onClick, isWinningCell }) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.cell,
        backgroundColor: isWinningCell ? '#d1ffd6' : '#ffffff',
        cursor: value ? 'not-allowed' : 'pointer',
      }}
      disabled={!!value} // Disable click if already filled
    >
      <span style={styles.emoji}>{value}</span>
    </button>
  );
};

const styles = {
  cell: {
    width: '100px',
    height: '100px',
    fontSize: '2rem',
    border: '2px solid #333',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
  },
  emoji: {
    fontSize: '2.2rem',
  },
};

export default Cell;
