//variables 

const userChoiceDisplay = document.getElementById('your-choice');
const cpuChoiceDisplay = document.getElementById('cpu-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.getElementsByClassName('button');
const cpuImg = document.getElementById('cpu-image');
const playerImg = document.getElementById('player-image');
const resetButton = document.getElementById('reset');

let userChoice;
let cpuChoice;
let cpuScore;
let yourScore;
let result;
let yourNewScore = document.getElementById('your-score')
let cpuNewScore = document.getElementById('cpu-score')


 /*Wait for the DOM to finnish loading before start. Get the button elements by class name and add event listeners to them.
 Display user choice */

document.addEventListener("DOMContentLoaded", init());

function init() {
    for (let possibleChoice of possibleChoices) {
        addResetEvent();
        possibleChoice.addEventListener("click", function() {
            userChoice = this.getAttribute("data-type"); 
            userChoiceDisplay.innerHTML = userChoice;
            generateCpuChoice();
            getResult();
            });
        }
    }

// The base in the following function was taken from a youTube tutorial, full credit in README. 
/**
 * Generate computerscore and add corresponding image with alt value.
 */
function generateCpuChoice() {

    const randomNumber = Math.floor(Math.random() * 3) + 1; 

    if (randomNumber === 1) {
        cpuChoice = 'rock';
        cpuImg.src = 'assets/images/rock.jpg';
        cpuImg.alt = 'rock';
    }
    if (randomNumber === 2) {
        cpuChoice = 'paper';
        cpuImg.src = 'assets/images/paper.jpg';
        cpuImg.alt = 'paper';
    }
    if (randomNumber === 3) {
        cpuChoice = 'scissors';
        cpuImg.src = 'assets/images/scissors.jpg';
        cpuImg.alt = 'scissors';
    }

    cpuChoiceDisplay.innerHTML = cpuChoice;
    showImage ();
}

/**
 * Get results in different game scenarios
 * and display round result
 */
function getResult() {

    if (cpuChoice === userChoice) {
        result = 'Draw!';
    } else if (cpuChoice === 'rock' && userChoice ==='paper') {
        result = 'Paper beats rock! You get a point!';
        incrementScore();
    } else if (cpuChoice === 'rock' && userChoice ==='scissors') {
        result = 'Rock beats scissors! Computer get a point!';
        incrementComputerScore();
    } else if (cpuChoice === 'paper' && userChoice ==='scissors') {
        result = 'Scissors beats paper! You get a point!';
        incrementScore();
    } else if (cpuChoice === 'paper' && userChoice ==='rock') {
        result = 'Paper beats rock! Computer get a point!';
        incrementComputerScore();
    } else if (cpuChoice === 'scissors' && userChoice ==='rock') {
        result = 'Rock beats scissors! You get a point!';
        incrementScore();
    } else if (cpuChoice === 'scissors' && userChoice ==='paper') {
        result = 'scissors beats paper! Computer get a point!';
        incrementComputerScore();
    } else {
        alert(`Choose Rock, Paper or scissors!`);
        throw `unidentified choice`;
    }
    resultDisplay.innerHTML = result;
    showImage();
} 

/**
 * Display user image depending on userchoice
 */
function showImage(){
    if (userChoice === 'rock') {
        playerImg.src = `assets/images/rock.jpg`;
        playerImg.alt = `rock`;
    } else if (userChoice === 'paper') {
        playerImg.src = `assets/images/paper.jpg`;
        playerImg.alt = `paper`;
    } else {
        playerImg.src = `assets/images/scissors.jpg`;
        playerImg.alt = `scissors`;
    }
}

/**
 * Increment current score and set it to a maximum of 5 points.
 */
function incrementScore() {
    if (cpuNewScore.innerText < 5 && yourNewScore.innerText < 5) {
        yourScore = parseInt(document.getElementById('your-score').innerText);
        yourNewScore.innerText = ++yourScore;
    }
    if (yourNewScore.innerText == 5) {
        alert('YOU WON! Click ok to restart the game');
        cpuScore = 0;
        yourScore = 0;
        cpuNewScore.innerText = 0;
        yourNewScore.innerText = 0;
    }
}

/**
 * Increment current score and set it to a maximum of 5 points.
 */
function incrementComputerScore() {
    if (cpuNewScore.innerText < 5 && yourNewScore.innerText < 5) {
        cpuScore = parseInt(document.getElementById('cpu-score').innerText);
        cpuNewScore.innerText = ++cpuScore;
    }
    if (cpuNewScore.innerText == 5) {
        alert('YOU LOSE Click ok to restart the game');
        cpuScore = 0;
        yourScore = 0;
        cpuNewScore.innerText = 0;
        yourNewScore.innerText = 0;
    }
}

/**
  * Add event listener to reset button and sets computer and user score to 0. Resets the game.
  */

function addResetEvent() {
    resetButton.addEventListener('click', function(){
    cpuScore = 0;
    yourScore = 0;
    cpuNewScore.innerText = 0;
    yourNewScore.innerText = 0;
    });
}





