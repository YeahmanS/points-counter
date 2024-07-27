let player1Score = 0;
let player2Score = 0;

// Function to update player 1's score
function player1() {
    let scoreElement = document.getElementById("player1-literal-score");
    let opponentScoreElement = document.getElementById("player2-literal-score");

    if (scoreElement.textContent === "LOVE") {
        player1Score = 15;
        scoreElement.textContent = "15";
    } else if (scoreElement.textContent === "15") {
        player1Score = 30;
        scoreElement.textContent = "30";
    } else if (scoreElement.textContent === "30") {
        player1Score = 40;
        scoreElement.textContent = "40";
    } else if (scoreElement.textContent === "40") {
        if (opponentScoreElement.textContent === "40") {
            scoreElement.textContent = "DEUCE";
            opponentScoreElement.textContent = "DEUCE";
        } else if (opponentScoreElement.textContent === "DEUCE") {
            scoreElement.textContent = "WON";
            opponentScoreElement.textContent = "LOST";
            setTimeout(gamereset, 5000); // Reset the game after 5 seconds
        } else {
            scoreElement.textContent = "WON";
            opponentScoreElement.textContent = "LOST";
            setTimeout(gamereset, 5000); // Reset the game after 5 seconds
        }
    } else if (scoreElement.textContent === "DEUCE") {
        scoreElement.textContent = "WON";
        opponentScoreElement.textContent = "LOST";
        setTimeout(gamereset, 5000); // Reset the game after 5 seconds
    }
}

// Function to update player 2's score
function player2() {
    let scoreElement = document.getElementById("player2-literal-score");
    let opponentScoreElement = document.getElementById("player1-literal-score");

    if (scoreElement.textContent === "LOVE") {
        player2Score = 15;
        scoreElement.textContent = "15";
    } else if (scoreElement.textContent === "15") {
        player2Score = 30;
        scoreElement.textContent = "30";
    } else if (scoreElement.textContent === "30") {
        player2Score = 40;
        scoreElement.textContent = "40";
    } else if (scoreElement.textContent === "40") {
        if (opponentScoreElement.textContent === "40") {
            scoreElement.textContent = "DEUCE";
            opponentScoreElement.textContent = "DEUCE";
        } else if (opponentScoreElement.textContent === "DEUCE") {
            scoreElement.textContent = "WON";
            opponentScoreElement.textContent = "LOST";
            setTimeout(gamereset, 5000); // Reset the game after 5 seconds
        } else {
            scoreElement.textContent = "WON";
            opponentScoreElement.textContent = "LOST";
            setTimeout(gamereset, 5000); // Reset the game after 5 seconds
        }
    } else if (scoreElement.textContent === "DEUCE") {
        scoreElement.textContent = "WON";
        opponentScoreElement.textContent = "LOST";
        setTimeout(gamereset, 5000); // Reset the game after 5 seconds
    }
}

// Function to reset the game
function gamereset() {
    player1Score = 0;
    player2Score = 0;
    document.getElementById("player1-literal-score").textContent = "LOVE";
    document.getElementById("player2-literal-score").textContent = "LOVE";
}

function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        // Device is in portrait mode
        alert('Please rotate your device to landscape mode.');
    }
}

// Check orientation on page load
window.addEventListener('load', checkOrientation);

// Check orientation on resize/orientation change
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);