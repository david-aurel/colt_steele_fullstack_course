//create secret number
var secretNumber = 7;

//ask user for guess
var userGuess = Number(prompt("Guess a number"));

//check guess
if (userGuess === secretNumber) {
    alert("You got it right!");
} 

else if (userGuess < secretNumber) {
    alert("Too low");
}

else {
     alert("Too high");
}