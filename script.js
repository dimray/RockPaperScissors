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





// function playGame() {

//     player = 0
//     computer = 0
//     tie = 0

//     for (let i = 0; i < 5; i++) {

//         computerSelection = getComputerChoice();
//         playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors:").toLowerCase();

//         winner = playRound(playerSelection, computerSelection);

// if (winner === "computer") {
//     console.log(`Player picked ${playerSelection}. Computer picked ${computerSelection}. Computer wins - ${computerSelection} beats ${playerSelection}`);
//     computer++;
//     console.log(`player score: ${player}, computer score: ${computer}, draws: ${tie}`);
// } else if (winner === "player") {
//     console.log(`Player picked ${playerSelection}. Computer picked ${computerSelection}. Player wins - ${playerSelection} beats ${computerSelection}`);
//     player++;
//     console.log(`player score: ${player}, computer score: ${computer}, draws: ${tie}`);
// } else {
//     console.log(`Player picked ${playerSelection}.Computer picked ${computerSelection}.Tie - you both picked ${computerSelection}`);
//     tie++;
//     console.log(`player score: ${player}, computer score: ${computer}, draws: ${tie}`);
// }

//     }

// }

// playGame();



let player = 0
let computer = 0
let tie = 0

const container = document.querySelector("div.container")

const results = document.createElement("h3");



function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "rock") {
        results.textContent = `Tie - you both picked ${computerSelection}`;
        // return ("tie");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = `Player picked ${playerSelection}. Computer picked ${computerSelection}. 
        Player wins - ${playerSelection} beats ${computerSelection}`
        // return ("player");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = `Player picked ${playerSelection}. Computer picked ${computerSelection}. Computer wins - ${computerSelection} beats ${playerSelection}`
        // return ("computer");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        results.textContent = `Player picked ${playerSelection}. Computer picked ${computerSelection}. Computer wins - ${computerSelection} beats ${playerSelection}`
        // return ("computer");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        results.textContent = `Tie - you both picked ${computerSelection}`;
        // return ("tie");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = `Player picked ${playerSelection}. Computer picked ${computerSelection}. 
        Player wins - ${playerSelection} beats ${computerSelection}`
        // return ("player");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = `Player picked ${playerSelection}. Computer picked ${computerSelection}. 
        Player wins - ${playerSelection} beats ${computerSelection}`
        // return ("player");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = `Player picked ${playerSelection}. Computer picked ${computerSelection}. Computer wins - ${computerSelection} beats ${playerSelection}`
        // return ("computer");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        results.textContent = `Tie - you both picked ${computerSelection}`;
        // return ("tie");
    }

    container.appendChild(results);
}


const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", (button) => {

        computerSelection = getComputerChoice();
        playerSelection = button.path[0].id;

        winner = playRound(playerSelection, computerSelection);
        // console.log(button.path[0].id);
    });
});


// if (winner === "computer") {
//     console.log(`Player picked ${playerSelection}. Computer picked ${computerSelection}. Computer wins - ${computerSelection} beats ${playerSelection}`);
//     computer++;
//     console.log(`player score: ${player}, computer score: ${computer}, draws: ${tie}`);
// } else if (winner === "player") {
//     console.log(`Player picked ${playerSelection}. Computer picked ${computerSelection}. Player wins - ${playerSelection} beats ${computerSelection}`);
//     player++;
//     console.log(`player score: ${player}, computer score: ${computer}, draws: ${tie}`);
// } else {
//     console.log(`Player picked ${playerSelection}.Computer picked ${computerSelection}.Tie - you both picked ${computerSelection}`);
//     tie++;
//     console.log(`player score: ${player}, computer score: ${computer}, draws: ${tie}`);
// }





