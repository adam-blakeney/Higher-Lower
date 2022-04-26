// this selects random number and displays it/
public void new(){
let theNum = Math.floor(Math.random() * 50) + 1;
document.getElementById("numberQ").innerHTML = theNum;
}

function nextQ(){
    let theNext = Math.floor(Math.random() * 50) + 1;
    document.getElementById("numberQ").innerHTML = theNext;
}



function displayQuestion(numberQ){
document.getElementById(numberQ).innerHTML = theNum;
}
