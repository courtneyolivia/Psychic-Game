
alert("Ladies and gentlemen!...");
alert("Come one, come all. Now featuring, the one and only...");
alert("The amazing, the spectacular...");
alert("MADAME ESMERALDA!!!!!!!");


<<<<<<< HEAD
// We're creating a list of three options for the letters
    var letters = ["a", "b", "c"];

    // This array will hold what we guess
    var guessedLetters = [];

    // This variable will be randomly assigned one of the three letters
    var letterToGuess = null;

    // This is what we'll use to count down
    var guessesLeft = 9;

    // This is the counter for wins/losses
    var wins = 0;
    var losses = 0;
=======
// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var ties = 0;
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
    for (var i = 1; i > 0; i--) {

        if ((playerGuess === computerGuess) && (computerGuess === playerGuess)) {
            wins++;
            guessLeft--;

            alert("You chose: " + playerGuess + ". Madame Esmeralda chose: " + computerGuess + ". You're better than I thought!");
        }

        // Function runs if player does NOT guess computer guess.
        else(playerGuess !== computerGuess) {
            losses++;
            guessLeft--;

            alert("You chose: " + playerGuess + ". Madame Esmeralda chose: " + computerGuess + ". Ow, try again!");
        }
    };

    var updateGuesses = function () {
        // List of previous guesses separated by commas.
        document.querySelector("#pastGuess").innerHTML =
            "Your Guesses so far: " + guessedLetters.join(", ");
    };


    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
};




>>>>>>> 502f53c581029aad3847f3977919ab67a354ed01

    // Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
    var updateGuessesLeft = function() {
      // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
      // (i.e. guessesLeft will get displayed in HTML)
      document.querySelector("#guesses-left").innerHTML = guessesLeft;
    };

    var updateLetterToGuess = function() {
      // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
      letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    };

<<<<<<< HEAD
    var updateGuessesSoFar = function() {
      // Here we take the guesses the user has tried -- then display it as letters separated by commas.
      document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
    };

    // Function will be called when we reset everything
    var reset = function() {
      guessesLeft = 9;
      guessedLetters = [];
      updateLetterToGuess();
      updateGuessesLeft();
      updateGuessesSoFar();
    };

    // Execute on page load.
    updateLetterToGuess();
    updateGuessesLeft();

    // This function will capture the keyboard clicks.
    document.onkeyup = function(event) {
      // It's going to reduce the guesses by one
      guessesLeft--;

      // Lowercase the letter
      var letter = String.fromCharCode(event.keyCode).toLowerCase();

      // Then add the guess to the guessedLetters array
      guessedLetters.push(letter);

      // Then its going to run the update functions
      updateGuessesLeft();
      updateGuessesSoFar();


      // We'll check if there's a match.
      if (letter === letterToGuess) {

        // If there is then we win and we'll update the HTML to display the win.
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        // Then we'll reset the game
        reset();
      }


      // If we are out of guesses...
      if (guessesLeft === 0) {

        // Then we will loss and we'll update the HTML to display the loss.
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        // Then we'll call the reset.
        reset();
      }
    };
=======





// For-loop to iterate through the letters array.
for (var i = 0; i < letters.length; i++) {

    // Variable named equal to $("<button>");
    var letterBtn = $("<button>");

    // Classes given to letterBtn.
    letterBtn.addClass("letter-button letter letter-button-color");

    // Data-attribute for letterBtn.
    letterBtn.attr("data-letter", letters[i]);
    letterBtn.text(letters[i]);

    // Appends each letterBtn to the "#buttons" div.
    $("#buttons").append(letterBtn);

}

// Set on-click event
$(".letter-button").on("click", function () {

    // Set the variable equal to a new div.
    var fridgeMagnet = $("<div>");

    // Classes given to fridgeMagnet.
    fridgeMagnet.addClass("letter fridge-color");

    fridgeMagnet.text($(this).attr("data-letter"));

    // Append the fridgeMagnet variable to the "#display" div.
    $("#display").append(fridgeMagnet);

});

// Be sure to test that your code works for this major task, before proceeding to the next one!

// MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
// =================================================================================

// On-click event attached to the "#clear" button id.
$("#clear").on("click", function () {

    // jQuery "empty()" method to clear the contents of the "#display" div.
    $("#display").empty();

});
>>>>>>> 502f53c581029aad3847f3977919ab67a354ed01
