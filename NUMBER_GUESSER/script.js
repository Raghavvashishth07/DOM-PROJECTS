let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sbt');
const userGuess = document.querySelector('.guessField');
const previous = document.querySelector('.guesss');
const remaining = document.querySelector('.lastguess');
const lowOrHi = document.querySelector('.low_or_high');
const startOver = document.querySelector('.startOver');

const p = document.createElement('p');

let previousGuess = [];
let numGuess = 1;
let playGame = true;

submit.addEventListener('click', function (e) {
    e.preventDefault();

    if (playGame) {
        const guess = Number(userGuess.value);
        isvalidguess(guess);
    }
});

function isvalidguess(guess) {
    if (isNaN(guess)) {
        alert('Your guess is not a valid number.');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100.');
    } else {
        previousGuess.push(guess);
        if (numGuess === 10) {
            displayguess(guess);
            displaymessage(`Game over! Random number was ${randomNumber}`);
            endGame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage(`You got it right, hurray!`);
        endGame();
    } else if (guess < randomNumber) {
        displaymessage(`Too low! Try again.`);
    } else {
        displaymessage(`Too high! Try again.`);
    }
}

function displayguess(guess) {
    userGuess.value = '';
    previous.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displaymessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userGuess.value = '';
    userGuess.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id='newGame' class="submit btn">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        numGuess = 1;
        previous.innerHTML = '';
        remaining.innerHTML = '10';
        lowOrHi.innerHTML = '';
        userGuess.removeAttribute('disabled');
        p.remove();
        playGame = true;
    });
}
