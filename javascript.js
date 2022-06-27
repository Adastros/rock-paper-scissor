let computerScore = 0,
    playerScore = 0,
    previousPlayerMove = undefined,
    previousComputerMove = undefined;

const playerScoreNode = document.querySelector('.playerScore'),
    computerScoreNode = document.querySelector('.computerScore'),
    roundResultNode = document.querySelector('.roundResult'),
    gameResultNode = document.querySelector('.gameResult'),
    buttonNodes = document.querySelectorAll('button'),
    playerMoveNodes = document.querySelectorAll('.player-move'),
    computerMoveNodes = document.querySelectorAll('.computer-move');

buttonNodes.forEach((button) => {
    return button.addEventListener('click', (e) => {
        let playerMove = e.currentTarget.className,
            computerMove = computerPlay(),
            roundResult = playRound(playerMove, computerMove);

        updateScore(roundResult);
        displayMoveSelection(playerMove, computerMove);
        displayPlayerScore(playerScore);
        displayComputerScore(computerScore);
        displayTextResult(roundResult);
        displayGameResult();
    });
});

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3),
        play = ['rock', 'paper', 'scissors'];

    return play[randomNum];
}

function playRound(playerSelection, computerSelection) {
    let result = '';

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result = "You lose! Paper beats Rock."
        } else {
            result = "You win! Rock beats Scissors."
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            result = "You lose! Scissors beats Paper."
        } else {
            result = "You win! Paper beats Rock."
        }
    } else if (playerSelection === 'scissors') {
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

function displayMoveSelection(playerSelection, computerSelection) {
    if (previousPlayerMove !== undefined) {
        previousPlayerMove.classList.toggle('hide');
    }

    if (previousComputerMove !== undefined) {
        previousComputerMove.classList.toggle('hide');
    }

    playerMoveNodes.forEach((playerMove) => {
        if (playerMove.classList.contains(playerSelection)) {
            playerMove.classList.toggle('hide');
            previousPlayerMove = playerMove;
        }
    });

    computerMoveNodes.forEach((computerMove) => {
        if (computerMove.classList.contains(computerSelection)) {
            computerMove.classList.toggle('hide');
            previousComputerMove = computerMove;
        }
    });
}

function displayPlayerScore(playerScore) {
    playerScoreNode.textContent = playerScore;
}

function displayComputerScore(computerScore) {
    computerScoreNode.textContent = computerScore;
}

function displayTextResult(roundResult) {
    roundResultNode.textContent = roundResult;
}

function displayGameResult() {
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

    gameResultNode.textContent = gameResult;
}