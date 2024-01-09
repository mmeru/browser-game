document.getElementById('start-button').addEventListener('click', startGame);

let score = 0;
let missedClicks = 0;
let gameActive = false;
let gameTimer;
let countdownTimer;
let timeLeft = 10; // Total game time in seconds

function startGame() {
    // Clear any existing game state
    if (gameActive) {
        endGame();
    }

    gameActive = true;
    score = 0;
    missedClicks = 0;
    timeLeft = 10; // Reset the time for each new game
    updateStats();
    clearGameArea();
    addCircle();
    gameTimer = setTimeout(endGame, 10000); // 10 seconds game time
    countdownTimer = setInterval(updateCountdown, 1000); // Update countdown every second
    document.getElementById('start-button').textContent = 'Restart'; // Change button text to 'Restart'
    document.getElementById('game-area').addEventListener('click', areaClicked, true);
}

function areaClicked(event) {
    if (!event.target.classList.contains('circle')) {
        missedClicks++;
        updateStats();
    }
}

function clearGameArea() {
    document.getElementById('game-area').innerHTML = '';
}

function addCircle() {
    if (!gameActive) return;

    let circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.top = `${Math.random() * 370}px`;
    circle.style.left = `${Math.random() * 570}px`;
    circle.addEventListener('click', circleClicked, true);
    document.getElementById('game-area').appendChild(circle);
}

function circleClicked(event) {
    if (!gameActive) return;

    score++;
    updateStats();
    clearGameArea();
    addCircle();
    event.stopPropagation();
}

function updateStats() {
    let totalClicks = score + missedClicks;
    let accuracy = totalClicks > 0 ? (score / totalClicks) * 100 : 0;
    accuracy = Math.round(accuracy);
    document.getElementById('score').textContent = `Score: ${score} | Accuracy: ${accuracy}% | Time left: ${timeLeft}`;
}

function updateCountdown() {
    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        endGame();
        return;
    }
    timeLeft--;
    updateStats();
}

function endGame() {
    gameActive = false;
    clearInterval(gameTimer);
    clearInterval(countdownTimer);
    document.getElementById('game-area').removeEventListener('click', areaClicked, true);
    let totalClicks = score + missedClicks;
    let accuracy = totalClicks > 0 ? (score / totalClicks) * 100 : 0;
    accuracy = Math.round(accuracy);
    document.getElementById('game-area').innerHTML = `<div class='end-message'>Game Over! Your final score is ${score}. Accuracy: ${accuracy}%.</div>`;
    document.getElementById('start-button').textContent = 'Play Again'; // Change button text to 'Play Again'
}
