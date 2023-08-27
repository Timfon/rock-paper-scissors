function getComputerChoice() {
    const game = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * game.length)   //game.length? should be ()

    return game[randIndex]
}

playerScore = 0
computerScore = 0

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    if (player == computerSelection) {
        return "tie!"
    } else if (player === "rock" && computerSelection === "scissors"){
        playerScore ++;
        return "You win! Rock beats scissors"
    } else if (player === "rock" && computerSelection === "paper"){
        computerScore ++;
        return "You lose! paper beats rock"
    } else if (player === "paper" && computerSelection === "scissors"){
        computerScore ++;
        return "You lose! scissors beats paper"
    } else if (player === "paper" && computerSelection === "rock"){
        playerScore ++;
        return "You win! Paper beats rock"
    } else if (player === "scissors" && computerSelection === "rock"){
        computerScore ++;
        return "You lose! Rock beats scissors"
    } else if (player === "scissors" && computerSelection === "paper"){
        playerScore ++;
        return "You win! scissors beats paper"
    } else {
        return "Invalid input try again."
    }
}

function game() {
    playerScore = 0
    computerScore = 0
    for (let i = 0; i < 5; i++) {
        player = prompt("Enter your rock paper scissor")
        comChoice = getComputerChoice()
        console.log(player + " " + comChoice)
        playRound(player, comChoice)
    }
    console.log(playerScore + " " + computerScore);


    if (playerScore > computerScore) {
        console.log("player wins!")
    } else if (playerScore === computerScore) {
        console.log("player wins!")
    } else {
        console.log("Computer wins!")
    }
}

game()
