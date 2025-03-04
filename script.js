const words = ["apple", "grape", "peach", "mango", "berry", "lemon", "melon", "plumb", "cherry", "guava", "aback", "abaft", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abler", "abode", "about", "above", "abuse", "abyss", "ached", "aches", "acids", "acorn", "acres", "acrid", "acted", "actor", "acute", "adage", "adapt", "added", "adder", "adept", "adieu", "admit", "adobe", "adopt", "adore", "adorn", "adult", "aegis", "aeons", "affix", "afire", "afoot", "after", "again", "agape", "agate", "agent", "agile", "aging", "aglow", "agony", "agree"];
let selectedWord = '';
let guessedLetters = [];
let wrongLetters = [];
let maxAttempts = 6;


function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongLetters = [];
    document.getElementById('wordDisplay').innerHTML = '_ '.repeat(selectedWord.length);
    document.getElementById('wrongLetters').innerHTML = '';
    document.getElementById('message').innerHTML = '';
    document.getElementById('letterInput').value = '';
    document.getElementById('restartButton').classList.add('hidden');
}

function updateDisplay() {
    const wordDisplay = selectedWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
    document.getElementById('wordDisplay').innerHTML = wordDisplay;

    if (wrongLetters.length > 0) {
        document.getElementById('wrongLetters').innerHTML = `Wrong letters: ${wrongLetters.join(', ')}`;
    }

    if (wrongLetters.length >= maxAttempts) {
        document.getElementById('message').innerHTML = `Game Over! The word was "${selectedWord}".`;
        document.getElementById('restartButton').classList.remove('hidden');
    } else if (!wordDisplay.includes('_')) {
        document.getElementById('message').innerHTML = 'Congratulations! You guessed the word!';
        document.getElementById('restartButton').classList.remove('hidden');
    }
}

document.getElementById('guessButton').addEventListener('click', () => {
    const letterInput = document.getElementById('letterInput');
    const letter = letterInput.value.toLowerCase();

    // Check if the input is a single letter and not already guessed
    if (letter && letter.length === 1 && !guessedLetters.includes(letter) && !wrongLetters.includes(letter)) {
        if (selectedWord.includes(letter)) {
            guessedLetters.push(letter);
        } else {
            wrongLetters.push(letter);
        }
        updateDisplay();
    }

    letterInput.value = '';
});

document.getElementById('restartButton').addEventListener('click', startGame);

// Start the game for the first time
startGame();