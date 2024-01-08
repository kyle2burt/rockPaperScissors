function getComputerChoice() { // Randomly return rock, paper, or scissors
    let computerChoice
    let randomNumber = Math.floor(Math.random() * 3); // Random number between 0 and 2

    switch (randomNumber) {
        case 0:
            computerChoice = "Rock"
            break;
        case 1:
            computerChoice = "Paper"
            break;
        case 2:
            computerChoice = "Scissors"
            break;
    }

    return computerChoice;
}

function startRound(userInput, computerInput) {
    let outcome;
    userInput = userInput.toLowerCase();
    computerInput = computerInput.toLowerCase();

    if (userInput == "rock") userInput = 1;
    else if (userInput == "paper") userInput = 2;
    else if (userInput == "scissors") userInput = 3;

    if (computerInput == "rock") computerInput = 1;
    else if (computerInput == "paper") computerInput = 2;
    else if (computerInput == "scissors") computerInput = 3;

    if (userInput == computerInput) { 
        outcome = "Its a tie";
    }
    else if (userInput == computerInput - 1) {
        outcome = "You lose!";
    }
    else {
        outcome = "You Win!";
    }

    return outcome;
}

function capitalize(word) {
    let firstLetter = word.slice(0, 1);
    word = word.slice(1);
    firstLetter = firstLetter.toUpperCase();
    word = word.toLowerCase();

    return word = firstLetter + word
}

function game(userInput) {
    // let userInput = prompt("Rock, Paper, Scissors?: ");
    let computerChoice = getComputerChoice();
    let outcome = startRound(userInput, computerChoice);

    playerSelectionText.textContent = userInput;
    computerSelectionText.textContent = computerChoice;

    if (outcome == "You Win!") {
        winnerText.textContent = outcome;
        outcomeText.textContent = `${capitalize(userInput)} beats ${capitalize(computerChoice)}`;
        playerScore++;
        playerScoreText.textContent = `Player Score: ${playerScore}`;
    }
    else if(outcome == "You lose!") {
        winnerText.textContent = outcome;
        outcomeText.textContent = `${capitalize(userInput)} beats ${capitalize(computerChoice)}`;
        computerScore++;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;
    }
    else {
        winnerText.textContent = outcome;
        outcomeText.textContent = `${capitalize(userInput)} ties with ${capitalize(computerChoice)}`;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        const gameOver = document.querySelector(".modal");
        const gameOverWinner = document.querySelector("#game-winner");
        const playAgainButton = document.querySelector("#play-again");

        if (playerScore > computerScore) gameOverWinner.textContent = "You Win!";
        else gameOverWinner.textContent = "You Lose!";

        gameOver.style.display = "block";

        playAgainButton.addEventListener("click", () => {
            playerScore = 0;
            computerScore = 0;

            winnerText.textContent = "Ready?";
            outcomeText.textContent = "First to score 5 points wins!"
            playerSelectionText.textContent = "?";
            computerSelectionText.textContent = "?";
            playerScoreText.textContent = `Player Score: ${playerScore}`;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;

            gameOver.style.display = "none";

            rockButton.disabled = false;
            paperButton.disabled = false;
            scissorsButton.disabled = false;
        });
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors");

const winnerText = document.querySelector("#winner-text");
const outcomeText = document.querySelector("#outcome-text");
const playerScoreText = document.querySelector("#player-score");
const playerSelectionText = document.querySelector("#player-selection")
const computerSelectionText = document.querySelector("#computer-selection")
const computerScoreText = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", () => {
    game(rockButton.id)
}); 

paperButton.addEventListener("click", () => {
    game(paperButton.id)
});

scissorsButton.addEventListener("click", () => {
    game(scissorsButton.id)
});

