
# 🎯 Blink Tac Toe

A twisted version of Tic Tac Toe using emojis instead of Xs and Os, with a unique "vanishing emoji" rule that adds strategic depth to the classic game.

## 🚀 Live Demo

[Play Blink Tac Toe](your-deployed-link-here)

## 🎮 Game Features

### Core Gameplay
- **3x3 Grid**: Classic Tic Tac Toe board
- **Emoji Categories**: Players choose from 5 different emoji categories
- **Random Emoji Assignment**: Each turn gives you a random emoji from your selected category
- **Vanishing Rule**: Players can only have 3 emojis on the board at once (FIFO system)
- **Strategic Restriction**: Cannot place 4th emoji where 1st emoji was removed

### Emoji Categories
- **Animals**: 🐶 🐱 🐵 🐰 🐸 🐯 🐨 🐼
- **Food**: 🍕 🍟 🍔 🍩 🍎 🍌 🍓 🥑
- **Sports**: ⚽ 🏀 🏈 🎾 🏐 🏓 🎯 🎱
- **Nature**: 🌟 🌙 ☀️ 🌈 ⚡ 🔥 💧 🌸
- **Objects**: 🎵 🎨 🎲 🎪 🎯 🎊 🎈 🎭

### Advanced Features
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Score Tracking**: Persistent score counter across multiple rounds
- **Sound Effects**: Audio feedback for moves and wins
- **Animations**: Smooth hover effects, scaling, and winning line highlights
- **Help System**: Interactive tutorial for new players
- **Modern UI**: Gradient backgrounds, glassmorphism effects, smooth transitions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Styling**: Tailwind CSS 3.3
- **Build Tool**: Vite 4.4
- **Icons**: Lucide React
- **Deployment**: [Your deployment platform]


## 🎯 How the Vanishing Feature Works

The "vanishing emoji" rule is implemented using a First-In-First-Out (FIFO) queue system:

1. **Player State Tracking**: Each player's emoji positions are stored in an array
2. **Placement Logic**: When a player has 3 emojis and tries to place a 4th:
   - The oldest emoji (first in array) is automatically removed
   - The new emoji is placed in the selected position
   - Player cannot place on the same position as the removed emoji
3. **Visual Feedback**: Smooth animations show emoji placement and removal
4. **Win Detection**: Continuous checking for 3-in-a-row after each move

## 🚀 Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   


2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎮 Game Rules

### Objective
Form a line of 3 emojis from your category (horizontally, vertically, or diagonally)

### Special Rules
1. **Category Selection**: Each player chooses a different emoji category
2. **Random Assignment**: Get a random emoji from your category each turn
3. **Maximum Emojis**: Only 3 emojis per player on the board simultaneously
4. **Vanishing Logic**: When placing a 4th emoji, your oldest disappears
5. **Placement Restriction**: Cannot place where your emoji just vanished
6. **Turn-Based**: Players alternate turns until someone wins
