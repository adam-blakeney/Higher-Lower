// game start auto/
// button higher/
// button lower/
// random numner/
// check answer/

// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");

    
//     runGame(1);
// }
            

function runGame() {

    document.getElementById("number-display").value = "theNum";
    
}

function randomNum() {
   let theNum = Math.floor(Math.random() * 100 + 1);
   let theNext = Math.floor(Math.random() * 100 + 1);
  
}


function gameGo(theNum){

}


// // 

//   function checkAnswer() {

//     let userAnswer = parseInt(document.getElementById("number-box").value);
//     let calculatedAnswer = calculateCorrectAnswer();
//     let isCorrect = userAnswer === calculatedAnswer[0];

//     if (isCorrect) {
//         alert("Hey! You got it right! :D");
//         incrementScore();
//     } else {
//         alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
//         incrementWrongAnswer();
//     }


// /**
//  * Gets the current score from the DOM and increments it by 1
//  */
//  function incrementScore() {

//     let oldScore = parseInt(document.getElementById("score").innerText);
//     document.getElementById("score").innerText = ++oldScore;

// }





