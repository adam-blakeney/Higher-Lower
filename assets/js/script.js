/*jshint esversion: 6 */
// declared variables
const playerPicksDisplay = document.querySelector('#player-picks');
const compPicksDisplay= document.querySelector('#comp-picks');
const resultDisplay = document.querySelector('#result');
const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score');

const button = document.querySelectorAll('button');
let playerPicks;
let compPicks;
let result; 
let userScore = 0;
let machineScore = 0;

/**
 * main game function
 */
button.forEach(button => button.addEventListener('click', function() {
    playerPicks = this.id;
    playerPicksDisplay.innerHTML = playerPicks;
    compRandomAnswer();
    getResult();
    gameOver();
    reStart();
}));

/**
 * fuction generates ranodom number
 */
function compRandomAnswer() {
    const randomNumber = Math.floor(Math.random() * button.length + 1);
    console.log(randomNumber);

    if (randomNumber === 1) {
        compPicks = 'rock';
    } else if (randomNumber === 2) {
        compPicks = 'scissors';
    } else if (randomNumber === 3) {
        compPicks = 'paper';
    }

    compPicksDisplay.innerHTML = compPicks;
}

/**
 * function to determine the winner
 */
function getResult() {
    if (compPicks === playerPicks) {
        result = 'go again...';
    } else if (compPicks === 'rock' && playerPicks === "paper") {
        result = 'winner!';
        userScore++;
        playerScore.textContent = userScore;

    } else if (compPicks === 'rock' && playerPicks === "scissors") {
        result = 'oops..';
        machineScore++;
        compScore.textContent = machineScore;
    } else if (compPicks === 'paper' && playerPicks === "scissors") {
        result = 'you won!';
        userScore++;
        playerScore.textContent = userScore;
    } else if (compPicks === 'paper' && playerPicks === "rock") {
        result = 'loser..';
        machineScore++;
        compScore.textContent = machineScore; 
    } else if (compPicks === 'scissors' && playerPicks === "rock") {
        result = 'easy!';
        userScore++;
        playerScore.textContent = userScore;
    } else if (compPicks === 'scissors' && playerPicks === "paper") {
        result = 'you lose...';
        machineScore++;
        compScore.textContent = machineScore;
    }

    resultDisplay.innerHTML = result;
     
}

/**
 * function declares the winner and resets the game
 */
function gameOver(getResult) {
    if (userScore === 3) {
        alert('You are the Winner');
        location.reload();
    } else if (machineScore === 3) {
        alert('You have lost...');
        location.reload();
    } 
    
} 

/**
  function for reset button. refreshe page.
 */
function reStart() {
   const reStart = document.querySelector('#reset').addEventListener('click', function() {
        window.location.reload();
   });
  
}