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


function playGame(playerSelection, computerSelection) {
    winner = playRound(playerSelection, computerSelection);

    if (computer < 5 && player < 5) {

        if (winner === "computer") {
            computer++;
            results.textContent = `Computer picked ${computerSelection}. 
            Computer wins - ${computerSelection} beats ${playerSelection}`
            container.appendChild(results);
            score.textContent = `Scores: You ${player}, Computer ${computer}, Draws ${tie}`;
            container.appendChild(score);
        } else if (winner === "player") {
            player++;
            results.textContent = `Computer picked ${computerSelection}. 
            You win - ${playerSelection} beats ${computerSelection}`
            container.appendChild(results);
            score.textContent = `Scores: You ${player}, Computer ${computer}, Draws ${tie}`;
            container.appendChild(score);
        } else {
            tie++;
            results.textContent = `Tie - you both picked ${computerSelection}`;
            container.appendChild(results);
            score.textContent = `Scores: You ${player}, Computer ${computer}, Draws ${tie}`;
            container.appendChild(score);
        }
    } else if (computer === 5) {
        container.removeChild(score);
        container.removeChild(results);
        finalScore.textContent = `Computer Wins. Final Scores: You: ${player} Computer: ${computer}.`
        container.appendChild(finalScore);
        container.appendChild(resetButton);
    } else if (player === 5) {
        container.removeChild(score);
        container.removeChild(results);
        finalScore.textContent = `You win. Final Scores: You: ${player} Computer: ${computer}.`
        container.appendChild(finalScore);
        container.appendChild(resetButton);
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





let player = 0
let computer = 0
let tie = 0

const container = document.querySelector("div.container")

const results = document.createElement("h1");

const score = document.createElement("h2");
score.style.color = "blue";

const finalScore = document.createElement("h1");

const resetButton = document.createElement("button");
resetButton.innerText = "Play Again"




const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", (button) => {

        computerSelection = getComputerChoice();
        playerSelection = button.path[0].id;

        playGame(playerSelection, computerSelection);

    });
});

resetButton.addEventListener("click", () => {
    player = 0;
    computer = 0;
    tie = 0;
    container.removeChild(finalScore);
    container.removeChild(resetButton);
})








