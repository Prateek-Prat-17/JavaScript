// 1. Create an array that contains the variables Rock, Paper, and Scissors
const choices = ["Rock", "Paper", "Scissors"];

// 2. Generate random number 0–2 for both player and computer
const playerIndex = Math.floor(Math.random() * 3);
const computerIndex = Math.floor(Math.random() * 3);

// 3. Create variables to store the choices
const playerChoice = choices[playerIndex];
const computerChoice = choices[computerIndex];

// 4. Create a variable to hold the response message
let resultMessage = "";

// 5. Apply game logic using conditions
if (playerIndex === computerIndex) {
  resultMessage = "It's a tie!";
} else if (
  (playerChoice === "Rock" && computerChoice === "Scissors") ||
  (playerChoice === "Paper" && computerChoice === "Rock") ||
  (playerChoice === "Scissors" && computerChoice === "Paper")
) {
  resultMessage = "You win!";
} else {
  resultMessage = "Computer wins!";
}
console.log(`Player: ${playerChoice} vs Computer: ${computerChoice}`);
console.log(resultMessage);