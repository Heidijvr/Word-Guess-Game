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
var displayedWord = "_".repeat(word.length).split("");


guess = "l".toLowerCase();

var matches = 0;

for (var i = 0; i < word.length; i++) {
// alert(word[i]);
console.log(word[i])
if (word[i] == guess) {
    // alert("Ditsem!")
    console.log("Heita!")
    displayedWord[i] = guess;
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
"Pluto", "Eeyore", "Spiderman", "ScroogeMcDuck", "MightyMouse", "CharlieBrown", "HomerSimpson", "BettyBoop", "PowerPuffGirls", "FredFlintstone", "Dopey", "Superman", "LinusvanPelt", "Stitch", "Animaniacs", "Popeye", "PorkyPig", "WoodyWoodpecker", "BartSimpson", "Goofy", "SpeedyGonzales"];


// Grabbing Random Word
var getRandomWord = function(array) {
return array[Math.floor(Math.random() * array.length)];
}

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
