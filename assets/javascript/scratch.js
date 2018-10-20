// This file is to copy/paste useful snippets to reference. 
// NOT for use in project directly

document.onkeyup = function(event) {  
    var userGuess = event.key; 

function letterInput(event) {
    console.log(event.type);
    console.log(event.keyCode);
    console.log(String.fromCharCode(event.keyCode)); 
}

var textAreaElement = document.getElementsByTagName('textarea') [0];
    textAreaElement.addEventListener('keypress',eventHandler, false);
    textAreaElement.addEventListener('keydown',eventHandler, false);
    textAreaElement.addEventListener('keyup',eventHandler, false);

    // Alerts the key the user pressed (userGuess).
    alert("User guess: " + userGuess);
 
    // Alerts the Computer's guess.
    alert("Computer guess: " + computerGuess);        


var word = "poespas".toLowerCase().split("");
var displayedLetters = "_".repeat(word.length).split("");


guess = "l".toLowerCase();

var matches = 0;

for (var i = 0; i < word.length; i++) {
// alert(word[i]);
console.log(word[i])
if (word[i] == guess) {
    // alert("Ditsem!")
    console.log("Heita!")
    displayedLetters[i] = guess;
    matches++;
}
}

console.log(displayedWord.join(""));
console.log("Matches: " + matches );

var wins = 0
var lose = 0

var userChoice = document.getElemnetById("user-choice");
var userChoice = document.getElemnetById("cpu-choice");
var userChoice = document.getElemnetById("wins");
var userChoice = document.getElemnetById("lose");

let display = document.querySelector('.display');
let guessQuerySelector = document.querySelector('#character');
let textForm = document.querySelector('.textForm');

var commonWords = [
"Pluto", "Eeyore", "Spiderman", "Scrooge", "Homer", "Dopey", "Superman", "Stitch", "Animaniacs", "Popeye", "PorkyPig", "WoodyWoodpecker", "Bart", "Goofy", "SpeedyGonzales"];




var randomWord = getRandomWord(commonWords);
console.log('randomWord', randomWord);

// Function that submits the values
textForm.addEventListener('submit', function(event) {
event.preventDefault();

var counter = 10;
var triedCharacters = [];
var correctCharacters = [];

var guessWord = guessQuerySelector.value;
var shorterWordlength = randomWord.length > guessWord.length ? guessWord.length : randomWord.length;

console.log('guessWord', guessWord);

for (i = 0; i < shorterWordlength; i++) {
 if (guessWord[i] === randomWord[i]) {
   correctCharacters.push(guessWord[i])
   console.log("correct " + correctCharacters)
 } else {
   triedCharacters.push(guessWord[i])
   console.log("incorrect " + triedCharacters)
 }
}
randomWord = getRandomWord(commonWords);
console.log('randomWord', randomWord);




   // onkeypress="myFunction()"

   function myFunction(){
    // Press any key to get started
     return(onkeypress);
 } 
 
 
     //Array
 var wordGuesses = ["Pluto", "Eeyore", "Spiderman", "ScroogeMcDuck", "MightyMouse", "CharlieBrown", "HomerSimpson", "BettyBoop", "PowerPuffGirls", "FredFlintstone", "Dopey", "Superman", "LinusvanPelt", "Stitch", "Animaniacs", "Popeye", "PorkyPig", "WoodyWoodpecker", "BartSimpson", "Goofy", "SpeedyGonzales"];
 //pick random word
  
 
  for (i = 0; i < word.length; i++); {
     wordGuesses[i] = "_";
      console.log(i);
  }
 
  var word = words[Math.floor(Math.random() * words.length)];
 
  var remainingLetters = word.length;
 
  //game loop
 while (remainingLetters > 0) {
      alert(wordGuesses.join("_"))
 var guess = prompt ("Please enter a single letter");
 for (var j = 0; j < word.length; j++) {
     if (word[j] === guess) {
         wordGuesses[j] = guess;
         remainingLetters--;
     }
 }
 }
 alert (wordGuesses.join(""));
 alert ("The word was " + word)
 
 
 
 
 $(document).ready(function() {
      
 
 
 
   
     
     
 //getting the element
  document.getElementById("name_of_Id")  
    
 
 var wins = 0
 var lose = 0
 var wrongLetters = [];
 varCorrectLetters = [];
 varRepeatLetters = [];
 
 var userChoice = document.getElementById("wins");
 var userChoice = document.getElementById("losses");
 
  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
 
 // Determines which key was pressed.
 var userGuess = event.key;
 
 // Alerts the key the user pressed (userGuess).
 alert("User guess: " + userGuess);
 
 };
 
 
 
 
 
 document.onkeyup = function(event) {
     // Captures the key press, and saves it to a variable.
     var letter = event.key;
   };
 
   // Captures the key press, and saves it to a variable.
   var letter = event.key;

   console.log(letter);
   lettersArray.push(letter);
   document.getElementById("lettersGuessed").innerHTML = lettersArray.join(" ");

   <h1 class="red-text text-center">Cartoon Word Guess Game</h1>

    <h2 class="red-text text-center">Press any key to get started</h2>