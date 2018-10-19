var lettersArray = [];
var allWords = ["Pluto", "Eeyore", "Spiderman", "Scrooge", "Homer", "Dopey", "Superman", "Stitch", "Animaniacs", "Popeye", "PorkyPig", "Cinderella", "Bart", "Goofy", "SpeedyGonzales"];
var currentWord = "";
var winCount = 0;
var lossCount = 0;
 
// Choose a random element from the array
var getRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
}

document.onkeyup = function(event) {
  var letter = event.key;
  console.log(letter);

  var found = false;
  for (var i = 0; i < lettersArray.length; i++) {
      if (letter === lettersArray[i]) {
         found = true;
      }
      console.log("Index:", i, ", Value:", lettersArray[i], "Found:", found);
  }

  if (!found) {
    lettersArray.push(letter);
  }
  document.getElementById("lettersGuessed").innerHTML = lettersArray.join(" "); 
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

