const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerElScore = document.getElementById("user-score");
const computerElScore = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    console.log(result);
    resultEl.textContent = result;
    // console.log("clicked!", button.id, "computerChoice", computerPlay());
  });
});
function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * choice.length);
  console.log(computerChoice);
  return choice[computerChoice];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    playerScore++;
    playerElScore.textContent = playerScore;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    computerElScore.textContent = computerScore;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
