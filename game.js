//Global Variables
//////////////////////////////////////////////////////////////////////////////////
//array of words
var words = ["canada", "toronto", "beaver", "hockey", "french", "poutine"];
console.log(words[0]);
//array of alphabet letters
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
for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}
//choose words randomly
var random = Math.floor(Math.random() * words.length);
var chosen = words[random];
var wins = [];
var loses = [];
var underscore = [];

//dom manipulation
var docUnderscore = document.getElementsbyClassName("underscore");
var docWins = document.getElementsbyClassName("Wins");

//Main
////////////////////////////////////////////////////////////////////////////////

//create underscores based on length of word
let generateUnderscore = () => {
  for (let i = 0; i < chosen.length; i++) {
    underscore.push("_");
    docUnderscore[0].innerHTML = underscore.join("");
  }
  return underscore;
};

//get users guess
document.addEventListener("keypress", event => {
  var keyWord = String.fromCharCode(event.keyCode);
  //if user wins
  if (keyWord.indexOf(keyWord) > -1) {
    //add wins to array
    wins.push(keyWord);

    //replace underscore with right letter
    underscore[chosen.indexOf(keyWord)] = keyWord;
    docUnderscore[0].innerHTML = underscore.join(" ");
    docWins[0].innerHTML = wins.join("");
    //checks to see if user word matches guess
    if (underscore.join("") == chosen) {
      alert("you win");
    }
  } else {
    loses.push(keyWord);
    docLoses[0].innerHTML = loses;
  }
});

underscore();
//from the tutoring session
console.log(generateUnderscore());
var split = chosen.split("");
console.log(split);

function start() {
  var wordView = "";
  for (var i = 0; i < split.length; i++) {
    wordView += "_ ";
  }
  document.getElementById("word").innerHTML = wordView;
}
start();
