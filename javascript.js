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

/* plays a single round */
function playRound (playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    let results = '';

    console.log("computer: " + computerSelection);
    console.log("Player: " + lowerCasePlayerSelection);

    if (lowerCasePlayerSelection === computerSelection) {
        results = "It's a tie!";
    } else if (lowerCasePlayerSelection === 'rock'){
        if (computerSelection === 'paper') {
            results = "You lose! Paper beats Rock"
        } else {
            results = "You win! Rock beats Scissors"
        }
    } else if (lowerCasePlayerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            results = "You lose! Scissors beats Paper"
        } else {
            results = "You win! Paper beats Rock"
        }
    } else if (lowerCasePlayerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            results = "You lose! Rock beats Scissors"
        } else {
            results = "You win! Scissors beats Paper"
        }
    }

    return results;
}

/* plays 5 rounds of rock paper scissors */
function game () {
    let playerScore = 0,
        computerScore = 0,
        roundResults = '',
        playerSelection = '',
        computerSelection = '';

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, Paper, or Scissors?');
        computerSelection = computerPlay();
        roundResults = playRound(playerSelection, computerSelection);

        if (roundResults.includes('win')) {
            ++playerScore;
        } else {
            ++computerScore;
        }

        console.log(roundResults);
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
}