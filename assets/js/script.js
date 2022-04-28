const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('.button');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');

let userChoice;
let computerChoice;
let result;
let userscore = 0;
let computerscore = 0;



/*
This is the main function. It puts the buttons into a array and adds an eventlistener.
*/

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', function() {
   userChoice = this.id;
   userChoiceDisplay.innerHTML = userChoice;
   generateComputerChoice();
   getResult();
}));

/**
 * This generates a random number between 1 - 3 for the computer by giving 
 * them the value of Rock, Paper or Scissors.
 */
function generateComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 3) + 1;
   
   if (randomNumber === 1) {
      computerChoice = 'rock';
   }
   if (randomNumber === 2) {
      computerChoice = 'paper';
   }
   if (randomNumber === 3) {
      computerChoice = 'scissors';
   }
   computerChoiceDisplay.innerHTML = computerChoice;
}

/**
 * This compares the players choice with the computers choice
 */
function getResult() {
   
   if (computerChoice === userChoice) {
      result = 'Tie';
   }else if(userChoice === 'rock') {
      if(computerChoice === 'scissors') {
         result = 'you win';
         userscore++; // increases user score by 1
         win.innerHTML = userscore;
      }else {
         result = 'you lose';
         computerscore++; // increases computers score by 1 
         lose.innerHTML = computerscore;
      }
   }
   else if(userChoice === 'paper') {
      if(computerChoice === 'rock') {
         result = 'you win';
         userscore++;
         win.innerHTML = userscore;
      }else{
         result = 'you lose';
         computerscore++;
         lose.innerHTML = computerscore;
      }
   }
   else if(userChoice === 'scissors') {
      if(computerChoice === 'paper') {
         result = 'you win';
         userscore++;
         win.innerHTML = userscore;
      }else{
         result = 'you lose';
         computerscore++;
         lose.innerHTML = computerscore;
      }
   }
   resultDisplay.innerHTML = result;
}


/**
 * THIS CHECKS USER AND COMPUTER SCORE TO DETMINE WHEN TO END GAME AND DISPLAY MESSAGE
 */
function gameOver() {
   if(userscore === 6) {
      alert('YOU ARE THE WINNER!!');
      location.reload();
   }else if(computerscore === 6) {
      alert('DEFEATED...');
      location.reload();
   }else {
      alert("ITS A DRAW..");
      location.reload();
   }

}

/**
 * This is the fuction for refresing the page and game scores..
 */
function refresh(possibleChoices){
   window.location.reload("Refresh");
}
