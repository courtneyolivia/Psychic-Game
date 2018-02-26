
alert("Ladies and gentlemen!...");
alert("Come one, come all. Now featuring, the one and only...");
alert("The amazing, the spectacular...");
alert("MADAME ESMERALDA!!!!!!!");


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
