const wordList = ['squirtle','bulbasaur','charmander'];

var guessedLetters = [];
var computerGuess;
var win = 0;
var guess = 0;

var letterBlanks = document.getElementById('letterBlanks');
var pressAnyKey = document.getElementById('pressAnyKey');
var numWin = document.getElementById('numWin');
var remainingGuess = document.getElementById('remainingGuess');
var guessedLetters = document.getElementById('guessedLetters');

computerGuess = randomChoice(wordList);

letterBlanks.textContent = createGuess(computerGuess).join(" ");

createGuess(computerGuess);
function randomChoice(list){
    return list[Math.floor(Math.random()*list.length)]
}

function createGuess(word){
    var arr = [];
    for (let i = 0; i < word.length; i++) {
        arr.push('_')
    }
    return arr;
}