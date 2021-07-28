const choices = ['paper', 'rock', 'scissors'];
const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');

let score = 0;
let userChoice = undefined;


buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    userChoice = button.getAttribute("data-choice");//get what user clicks on

   
    checkWinner();
  });
});

reset.addEventListener("click", function () {
  main.style.display = 'flex';
  selection.style.display = 'none';
});

function checkWinner() {
  const computerChoice = pickRandomChoice();

  if (userChoice === computerChoice) {
    //draw
  } else if (
    (userChoice === 'paper' && computerChoice === 'rock')
    ||
    (userChoice === 'rock' && computerChoice === 'scissors') 
    || 
    (userChoice === 'scissors' && computerChoice === 'paper')
   ) {
    //user won
    updateScore(1);
  } else {
    //user lost
    updateScore(-1);
  }
  //show the selection/hide the main

  main.style.display = 'none';
  selection.style.display = 'flex';

};

function updateScore(value) {
  score += value;//update score

  scoreEl.innerText = score;//score on screen
}

function pickRandomChoice () {//a la computer picks it
  return choices[Math.floor(Math.random() * choices.length)];
};

function updateSelection(selectionEl, choice) {

};



