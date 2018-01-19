var monsters = ["dracula", "wolfman", "frankenstein", "pennywise", "gremlins", "pumpkinhead", "blob", "critters", "imhotep", "brundlefly", "pinhead", "gillman"];
var selectedWord = "";
var wordLetters = [];
var blankSpace = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winsCo = 0;
var lossesCo = 0;
var guessLeft = 9;

function startGame () {
    selectedWord = monsters[Math.floor(Math.random() * monsters.length)];
    wordLetters = selectedWord.split("");
    blankSpace = wordLetters.length;

    guessLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < blankSpace; i++){
        blanksAndSuccesses.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("wins").innerHTML = winsCo;
    document.getElementById("losses").innerHTML = lossesCo;

    console.log(selectedWord);
    console.log(wordLetters);
    console.log(blankSpace);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {

    var isWordLetters = false;
    for (var i = 0; i < blankSpace; i++){
        if(selectedWord[i] == letter) {
            isWordLetters = true;
        }
    }

    if(isWordLetters) {
        for (var i=0; i<blankSpace; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    } 

    else {
        wrongLetters.push(letter);
        guessLeft--
    }

    console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Wins: " + winsCo + " | Losses: " + lossesCo + " | Guesses Left: " + guessLeft);

    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");
    
    if (wordLetters.toString() == blanksAndSuccesses.toString()) {
        winsCo++;
        alert("Yay! You guessed the monster! You win!");

        document.getElementById("wins").innerHTML = winsCo;
       

        startGame();
    }

    else if (guessLeft == 0 - 1) {
        lossesCo++;
        alert("Awww! The monster got you! You lose...");

        document.getElementById("losses").innerHTML = lossesCo;

        startGame();
    }
    
}

startGame();


document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    
    console.log(letterGuessed);
}