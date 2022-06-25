let computerScore = 0,
    playerScore = 0;

const playerScoreNode = document.getElementById('playerScore'),
    computerScoreNode = document.getElementById('computerScore'),
    resultNode = document.getElementById('textResult'),
    buttonNodes = document.querySelectorAll('button');

buttonNodes.forEach((button) => {
    return button.addEventListener('click', (e) => {
        let roundResult = playRound(e.currentTarget.className, computerPlay());
        updateScore(roundResult);
        displayPlayerScore(playerScore);
        displayComputerScore(computerScore);
        displayTextResult(roundResult);
    });
});

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3),
        play = ['rock', 'paper', 'scissors'];

    return play[randomNum];
}

function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase(),
        result = '';

    //console.log("computer: " + computerSelection);
    //console.log("Player: " + lowerCasePlayerSelection);

    if (lowerCasePlayerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (lowerCasePlayerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result = "You lose! Paper beats Rock."
        } else {
            result = "You win! Rock beats Scissors."
        }
    } else if (lowerCasePlayerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            result = "You lose! Scissors beats Paper."
        } else {
            result = "You win! Paper beats Rock."
        }
    } else if (lowerCasePlayerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            result = "You lose! Rock beats Scissors."
        } else {
            result = "You win! Scissors beats Paper."
        }
    }

    return result;
}

function updateScore(roundResult) {
    if (roundResult.includes('win')) {
        playerScore++;
    } else if (roundResult.includes('lose')) {
        computerScore++;
    }
}

function displayPlayerScore(playerScore) {
    playerScoreNode.textContent = playerScore;
}

function displayComputerScore(computerScore) {
    computerScoreNode.textContent = computerScore;
}

function displayTextResult(roundResult) {
    let gameResult = '';

    if (computerScore === 5) {
        computerScore = 0;
        playerScore = 0;
        gameResult = ' You lost the game!';
    } else if (playerScore === 5) {
        computerScore = 0;
        playerScore = 0;
        gameResult = ' You won the game!';
    }

    resultNode.textContent = roundResult + gameResult;
}