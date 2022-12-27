//variables 

const userChoiceDisplay = document.getElementById('your-choice')
const cpuChoiceDisplay = document.getElementById('cpu-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.getElementsByClassName('button')
let userChoice;

 /*Wait for the DOM to finnish loading before start. Get the button elements by class name and add event listeners to them.
 Display user choice */

document.addEventListener("DOMContentLoaded", init());

function init() {
    for (let possibleChoice of possibleChoices) {
        possibleChoice.addEventListener("click", function() {
            userChoice = this.getAttribute("data-type"); 
            userChoiceDisplay.innerHTML = userChoice;
            });
        };
    };




