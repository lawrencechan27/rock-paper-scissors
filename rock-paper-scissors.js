// randomise computer choice
function getComputerChoice() {
    let computerChoices = ["rock","paper","scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];  
}

// prompt for player choice
function getPlayerChoice() {

    let playerChoice = prompt("Choose rock, paper or scissors");
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        playerChoice = prompt("Invalid choice, type rock, paper or scissors");
    }

    return playerChoice;

}

// check computer choice vs player choice
function playRound(playerSelection, computerSelection) {
    round++;
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "Rock vs Rock: It's a draw";
        } else if (computerSelection === "paper"){
            computerScore++;
            return "Rock vs Paper: You lose";
        } else if (computerSelection === "scissors"){
            playerScore++;
            return "Rock vs Scissors: You win";
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            playerScore++;
            return "Paper vs Rock: You win";
            
        } else if (computerSelection === "paper"){
            return "Paper vs Paper: It's a draw";
        } else if (computerSelection === "scissors"){
            computerScore++;
            return "Paper vs Scissors: You lose";
            
        }
    } else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            computerScore++;
            return "Scissors vs Rock: You lose";
            
        } else if (computerSelection === "paper"){
            playerScore++;
            return "Scissors vs Paper: You win";
            
        } else if (computerSelection === "scissors"){
            return "Scissors vs Scissors: It's a draw";
        }
    }
}

// define score variables
let playerScore = 0;
let computerScore = 0;
let round = 1;

// function to run 5 round loop for playRound
function game(){

    for (let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(`Round ${round} - ${playRound(playerSelection, computerSelection)}`);
        console.log(`Player score:${playerScore} | Computer score:${computerScore}`);
    }
}

game();
