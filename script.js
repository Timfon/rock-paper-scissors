function getComputerChoice() {
    const game = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * game.length)   //game.length? should be ()

    return game[randIndex]
}

playerScore = 0
computerScore = 0



function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();

    console.log(playerSelection + " " + computerSelection)
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
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

const container = document.querySelector('#container')
const score = document.createElement('div')
score.classList.add('score') //adds class score to score div.

const buttons = document.querySelectorAll('button');


function game() {
    playerScore = 0
    computerScore = 0

    
    rock.addEventListener('click', function(e) {
        playRound("rock", getComputerChoice())
        score.textContent = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore
        container.appendChild(score)
        if (playerScore >= 5) {
            score.textContent = "Player wins!"
            container.appendChild(score)
        
        } else if (computerScore >= 5) {
            score.textContent = "U lose git gud"
            container.appendChild(score)
        }
    })
    paper.addEventListener('click', function(e) {
        playRound("rock", getComputerChoice())
        score.textContent = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore
        container.appendChild(score)
        if (playerScore >= 5) {
            score.textContent = "Player wins!"
            container.appendChild(score)
        
        } else if (computerScore >= 5) {
            score.textContent = "U lose git gud"
            container.appendChild(score)
        }
    })
    scissor.addEventListener('click', function(e) {
        
        playRound("scissors", getComputerChoice())
        score.textContent = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore
        container.appendChild(score)
        if (playerScore >= 5) {
            score.textContent = "Player wins!"
            container.appendChild(score)
        
        } else if (computerScore >= 5) {
            score.textContent = "U lose git gud"
            container.appendChild(score)
        }
    })

}

game()
