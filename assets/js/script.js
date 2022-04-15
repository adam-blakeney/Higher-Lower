// this selects randon number and displays it/

let theNum = Math.floor(Math.random() * 50) + 1;
document.getElementById("numberQ").innerHTML = theNum;


function runGame(gameType){
  
    if (gameType === "higher") {
        displayQuestion(theNum1);
    } else {
        alert(`Unknown game type: ${gameType}`);
    }
    }


function displayQuestion(numberQ){
document.getElementById(numberQ).innerHTML = theNum;
}