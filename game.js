//Global Variables
//////////////////////////////////////////////////////////////////////////////////
var words = ["canada", "toronto", "beaver", "hockey", "french", "poutine"];
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "_"
];
// Random is a random number from 0 - number of words
var random = 0;
// Chosen is the word at that random position (like a random word :))
var chosen = "";
var wins = 0;
var losses = 0;
var guessed = "";
//dom manipulation, this allows u to change stuff on the screen
var wordHTML = document.getElementById("word");
var winsHTML = document.getElementById("wins");
var guessesHTML = document.getElementById("guesses");

//Main////////////////////////////////////////////////////////////////////////////////

// This function starts off the game, it just selects a new word to play
function start() {
  // Reset the variables from previous games
  random = Math.floor(Math.random() * words.length);
  chosen = words[random];
  guessed = "";
  guessesHTML.innerHTML = "Guessed: " + guessed;

  var asterixedWord = "";

  console.log("The word is :" + chosen);

  // Iterates through the array of characters. Adds an asterix to asterixedWord each time.
  for (var i = 0; i < chosen.length; i++) {
    asterixedWord += "*";
  }
  // asterixedWord now has an asterix for each letter in the word
  // This line sets the element with the id "word" to display the asterixs
  wordHTML.innerHTML = asterixedWord;
}

//Every time the user presses a key, this gets triggered
document.addEventListener("keypress", event => {
  // letter is your actual keyboard key
  var letter = String.fromCharCode(event.keyCode);
  if (!guessed.includes(letter)) {
    // If the letter hasn't been guessed, add it to the guessed list
    guessed += letter + " ";
    // Add the letter to the screen
    guessesHTML.innerHTML = "Guessed: " + guessed;
    if (chosen.includes(letter)) {
      // If the word has the letter, replace the asterix with the letter
      var currentWord = wordHTML.innerHTML;
      var newWord = "";

      // This iterates through each letter in the chosen word
      // If the letter matches the guessed letter, stick the letter into the new word
      // Otherwise, use what was already there
      for (var i = 0; i < currentWord.length; i++) {
        if (chosen[i] == letter) {
          newWord += letter;
        } else {
          newWord += currentWord[i];
        }
      }
      wordHTML.innerHTML = newWord;

      if (!newWord.includes("*")) {
        // Player won! No more asterixs!
        // Add 1 to number of wins
        wins += 1;
        winsHTML.innerHTML = "Wins: " + wins;
        // This starts a new game
        start();
      }
    }
  } else {
    // Otherwise, if the letter has been guessed, do nothing
    // Return ends the function, nothing else will be called
    return;
  }
});

// Calling start actually starts everything
start();
