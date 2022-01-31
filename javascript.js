function computerPlay () {
    let rockPaperScissors = ["Rock", "Paper", "Scissors"];

    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
}

function playerPlay (playerSelection) {
    playerSelection = prompt();
    return playerSelection;
}

function playOneRound (playerSelection, computerSelection) {
    console.log("Player chose: " + playerSelection + "\n"
    + "Computer chose: " + computerSelection);
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Paper beats Rock, you lose!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Rock beats Scissors, you win!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Paper beats Rock, you win!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Scissors beat Rock, you lose!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Rock beats Scissors, you lose!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Scissors beat Paper, you win!";
    }
}

// console.log(playOneRound(playerPlay(), computerPlay()));