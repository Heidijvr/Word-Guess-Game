var lettersArray = [];
var allWords = ["Pluto", "Eeyore", "Spiderman", "Scrooge", "Homer", "Dopey", "Superman", "Stitch", "Animaniacs", "Popeye", "PorkyPig", "Cinderella", "Bart", "Goofy", "SpeedyGonzales"];
var currentWord = "";
var winCount = 0;
var lossCount = 0;
var triesLeft = 12; 
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
      if  (letter === currentWord.charAt(i).toLowerCase()) {
        matchFound = true;
        console.log("Yay!!")
      } else {
        console.log("Oh no!")
      }
    }
     
    if (!matchFound) {
      triesLeft--;
    }

    if (triesLeft === 0) {
      // player lost //
      lossCount++;
      resetGame();
    } 
  }

    
  displayScore();
  document.getElementById("lettersGuessed").innerHTML = lettersArray.join(" "); 
};

$(document).ready(function(){ 
  resetGame(); 
 }) 

var resetGame = function() {
  triesLeft = 12; 
  currentWord = getRandomWord(allWords);
  lettersArray = [];
  displayScore();
  console.log(currentWord); 
};

var displayScore = function() {
  document.getElementById("wins").innerHTML = winCount;
  document.getElementById("losses").innerHTML = lossCount;
  document.getElementById("tries").innerHTML = triesLeft;
  document.getElementById("wordToGuess").innerHTML = currentWord;
};

var bangmaak = function(naam) {
  console.log("Boo " + naam);
};

