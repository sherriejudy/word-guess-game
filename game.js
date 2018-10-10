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
var underscore = [];
console.log(chosen);
console.log(words[random]);
//create underscores based on length of word
let generateUnderscore = () => {
  for (let i = 0; i < chosen.length; i++) {
    underscore.push("_");
  }
  return underscore;
};

//get users guess
document.addEventListener("keypress", event => {
  var keyWord = String.fromCharCode(event.keyCode);
});

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
