function computerPlay () {
    let rockPaperScissors = ["Rock", "Paper", "Scissors"];
    let chooseOne = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    console.log(chooseOne.toLowerCase());
    return chooseOne.toLowerCase();
};

function playerPlay () {
    playerSelection = prompt();
    console.log(playerSelection);
    return playerSelection.toLowerCase();
};

function playOneRound (computerSelection, playerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Tie!");
        return 0;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Paper beats rock, you lose!");
        return 1;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Rock beats scissors, you win!");
        return 2;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Paper beats rock, you win!");
        return 2;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Scissors beat paper, you lose!");
        return 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Rock beats scissors, you lose!");
        return 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Scissors beat paper, you win!");
        return 2;
    } else return -1;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let gameRound = 0; gameRound < 5; gameRound++) {
        let oneRound = playOneRound(computerPlay(), playerPlay());

        if (oneRound == 1) {
            computerScore += 1;
        } else if (oneRound == 2) {
            playerScore += 1;
        }
        console.log("Player score is: " + playerScore);
        console.log("Computer score is: " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("Player won the game! Congratulations!")
    } else console.log("Computer won the game! Better luck next time!")
}

game();