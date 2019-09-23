var wordOptions = ["hoth", "luke", "anakin", "dagobah", "yoda", "jedi", "sith", "force", "midichlorians", "dooku", "palpatine", "clones", "lightsaber", "blaster", "chewbacca"]
var selectedWord = ""
var lettersinWord = []
var numBlanks = 0;
var blanksandSuccesses = []
var wrongLetters = []
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function StartGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;
    guessesLeft = 9;
    wrongLetters = [];
    blanksandSuccesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksandSuccesses.push("_")
    }

    document.getElementById("wordtoGuess").innerHTML = blanksandSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksandSuccesses);
}

function checkLetters(letter) {
    var isletterinWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isletterinWord = true;
        }
    }
    if (isletterinWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksandSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    console.log(blanksandSuccesses);

}

function finishRound() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
    if (lettersinWord.toString() == blanksandSuccesses.toString()) {
        winCount++;
        document.getElementById("result").innerHTML = "The Force is strong with you! You win!"
        document.getElementById("winCounter").innerHTML = winCount;
        StartGame();
    }
    else if (guessesLeft == 0) {
        lossCount++;
        document.getElementById("result").innerHTML = "You underestimate the power of the dark side! You Lose! :("
        document.getElementById("lossCounter").innerHTML = lossCount;
        StartGame();
    }
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordtoGuess").innerHTML = blanksandSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
}

StartGame();
document.onkeyup = function (event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(lettersGuessed);
    checkLetters(lettersGuessed);
    finishRound();

}