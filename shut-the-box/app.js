const numbers = document.querySelectorAll(".numbers-container div");
const dices = document.querySelectorAll(".dice-container div");

let sum = 0;

numbers.forEach(element => {
  element.addEventListener("click", selectNumber);
});

function selectNumber(e) {
  sum += parseInt(e.target.textContent);
  validateSum(sum);
}

function validateSum(sum){

}