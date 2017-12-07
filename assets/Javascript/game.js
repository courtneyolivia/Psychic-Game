document.write("Guess what letter I'm thinking of <br/><br/>");
document.write("Wins:<br/><br/>");
document.write("Losses:<br/><br/>");
document.write("Guesses Left:<br/><br/>");
document.write("Your Guesses So Far:<br/><br/>");




var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerGuess)



// When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
var userGuess = event.key;

if(userGuess === computerGuess){
    wins++;
}else{
    guesses--;
}

if(guesses = 0){
    losses++
}
  

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "losses: " + losses;
document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
}