/*
alert("Ladies and gentlemen!...");
alert("Come one, come all. Now featuring, the one and only...");
alert("The amazing, the spectacular...");
alert("MADAME ESMERALDA!!!!!!!");
*/

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 10; // You are given 10 guesses
var guessedLetters = ""; 


// Available letter choices
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// This function is run whenever the player presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var playerGuess = event.key;

    // Computer randomly selects a letter.
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];


    // Function runs if player guesses computer guess.
    if ((playerGuess === computerGuess) && (computerGuess === playerGuess)) {
        wins++;
    }
        alert("You chose: " + playerGuess + ". Madame Esmeralda chose: " + computerGuess + ". You're better than I thought!");
    
    // Function runs if player does NOT guess computer guess.
    if (playerGuess !== computerGuess) {
        losses++;
    }
        alert("You chose: " + playerGuess + ". Madame Esmeralda chose: " + computerGuess + ". Ow, try again!");
};  


var updateGuesses = function() {
  // List of previous guesses separated by commas.
  document.querySelector("#pastGuess").innerHTML =
    "Your Guesses so far: " + guessedLetters.join(", ");
};


/*

// When the user presses a key, it will run the following function.
document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === computerGuess) {
        wins++;
    } else {
        guesses--;
    }

    if (guesses = 0) {
        losses++
    }


    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
}

*/
