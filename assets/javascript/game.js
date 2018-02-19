var compRandom = Math.floor(Math.random() * 27);
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var computerLetter = letters[compRandom].toLowerCase();
console.log("Computer letter " + computerLetter);




var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alreadyGuessed = [];



function newLetter() {

    compRandom = Math.floor(Math.random() * 27);

    computerLetter = letters[compRandom].toLowerCase();
    console.log("Computer letter " + computerLetter);

}






document.onkeyup = function(event) {
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


    if (guessesLeft > 1) {

        if (userChoice == computerLetter) {
            wins = wins + 1;
            alreadyGuessed = [];
            guessesLeft = 10;
            newLetter();
            console.log("NewComputerLetter " + computerLetter);
        }
        else {
            alreadyGuessed.push(userChoice);
            guessesLeft = guessesLeft - 1;
        }
    }
    else {
        losses++;
        guessesLeft = 10;
        alreadyGuessed = [];
        newLetter();
    }


    console.log(alreadyGuessed);




    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("alreadyGuessed").innerHTML = "Your Guesses so far: " + alreadyGuessed;


}

