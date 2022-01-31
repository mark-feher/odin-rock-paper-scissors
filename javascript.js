function computerPlay () {
    let rockPaperScissors = ["Rock", "Paper", "Scissors"];

    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)].toLowerCase();
}

function playerPlay (playerSelection) {
    playerSelection = prompt();
    return playerSelection.toLowerCase();
}

function playOneRound (playerSelection, computerSelection) {
    console.log("Player chose: " + playerSelection + "\n"
    + "Computer chose: " + computerSelection);
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper beats Rock, you lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats Scissors, you win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats Rock, you win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors beat Rock, you lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock beats Scissors, you lose!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beat Paper, you win!";
    }

    return "Invalid selection!"
}

console.log(playOneRound(playerPlay(), computerPlay()));