//prompt user for selection (rock, paper or scissors)
//if wrong selection, alert user.
//convert all input text to lowercase

//computer randomly picks rock, paper or scissors
//Rock, paper, scissors are converted to numbers

//rock beats scissors
//scissors beats paper
//paper beats rock

//if user and computer are equil
//return tie

//if user selects rock and computer has scissors
//return user wins
//if user selects scissors and computer has paper
//return user wins
//if user selects paper and computer has rock
//return user wins
//else
//computer wins

let playerScore = 0;
let computerScore = 0;
let tieGame = 0;
let gameResults = "No Results";

function computerPlay() {
  return Math.round(Math.random() * 2);
}

function playRound(playerSelection, computerSelection) {
  //your code here

  let playerSelectionInt = 0;

  //assign numbers to string input for computer comparison
  if (playerSelection.toLowerCase() === "rock") {
    playerSelectionInt = 0;
  } else if (playerSelection.toLowerCase() === "scissors") {
    playerSelectionInt = 1;
  } else if (playerSelection.toLowerCase() === "paper") {
    playerSelectionInt = 2;
  } else {
    return 'Not a valid selection, please select "Rock", "Paper" or "Scissors"';
  }
  //console.log("Player Selection Int:" + playerSelectionInt);
  // If both inputs are the same, tie game.
  if (playerSelectionInt === computerSelection) {
    tieGame++;
    return "Game is Tied";
    //if user has rock and computer has scissors
  } else if (playerSelectionInt === 0 && computerSelection === 1) {
    playerScore++;
    return "Player Wins";
    //if Player has scissors and computer has paper
  } else if (playerSelectionInt === 1 && computerSelection === 2) {
    playerScore++;
    return "Player Wins";
    //if Player has paper and computer has rock
  } else if (playerSelectionInt === 2 && computerSelection === 0) {
    playerScore++;
    return "Player Wins";
    //anything else computer wins
  } else {
    computerScore++;
    return "Computer Wins";
  }
}

function rpsStringConvert(rpsValue) {
  //Convert inValue into String
  if (rpsValue === 0) {
    return "Rock";
  } else if (rpsValue === 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

let playerSelection = "";
let computerSelection = "";

const button = document.querySelectorAll("button");
let updateText = document.querySelector(".update-text");
let playerScoreNum = document.querySelector(".player-score");
let tieScoreNum = document.querySelector(".tie-score");
let computerScoreNum = document.querySelector(".computer-score");

button.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.classList.value;
    computerSelection = computerPlay();

    gameResults = playRound(playerSelection, computerSelection);

    updateText.textContent = gameResults;
    playerScoreNum.textContent = playerScore;
    tieScoreNum.textContent = tieGame;
    computerScoreNum.textContent = computerScore;

    //Anounce game winner if over 5 games
    if (playerScore >= 5) {
      updateText.textContent = "🎉 Player Wins Series! 🎉";
    }
    if (computerScore >= 5) {
      updateText.textContent = "🎉 Computer Wins Series! 🎉";
    }
  });
});

//}

// console.log(`Total Scores:`);
// console.log(`PLayer Score = ${playerScore}`);
// console.log(`Computer Scores = ${computerScore}`);
// console.log(`Total Tied Games = ${tieGame}`);

// if (playerScore === computerScore) {
//   console.log(`Tied Series!`);
// } else if (playerScore > computerScore) {
//   console.log(`Player Wins Series!`);
// } else {
//   console.log(`Computer Wins Series!`);
// }
