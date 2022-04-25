const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const numbers = document.querySelectorAll(".numbers-container div");
const dices = document.querySelectorAll(".dice-container div");
const startButton = document.getElementById("start");
const giveUpButton = document.getElementById("give-up");

let dice1 = 0;
let dice2 = 0;
let selectedNumbers = [];
let currentPlayer = 1;

player1Score.textContent = 0;
player2Score.textContent = 0;

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  giveUpButton.disabled = false;
  dices[0].textContent = 1;
  dices[1].textContent = 1;
  enableDices();
  enableNumbers();
});

giveUpButton.addEventListener("click", () => {
  switch (currentPlayer) {
    case 1:
      currentPlayer = 2;
      player1Score.textContent = addPoints();
      player1Score.classList.remove("current-player");
      player2Score.classList.add("current-player");
      break;
    case 2:
      currentPlayer = 1;
      player2Score.textContent = addPoints();
      player2Score.classList.remove("current-player");
      player1Score.classList.add("current-player");
      break;
    default:
      break;
  }
  dices[0].textContent = 1;
  dices[1].textContent = 1;
  enableDices();
  enableNumbers();
  selectedNumbers = [];
  dices.forEach(element => {
    element.textContent = "";
  });
});

function enableNumbers() {
  numbers.forEach(element => {
    element.addEventListener("click", selectNumber);
    element.classList.remove("disabled");
  });
}

function enableSelectedNumbers() {
  selectedNumbers.forEach((selectedNumber) => {
    numbers[selectedNumber - 1].classList.remove("disabled");
    numbers[selectedNumber - 1].addEventListener("click", selectNumber);
  });
}

function enableDices() {
  dices.forEach(element => {
    element.addEventListener("click", rollDice);
    element.classList.remove("disabled");
  });
}

function disableNumbers() {
  selectedNumbers.forEach((selectedNumber) => {
    numbers[selectedNumber - 1].classList.add("disabled");
    numbers[selectedNumber - 1].removeEventListener("click", selectNumber);
  });
}

function disableDices() {
  dices.forEach((dice) => {
    dice.classList.add("disabled");
    dice.removeEventListener("click", selectNumber);
  });
}

function selectNumber(e) {
  let selectedNumber = parseInt(e.target.textContent);
  selectedNumbers.push(selectedNumber);
  numbers[selectedNumber - 1].classList.add("disabled");
  numbers[selectedNumber - 1].removeEventListener("click", selectNumber);
  validateSum();
}

function rollDice() {
  dices.forEach(dice => {
    dice.textContent = Math.floor((Math.random() * 6) + 1);
  });
  dice1 = parseInt(dices[0].textContent);
  dice2 = parseInt(dices[1].textContent);
  disableDices();
}

function validateSum() {
  let sum = selectedNumbers.reduce((partialSum, a) => partialSum + a, 0);
  if (sum === (dice1 + dice2)) {
    disableNumbers();
    selectedNumbers = [];
    enableDices();
  }
  if (sum > (dice1 + dice2)) {
    alert("try again");
    enableSelectedNumbers();
    selectedNumbers = [];
    enableDices();
  }
}

function addPoints() {
  let result = 0;
  numbers.forEach(element => {
    if(!element.classList.contains("disabled")){
      result += parseInt(element.textContent);
    }
  });
  if (selectedNumbers.length > 0) {
    result += selectedNumbers.reduce((partialSum, a) => partialSum + a, 0);
  }
  return result;
}
