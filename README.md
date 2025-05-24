🎯 Blink Tac Toe

A modern, strategic twist on the classic Tic Tac Toe game — now with emojis and a unique vanishing rule that adds depth and unpredictability to each match.

🚀 Live Demo
👉 Play Blink Tac Toe 

🎮 Game Overview
🎯 Objective
Form a line of 3 emojis (horizontal, vertical, or diagonal) from your selected category.

🧠 Strategic Twist: Vanishing Rule
Each player may only have 3 emojis on the board at a time. When placing a 4th, the oldest one disappears (FIFO logic). But here's the catch — you can't place it where the last one vanished!

🕹️ Game Rules
Category Selection: Each player selects a unique emoji category.

Random Emoji Assignment: A new random emoji is assigned each turn from the player’s category.

Max Emojis: Only 3 emojis per player on the board at any time.

Vanishing Logic: Placing a 4th emoji causes the oldest to vanish (FIFO system).

Placement Restriction: Cannot place a new emoji where your own last vanished.

Turn-Based: Players alternate turns.

Winning Condition: Align 3 emojis from your category.

No Draws: Vanishing mechanic ensures a game always ends with a winner.

Post-Win Options: Continue playing or switch emoji categories.

🌈 Emoji Categories
🐾 Animals: 🐶 🐱 🐵 🐰 🐸 🐯 🐨 🐼

🍔 Food: 🍕 🍟 🍔 🍩 🍎 🍌 🍓 🥑

🏅 Sports: ⚽ 🏀 🏈 🎾 🏐 🏓 🎯 🎱

🌿 Nature: 🌟 🌙 ☀️ 🌈 ⚡ 🔥 💧 🌸

🎉 Objects: 🎵 🎨 🎲 🎪 🎯 🎊 🎈 🎭

💡 Key Features
✅ Core Gameplay
3x3 Grid layout (classic Tic Tac Toe)

Vanishing Emoji Mechanic (FIFO queue logic)

Random Emoji Assignment from chosen category

Strategic Move Restriction based on vanished emoji's position

🎨 UI & UX
Glassmorphism Design: Transparent cards with blur effects

Responsive Layout: Fully mobile-friendly

Emoji Animations: Bounce, scale, and highlight effects

Winning Line Animation: Clear visual indicator of victory

Interactive Help Guide: Quick-start tutorial for new players

🔊 Audio Feedback
Sound Effects for emoji placement and wins using the Web Audio API

🧮 Score System
Score Tracking across rounds with visual counters

🔧 Tech Stack
Tool	Description
⚛️ React 18.2	Core framework
⚡ Vite 4.4	Build tool & dev server
🎨 Tailwind CSS 3.3	Modern styling utility
🎯 Lucide React	Icon set for UI
🌍 Deployment	[Your platform, e.g. Vercel/Netlify]

🔍 How the Vanishing Rule Works
Track Player Moves: Each player's emoji positions are stored in an array (acting as a queue).

Check Emoji Count: If a player tries to place a 4th emoji:

The first emoji in their array is removed.

New emoji is placed at the selected position.

Cannot place on the same tile where their emoji just vanished.

Animation: Emoji gracefully disappears and new one drops in.

Win Detection: Game checks for win after each move.

🛠️ Getting Started
🔧 Prerequisites
Node.js (v16+)

npm or yarn

📦 Installation
bash

# Clone the repo
git clone https://github.com/ShivajiRam108/Tac-Toe-Game

# Navigate to the project
cd Tac-Toe-Game

# Install dependencies
npm install
🧪 Development
bash

# Start local dev server
npm run dev

# Open in browser
http://localhost:3000
🚢 Production
bash

# Build the production-ready app
npm run build

# Preview the built app
npm run preview
🚧 Future Improvements
If given more time or resources, here's what I’d add:

🤖 AI Opponent: Play against smart bots with difficulty levels

🌐 Multiplayer Online Mode: Real-time play using WebSockets

🏆 Tournament Mode: Bracket-style multiplayer battles

🎨 Custom Emoji Sets: Let users create and use their own emoji packs

📊 Advanced Stats: Game analytics and win/loss history

♿ Accessibility: Full keyboard navigation and screen reader support

📱 PWA Support: Offline play with installable app experience

🎨 Theme Customization: Light/Dark modes & custom color themes

🤝 Contributing
Contributions, suggestions, and feedback are welcome!
Feel free to fork the repo and submit a pull request.

📄 License
This project is licensed under the MIT License.
See the LICENSE file for details.

🙏 Acknowledgments
🎮 Challenge provided by Darban.ai

🎨 Icons by Lucide React

🔧 Built with React + Vite

💅 Styled using Tailwind CSS