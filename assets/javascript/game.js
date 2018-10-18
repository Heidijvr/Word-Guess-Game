var lettersArray = [];
var allWords = ["Pluto", "Eeyore", "Spiderman", "Scrooge", "Homer", "Dopey", "Superman", "Stitch", "Animaniacs", "Popeye", "PorkyPig", "Cinderella", "Bart", "Goofy", "SpeedyGonzales"];
var currentWord = "";
 
// Choose a random element from the array
var getRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
}

document.onkeyup = function(event) {
  // Captures the key press, and saves it to a variable.
  var letter = event.key;

  console.log(letter);
  lettersArray.push(letter);
  document.getElementById("lettersGuessed").innerHTML = lettersArray.join(" ");
};

$(document).ready(function(){ 
  currentWord = getRandomWord(allWords);
  console.log(currentWord);
  document.getElementById("wordToGuess").innerHTML = currentWord;
 }) 

