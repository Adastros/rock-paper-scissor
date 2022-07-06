let computerScore = 0,
  playerScore = 0,
  previousPlayerMove = undefined,
  previousComputerMove = undefined;

const playerScoreNode = document.querySelector(".player-score"),
  computerScoreNode = document.querySelector(".computer-score"),
  roundResultNode = document.querySelector(".round-result"),
  strangerIndicatorNode = document.querySelector(".stranger-indicator"),
  buttonNodes = document.querySelectorAll("button"),
  playerMoveNodes = document.querySelectorAll(".player-move"),
  computerMoveNodes = document.querySelectorAll(".computer-move");

buttonNodes.forEach((button) => {
  return button.addEventListener("click", (e) => {
    let playerMove = e.currentTarget.className,
      computerMove = computerPlay(),
      roundResult = playRound(playerMove, computerMove);

    displayMoveSelection(playerMove, computerMove);
    displayPlayerScore(playerScore);
    displayComputerScore(computerScore);
    displayTextResult(roundResult);
  });
});

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3),
    play = ["rock", "paper", "scissors"];

  return play[randomNum];
}

function playRound(playerSelection, computerSelection) {
  let result = "",
    winner = "";

  if (playerSelection === computerSelection) {
    return "Ah, a tie!";
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        result = "I won this round. Paper beats Rock.";
        winner = "stranger";
      } else {
        result = "You won this round. Rock beats Scissors.";
        winner = "player";
      }
      break;
    case "paper":
      if (computerSelection === "scissors") {
        result = "I won this round. Scissors beats Paper.";
        winner = "stranger";
      } else {
        result = "You won this round. Paper beats Rock.";
        winner = "player";
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        result = "I won this round. Rock beats Scissors.";
        winner = "stranger";
      } else {
        result = "You won this round. Scissors beats Paper.";
        winner = "player";
      }
      break;
    default:
      return "You can't play that move! That's not allowed.";
  }

  updateScore(winner);

  return result;
}

function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "stranger") {
    computerScore++;
  }
}

function displayMoveSelection(playerSelection, computerSelection) {
  if (previousPlayerMove !== undefined) {
    previousPlayerMove.classList.toggle("hide");
  }

  if (previousComputerMove !== undefined) {
    previousComputerMove.classList.toggle("hide");
  }

  playerMoveNodes.forEach((playerMove) => {
    if (playerMove.classList.contains(playerSelection)) {
      playerMove.classList.toggle("hide");
      previousPlayerMove = playerMove;
    }
  });

  computerMoveNodes.forEach((computerMove) => {
    if (computerMove.classList.contains(computerSelection)) {
      computerMove.classList.toggle("hide");
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
  if (!strangerIndicatorNode.textContent) {
    strangerIndicatorNode.textContent = "Stranger: ";
  }

  if (computerScore === 5 || playerScore === 5) {
    roundResultNode.textContent = gameResult();
  } else {
    roundResultNode.textContent = roundResult;
  }
}

function gameResult() {
  let gameResult = "";

  if (computerScore === 5) {
    computerScore = 0;
    playerScore = 0;
    gameResult =
      "I won! Thanks for the meal. Want to play again? Maybe you'll win the next game.";
  } else if (playerScore === 5) {
    computerScore = 0;
    playerScore = 0;
    gameResult = "Hmph, you won the game. Want to play again? ";
  }
  return gameResult;
}
