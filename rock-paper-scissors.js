// randomise computer choice
function getComputerChoice() {
    let computerChoices = ["rock","paper","scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];  
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

// set rock button as variable
const rock = document.querySelector('#rock');
// add function to button
rock.addEventListener('click', () => {

    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    roundText.textContent = `Round ${round} - ${playRound(playerSelection, computerSelection)}`;
    scoreText.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;

});

// set paper button as variable
const paper = document.querySelector('#paper');
// add function to button
paper.addEventListener('click', () => {
  
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    roundText.textContent = `Round ${round} - ${playRound(playerSelection, computerSelection)}`;
    scoreText.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;
});

// set scissors button as variable
const scissors = document.querySelector('#scissors');
// add function to button
scissors.addEventListener('click', () => {
  
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    roundText.textContent = `Round ${round} - ${playRound(playerSelection, computerSelection)}`;
    scoreText.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;

});

// set round and score divs
const roundText = document.querySelector('.round');
roundText.textContent = "Select Rock, Paper or Scissors to begin";
const scoreText = document.querySelector('.score');
scoreText.textContent = "";