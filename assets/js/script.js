//variables 

const userChoiceDisplay = document.getElementById('your-choice')
const cpuChoiceDisplay = document.getElementById('cpu-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.getElementsByClassName('button')

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
            });
        };
    };

    /**
     * Generate the computer choice and 
     */
function generateCpuChoice() {

    const randomNumber = Math.floor(Math.random() * 3) + 1; 

    if (randomNumber === 1) {
        cpuChoice = 'rock'
    }

    if (randomNumber === 2) {
        cpuChoice = 'paper'
    }

    if (randomNumber === 3) {
        cpuChoice = 'scissors'
    }
    cpuChoiceDisplay.innerHTML = cpuChoice;

}




