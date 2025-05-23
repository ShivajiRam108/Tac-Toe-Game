export const EMOJI_CATEGORIES = {
  ANIMALS: {
    name: 'Animals',
    emojis: ['🐶', '🐱', '🐵', '🐰', '🦊', '🐻', '🐼', '🐨'],
    icon: '🐾'
  },
  FOOD: {
    name: 'Food',
    emojis: ['🍕', '🍟', '🍔', '🍩', '🌮', '🍝', '🍜', '🥘'],
    icon: '🍽️'
  },
  SPORTS: {
    name: 'Sports',
    emojis: ['⚽', '🏀', '🏈', '🎾', '🏐', '🏓', '🏸', '🥎'],
    icon: '🏆'
  },
  NATURE: {
    name: 'Nature',
    emojis: ['🌸', '🌺', '🌻', '🌹', '🌷', '🌲', '🌳', '🍀'],
    icon: '🌿'
  },
  SPACE: {
    name: 'Space',
    emojis: ['🌟', '⭐', '🌙', '☀️', '🪐', '🌍', '🚀', '👽'],
    icon: '🌌'
  },
  FRUITS: {
    name: 'Fruits',
    emojis: ['🍎', '🍊', '🍌', '🍇', '🍓', '🥝', '🍑', '🥭'],
    icon: '🍎'
  }
};

export const getRandomEmoji = (category) => {
  const emojis = EMOJI_CATEGORIES[category].emojis;
  return emojis[Math.floor(Math.random() * emojis.length)];
};