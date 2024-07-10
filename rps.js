function getcomputerchoice(){
    const computerChoice =  Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return 'Rock';
      } else if (computerChoice === 1) {
        return 'Paper';
      } else {
        return 'Scissors';
      }
}

function gethumanchoice(){
    let humanChoice = prompt(`Please type "Rock", "Paper", or "Scissors".`);
    if (humanChoice.toLowerCase() === 'rock')
        return 'Rock';
    else if (humanChoice.toLowerCase() === 'paper')
        return 'Paper';
    else if (humanChoice.toLowerCase() === 'scissors')
        return 'Scissors';
    else {
        alert(
            `Invalid entry! Please enter a valid move - "Rock", "Paper, or "Scissors".`
        );
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        alert('You win! Paper beats Rock.');
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        alert('You win! Rock beats Scissors.');
    } 
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        alert('You win! Scissors beats Paper.');
    } 
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore++;
        alert('You lose! Paper beats Rock.');
    } 
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore++;
        alert('You lose! Rock beats Scissors.');
    } 
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore++;
        alert('You lose! Scissors beats Paper.');
    } 
    else {
        alert(`It's a draw!`);
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const humanSelection = gethumanchoice().toLowerCase();
      const computerSelection = getcomputerchoice().toLowerCase();
      playRound(humanSelection, computerSelection);
    }
  
    if (humanScore > computerScore) {
      alert('Congratulations! You won the game!');
    } else if (humanScore < computerScore) {
      alert('You lost. Try again.');
    } else {
      alert(`It's a draw!`);
    }
  }
  
  while (true) {
    playGame();
  }