export const playSound = (soundName) => {
  // Sound implementation would go here
  console.log(`Playing sound: ${soundName}`);
};

export const vibrate = (pattern = [100]) => {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};

export const getPlayerName = (playerId) => {
  return `Player ${playerId}`;
};

export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};