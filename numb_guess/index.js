let random_no = parseInt(Math.random() * 100 + 1);
console.log(random_no);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".rmng");
const low_hi = document.querySelector(".lowHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let PrevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
     if(guess > 100){
        alert('enter number less than 100');
        userInput.value = '';
     }
     else if(guess < 1){
        alert('enter number greater than 1');
        userInput.value = '';
     }
     else if(isNaN(guess)){
        alert('enter valid number ');
        userInput.value = '';
     }else{
        PrevGuess.push(guess)
        if(numGuess ===10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${random_no}`);
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
     }
}

function checkGuess(guess) {
  if(guess === random_no){
    displayMessage(`You Guessed it right`);
    endGame();
  }else if(guess < random_no){
    displayMessage(`number is low than value`);
    
  }
  else if(guess > random_no){
    displayMessage(`number is high than value`);
   
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML =`${11-numGuess} Guess remaining`
}

function displayMessage(message) {
  low_hi.innerHTML= `<h2>${message}</h2>`;
}

function endGame(message) {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
    startOver.appendChild(p)
    playGame =false;
    newGame(); 
}

function newGame() {
   const newGameButton =  document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(){
    window.location.reload();
  });
}

