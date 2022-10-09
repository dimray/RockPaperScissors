function getComputerChoice() {
    choice = Math.floor(Math.random() * 3 + 1)
    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }

}



function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "rock") {
        return ("tie");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("player");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("computer");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("computer");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return ("tie");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("player");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("player");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("computer");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return ("tie");
    }
}

function game() {

    player = 0
    computer = 0
    tie = 0

    for (let i = 0; i < 5; i++) {

        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors:").toLowerCase();

        winner = playRound(playerSelection, computerSelection);

        if (winner === "computer") {
            console.log(`Player picked ${playerSelection}. Computer picked ${computerSelection}. Computer wins - ${computerSelection} beats ${playerSelection}`);
            computer++;
            console.log(`player score: ${player}, computer score: ${computer}, draws: ${tie}`);
        } else if (winner === "player") {
            console.log(`Player picked ${playerSelection}. Computer picked ${computerSelection}. Player wins - ${playerSelection} beats ${computerSelection}`);
            player++;
            console.log(`player score: ${player}, computer score: ${computer}, draws: ${tie}`);
        } else {
            console.log(`Player picked ${playerSelection}.Computer picked ${computerSelection}.Tie - you both picked ${computerSelection}`);
            tie++;
            console.log(`player score: ${player}, computer score: ${computer}, draws: ${tie}`);
        }

    }

}

game();


