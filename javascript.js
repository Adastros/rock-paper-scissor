function computerPlay () {
    let randomNum = Math.floor(Math.random() * 3);
    let play;

    if (randomNum === 0) {
        play = 'rock';
    } else if (randomNum === 1) {
        play = 'paper';
    } else {
        play = 'scissors';
    }

    return play;
}

function playRound (playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    let result = '';

    console.log("computer: " + computerSelection);
    console.log("Player: " + lowerCasePlayerSelection);

    if (lowerCasePlayerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (lowerCasePlayerSelection === 'rock'){
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

function updateScore (roundResult) {
    if (roundResult.includes('win')) {
        playerScore++;
    } else if (roundResult.includes('lose')) {
        computerScore++;
    }
}

function displayPlayerScore (playerScore) {
    let playerScoreNode = document.getElementById('playerScore');
    playerScoreNode.textContent = playerScore;
}

function displayComputerScore (computerScore) {
    let computerScoreNode = document.getElementById('computerScore');
    computerScoreNode.textContent = computerScore;
}

function displayTextResult (roundResult) {
    let resultNode = document.getElementById('textResult'),
        gameResult = '';

    if (computerScore === 5) {
        computerScore = 0;
        playerScore = 0;
        gameResult = ' You lost the game!';
    } else if (playerScore === 5) {
        computerScore = 0;
        playerScore = 0;
        gameResult =' You won the game!';
    }

    resultNode.textContent = roundResult + gameResult;
}

let computerScore = 0,
    playerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    return button.addEventListener('click', (e) => {
        let roundResult = playRound(e.target.textContent, computerPlay());
        updateScore(roundResult);
        displayPlayerScore(playerScore);
        displayComputerScore(computerScore);
        displayTextResult(roundResult);
    });
});

