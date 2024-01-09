# Circle Click

## Game Overview
Circle Click is a simple web-based game where players need to click on randomly appearing circles within a fixed time limit to score points.
The game keeps track of the player's score, accuracy, and remaining time.

## Game Components

The game consists of the following components:

- **Game Container (`game-container`):** The main container that holds the game elements.
- **Score Display (`score`):** Displays the player's current score, accuracy percentage, and remaining time.
- **Game Area (`game-area`):** The area where circles appear and where the player interacts by clicking.
- **Start/Restart Button (`start-button`):** Initiates the game or restarts it after it ends.

## Game Logic

The game logic is implemented in JavaScript (`script.js`) and includes the following key features:

- Clicking the "Play" button initiates the game and starts the countdown timer.
- Circles randomly appear within the game area during gameplay.
- Clicking on a circle increments the player's score and replaces the circle with a new one.
- Calculates accuracy depending on if a circle is clicked or not.
- The game ends after 10 seconds, displaying the final score and accuracy.
- The player can restart the game by clicking the "Restart" button.
  
Have fun playing Circle Click!
