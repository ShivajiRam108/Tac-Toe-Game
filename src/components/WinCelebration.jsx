import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

const WinCelebration = ({ winner, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="win-celebration-modal">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={900}
      />
      <div className="celebration-content">
        <h2>🎉 Player {winner} Wins! 🎉</h2>
        <div className="emoji-storm">
          {Array(10).fill().map((_, i) => (
            <span 
              key={i}
              className="celebration-emoji"
              style={{
                animationDelay: `${i * 0.1}s`,
                left: `${Math.random() * 100}%`,
              }}
            >
              🎉
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinCelebration;