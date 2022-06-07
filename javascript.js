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

function computerPlay() {
  return Math.round(Math.random() * 3);
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
  // If both inputs are the same, tie game.
  if (playerSelectionInt === computerSelection) {
    return "Game is Tied";
    //if user has rock and computer has scissors
  } else if (playerSelectionInt === 0 && computerSelection === 1) {
    return "Player Wins";
    //if Player has scissors and computer has paper
  } else if (playerSelectionInt === 1 && computerSelection === 2) {
    return "Player Wins";
    //if Player has paper and computer has rock
  } else if (playerSelectionInt === 2 && computerSelection === 0) {
    return "Player Wins";
    //anything else computer wins
  } else {
    return "Computer Wins";
  }
}

const playerSelection = prompt("Pick Rock, Paper or Scissors...");
const computerSelection = computerPlay();

let computerSelectionString = "";
//turn computer Int intro string
if (computerSelection === 0) {
  computerSelectionString = "Rock";
} else if (computerSelection === 1) {
  computerSelectionString = "Scissors";
} else {
  computerSelectionString = "Paper";
}

console.log(`Player Throws: ${playerSelection}`);
console.log(`Computer Throws: ${computerSelectionString}`);
console.log(`...`);

console.log(playRound(playerSelection, computerSelection));
