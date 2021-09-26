let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

function playRound() {

    // Randomly select a choice for the computer from an array
    function computerPlay() {
        let choices = ["rock","paper","scissors"];
        let computerChoice = choices[Math.floor(Math.random()*choices.length)];
        return computerChoice;
    }

    // Prompt the user to enter a choice
    function playerPlay() {
        let playerChoice = prompt("Choose rock, paper, or scissors");
        return playerChoice;
    }

    // Assign choices to variables
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    // Check player choice vs computer choice
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            console.log(`You chose ${playerSelection}, computer chose ${computerSelection}, it's a draw!`);
        } else if (computerSelection === "paper"){
            console.log(`You chose ${playerSelection}, computer chose ${computerSelection}, you lose!`);
            computerScore++
        } else if (computerSelection === "scissors"){
            console.log(`You chose ${playerSelection}, computer chose ${computerSelection}, you win!`);
            playerScore++
        }
        roundsPlayed++;
    } else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            console.log(`You chose ${playerSelection}, computer chose ${computerSelection}, you win!`);
            playerScore++
        } else if (computerSelection === "paper"){
            console.log(`You chose ${playerSelection}, computer chose ${computerSelection}, it's a draw!`);
        } else if (computerSelection === "scissors"){
            console.log(`You chose ${playerSelection}, computer chose ${computerSelection}, you lose!`);
            computerScore++
        }
        roundsPlayed++;
    } else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            console.log(`You chose ${playerSelection}, computer chose ${computerSelection}, you lose!`);
            computerScore++
        } else if (computerSelection === "paper"){
            console.log(`You chose ${playerSelection}, computer chose ${computerSelection}, you win!`);
            playerScore++
        } else if (computerSelection === "scissors"){
            console.log(`You chose ${playerSelection}, computer chose ${computerSelection}, it's a draw!`);
        }
        roundsPlayed++;
    } else {
        console.log('Invalid choice, choose "rock", "paper", or "scissors" only.')
    }

}

function game(){
    for (let i = roundsPlayed; i < 5;){
        playRound();
        i = roundsPlayed;
        if (roundsPlayed === 5){
            if (playerScore > computerScore){
                console.log(`You won ${playerScore} games to ${computerScore}!`)
            } else if (playerScore < computerScore){
                console.log(`You lost ${playerScore} games to ${computerScore}!`)
            } else{
                console.log(`You drew with ${playerScore} games to ${computerScore}!`)
            }
        }
    }
}

game();