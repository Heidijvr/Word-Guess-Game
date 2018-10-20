var lettersArray = [];
var allWords = ["Pluto", "Eeyore", "Spiderman", "Scrooge", "Homer", "Dopey", "Superman", "Stitch", "Animaniacs", "Popeye", "Pikachu", "Cinderella", "Bart", "Goofy", "Joker"];
var currentWord = "";
var winCount = 0;
var lossCount = 0;
var correctGuesses;
var triesLeft;
var displayedLetters; 
// Choose a random element from the array
var getRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
}

document.onkeyup = function(event) {
  var letter = event.key.toLowerCase();
  console.log(letter);

  var found = false;
  for (var i = 0; i < lettersArray.length; i++) {
      if (letter === lettersArray[i]) {
         found = true;
      }
      // console.log("Index:", i, ", Value:", lettersArray[i], "Found:", found);
  }

  if (!found) {
    lettersArray.push(letter);

    var matchFound = false;
    for (var i = 0; i < currentWord.length; i++) {
      if (letter === currentWord.charAt(i).toLowerCase()) {
        matchFound = true;
        console.log("Yay!!")
        displayedLetters[i] = currentWord.charAt(i);
        correctGuesses++;
      } else {
        console.log("Oh no!")
      }
    }
     
    if (!matchFound) {
      triesLeft--;
    } 

    if (triesLeft === 0) {
      // player lost 
      lossCount++;
      resetGame();
    } 

    if (correctGuesses === currentWord.length) {
      //player won
      winCount++;
      resetGame();
    }
  }

    
  displayState();
  document.getElementById("lettersGuessed").innerHTML = lettersArray.join(" "); 
};

$(document).ready(function(){ 
  resetGame(); 
 }) 

var resetGame = function() {
  triesLeft = 12; 
  currentWord = getRandomWord(allWords);
  displayedLetters = "_".repeat(currentWord.length).split("");
  lettersArray = [];
  correctGuesses  = 0;
  displayState();
  console.log(currentWord); 
};

var displayState = function() {
  document.getElementById("wins").innerHTML = winCount;
  document.getElementById("losses").innerHTML = lossCount;
  document.getElementById("tries").innerHTML = triesLeft;
  document.getElementById("wordToGuess").innerHTML = currentWord;
  document.getElementById("letterOptions").innerHTML = displayedLetters.join(" ");
};





