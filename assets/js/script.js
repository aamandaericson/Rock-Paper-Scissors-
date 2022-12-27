//variables 

const userChoiceDisplay = document.getElementById('your-choice')
const cpuChoiceDisplay = document.getElementById('cpu-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.getElementsByClassName('button')
const cpuImg = document.getElementById('cpu-image')

let userChoice;
let cpuChoice;

 /*Wait for the DOM to finnish loading before start. Get the button elements by class name and add event listeners to them.
 Display user choice */

document.addEventListener("DOMContentLoaded", init());

function init() {
    for (let possibleChoice of possibleChoices) {
        possibleChoice.addEventListener("click", function() {
            userChoice = this.getAttribute("data-type"); 
            userChoiceDisplay.innerHTML = userChoice;
            generateCpuChoice()
            getResult()
            });
        };
    };

/**
 * Generate computerscore and add corresponding image with alt value.
 */
function generateCpuChoice() {

    const randomNumber = Math.floor(Math.random() * 3) + 1; 

    if (randomNumber === 1) {
        cpuChoice = 'rock'
        cpuImg.src = 'assets/images/rock.jpg'
        cpuImg.alt = 'Person making a rock with their hand'
    }

    if (randomNumber === 2) {
        cpuChoice = 'paper'
        cpuImg.src = 'assets/images/paper.jpg'
        cpuImg.alt = 'Person making a paper with their hand'
    }

    if (randomNumber === 3) {
        cpuChoice = 'scissors'
        cpuImg.src = 'assets/images/scissors.jpg'
        cpuImg.alt = 'Person making a scissor with their hand'
    }

    cpuChoiceDisplay.innerHTML = cpuChoice;

}

/**
 * Get results in different game scenarios
 * and display round result
 */
function getResult() {

    if (cpuChoice === userChoice) {
        result = 'Draw!'
    } else if (cpuChoice === 'rock' && userChoice ==='paper') {
        result = 'Paper beats rock! You get a point!'
    } else if (cpuChoice === 'rock' && userChoice ==='scissors') {
        result = 'Rock beats scissors! Computer get a point!'
    } else if (cpuChoice === 'paper' && userChoice ==='scissors') {
        result = 'Scissors beats paper! You get a point!'
    } else if (cpuChoice === 'paper' && userChoice ==='rock') {
        result = 'Paper beats rock! Computer get a point!'
    } else if (cpuChoice === 'scissors' && userChoice ==='rock') {
        result = 'Rock beats scissors! You get a point!'
    } else if (cpuChoice === 'scissors' && userChoice ==='paper') {
        result = 'scissors beats paper! Computer get a point!'
    } else {
        alert(`Choose Rock, Paper or scissors!`);
        throw `unidentified choice`;
    }

    resultDisplay.innerHTML = result  

} 





