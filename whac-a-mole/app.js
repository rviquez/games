const squares = document.querySelectorAll(".square");
const mole = document.querySelector("mole");
const timer = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let time = 0;
let hitPosition;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");

    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener("mousedown", ()=> {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 3000);
}

moveMole();

function countDown() {
    
}
