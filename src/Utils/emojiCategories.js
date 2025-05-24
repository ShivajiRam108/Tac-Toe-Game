export const EMOJI_CATEGORIES = {
  ANIMALS: {
    name: 'Animals',
    emojis: ['🐶', '🐱', '🐵', '🐰', ],//'🦊', '🐻', '🐼', '🐨'
    icon: '🐾'
  },
  FOOD: {
    name: 'Food',
    emojis: ['🍕', '🍟', '🍔', '🍩', ],// '🌮', '🍝', '🍜', '🥘'
    icon: '🍽️'
  },
  SPORTS: {
    name: 'Sports',
    emojis: ['⚽', '🏀', '🏈', '🏐', ],// ', '🏓', '🏸', '🥎'
    icon: '🏆'
  },
  NATURE: {
    name: 'Nature',
    emojis: ['🌸', '🌺', '🌻', '🌹', ], //'🌷', '🌲', '🌳', '🍀'
    icon: '🌿'
  },
  SPACE: {
    name: 'Space',
    emojis: ['🌟', '⭐', '🌙', '☀️',], // '🪐', '🌍', '🚀', '👽'
    icon: '🌌'
  },
  FRUITS: {
    name: 'Fruits',
    emojis: ['🍎', '🍌','🍓', '🍇'], // '🍓', '🥝', '🍑', '🥭'
    icon: '🍎'
  }
};

export const getRandomEmoji = (category, exclude = []) => {
  const categoryData = EMOJI_CATEGORIES[category];
  if (!categoryData) return '';
  const availableEmojis = categoryData.emojis.filter(e => !exclude.includes(e));
  return availableEmojis.length > 0 
    ? availableEmojis[Math.floor(Math.random() * availableEmojis.length)]
    : '';
};
