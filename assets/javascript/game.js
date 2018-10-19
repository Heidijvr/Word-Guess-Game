var lettersArray = [];
var allWords = ["Pluto", "Eeyore", "Spiderman", "Scrooge", "Homer", "Dopey", "Superman", "Stitch", "Animaniacs", "Popeye", "PorkyPig", "Cinderella", "Bart", "Goofy", "SpeedyGonzales"];
var currentWord = "";
var winCount = 0;
var lossCount = 10;
 
// Choose a random element from the array
var getRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
}

document.onkeyup = function(event) {
  winCount = winCount + 1;
  lossCount = lossCount - 1;
  displayScore();  
};

$(document).ready(function(){ 
  currentWord = getRandomWord(allWords);
  console.log(currentWord);
  document.getElementById("wordToGuess").innerHTML = currentWord;
  displayScore();

  
 }) 

var displayScore = function() {
  document.getElementById("wins").innerHTML = winCount;
  document.getElementById("losses").innerHTML = lossCount;
};

var bangmaak = function(naam) {
  console.log("Boo " + naam);
};

