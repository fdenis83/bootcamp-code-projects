const wordList = ['squirtle','bulbasaur','charmander'];

var word = {
    letterChoice: [],
    wordChoice: "",
    win: 0,
    guess: 10
}

var letterBlanks = document.getElementById('letterBlanks');
var pressAnyKey = document.getElementById('pressAnyKey');
var numWin = document.getElementById('numWin');
var remainingGuess = document.getElementById('remainingGuess');
var guessedLetters = document.getElementById('guessedLetters');

//======== code ===========//

reset();
remainingGuess.textContent = "You have " + word.guess + " guesses remaining";
numWin.textContent = word.win + " wins";


word.wordChoice = randomChoice(wordList);
console.log(word.wordChoice);
letterBlanks.textContent = createGuess(word.wordChoice).join(" ");

document.addEventListener("keyup", function(event){
    word.guess--;
    remainingGuess.textContent = "You have " + word.guess + " guesses remaining"; 
    chooseLetter(event);   
    winLose();
});


//==============Functions ==============//

//== randomly chooses word from list
function randomChoice(list){
    return list[Math.floor(Math.random()*list.length)];
}

//== creates blanks for random word
function createGuess(word){
    var arr = [];
    for (let i = 0; i < word.length; i++) {
        arr.push('_')
    }
    return arr;
}

// replaces blanks for letter choice
function chooseLetter(letter){
    var newWord = []; //Correct word guess array
    var wordBlanks = letterBlanks.textContent; //displayed word blanks

    //turns word blanks into individual values in the array
    newWord = wordBlanks.split(' '); 
    var x = letter.key; //transfers the letter to X

    // check to see if letter (X) is located in the word
    //if - replaces blanks with correct letter in "newWord"
    //else - adds letters to wrong guess
    if(word.wordChoice.indexOf(x) >= 0){        

        //loops through word index
        for (let i = 0; i < word.wordChoice.length; i++) {

            //Indexs (i) the word for the letter(x)
            if(word.wordChoice[i] === x){

                //places the letter(x) into correct position(i) within the new array
                newWord[i] = x;
            }
        }

        //converts the newWord array back to a string (like permanent save) and displays it on the screen
        letterBlanks.textContent = newWord.join(' ');

    }else{
        word.letterChoice.push(x);
        guessedLetters.textContent = word.letterChoice.join(" ");
    }

}

//== lets you know if you win or lose
function winLose(){
    if(word.guess <= 0){
        console.log("you lose");
        reset();
    }else if((word.guess > 0) && (letterBlanks.textContent.indexOf('_') < 0)){
        console.log('you win');
        word.win++;
        numWin.textContent = word.win + " wins";
        reset();
    }
}
 
//==resets the game
function reset() {
    word.guess = 10;
    word.wordChoice = randomChoice(wordList);
    letterBlanks.textContent = createGuess(word.wordChoice).join(" ");
    guessedLetters.textContent = [];
}