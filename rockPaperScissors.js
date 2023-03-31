console.log("Rock Paper Scissors!");

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