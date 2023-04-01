console.log("Rock Paper Scissors!");
game();

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

    if (userInput == "rock") userInput = 1;
    else if (userInput == "paper") userInput = 2;
    else if (userInput == "scissors") userInput = 3;

    if (computerInput == "rock") computerInput = 1;
    else if (computerInput == "paper") computerInput = 2;
    else if (computerInput == "scissors") computerInput = 3;

    if ((userInput % 3) == computerInput) { 
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

function game() {
    for(let i = 0; i < 5; i++) {
        let userInput = prompt("Rock, Paper, Scissors?: ");
        let computerChoice = getComputerChoice();
        let outcome = startRound(userInput, computerChoice);

        if (outcome == "You Win!") console.log(`${userInput} beats ${computerChoice}. ${outcome}`);
        else console.log(`${computerChoice} beats ${userInput}. ${outcome}`);
    }
}