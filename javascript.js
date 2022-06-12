function computerPlay () {
    let randomNum = Math.floor(Math.random() * 3);
    let play;

    if (randomNum === 0) {
        play = 'Rock';
    } else if (randomNum === 1) {
        play = 'Paper';
    } else {
        play = 'Scissors';
    }

    return play;
}

/* plays a single round */
function playRound (playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    let lowerCaseComputerSelection = computerSelection.toLowerCase();
    let results = '';

    console.log("computer: " + lowerCaseComputerSelection);
    console.log("Player: " + lowerCasePlayerSelection);

    if (lowerCasePlayerSelection === lowerCaseComputerSelection) {
        results = "It's a tie!";
    } else if (lowerCasePlayerSelection === 'rock'){
        if (lowerCaseComputerSelection === 'paper') {
            results = "You lose! Paper beats Rock"
        } else {
            results = "You win! Rock beats Scissors"
        }
    } else if (lowerCasePlayerSelection === 'paper') {
        if (lowerCaseComputerSelection === 'scissors') {
            results = "You lose! Scissors beats Paper"
        } else {
            results = "You win! Paper beats Rock"
        }
    } else if (lowerCasePlayerSelection === 'scissors') {
        if (lowerCaseComputerSelection === 'rock') {
            results = "You lose! Rock beats Scissors"
        } else {
            results = "You win! Scissors beats Paper"
        }
    }

    return results;
}