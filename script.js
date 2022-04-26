const computerChoiceDisplay = document.getElementById( 'computer-choice' );
const userChoiceDisplay = document.getElementById( 'user-choice' );
const resultDisplay = document.getElementById( 'result' );
const possibleChoices = document.querySelectorAll( 'button' );
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  }));

//stop video at 11:00, got hung up by a stupid grammer mistake!

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 //or can use possibleChoices.length
  
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
    if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
    if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice    //This Displays on screen comp choice
  // console.log(randomNumber);
};

//This is where we get & display the reuslts 
function getResult(){
  if (computerChoice === userChoice){
    result = 'its a draw!'
  }
  
  if (computerChoice === 'rock' && userChoice === 'scissors'){
    result = 'you lost!'
  }
     if (computerChoice === 'rock' && userChoice === 'paper'){
    result = 'you win!'
  }
   if (computerChoice === 'paper' && userChoice === 'scissors'){
    result = 'you win!'
  }
     if (computerChoice === 'paper' && userChoice === 'rock'){
    result = 'you lose!'
  }
     if (computerChoice === 'scissors' && userChoice === 'rock'){
    result = 'you win!'
  }
     if (computerChoice === 'scissors' && userChoice === 'paper'){
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
  // if (computerChoice > userChoice){
  //   result = 'its a draw'
  // }
}
