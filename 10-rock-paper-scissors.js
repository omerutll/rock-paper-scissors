let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

  updateScoreElement();

let result = ''

function playGame(playerMove) {
  let computerChoice = pickComputerChoice()

  if (playerMove==='scissors') {  
    if (computerChoice === 'rock') {
      result = 'You lose'
    }
    else if (computerChoice === 'paper') {
      result = 'You win'
    }
    else if (computerChoice === 'scissors') {
      result = 'Tie'
    }
  }   
  else if (playerMove==='paper') {

  if (computerChoice === 'rock') {
    result = 'You win'
  }
  else if (computerChoice === 'paper') {
    result = 'Tie'
  }
  else if (computerChoice === 'scissors') {
    result = 'You lose'
   }
  } 
  else if (playerMove==='rock') {
    if (computerChoice === 'rock') {
    result = 'Tie'
  }
  else if (computerChoice === 'paper') {
    result = 'You lose'
  }
  else if (computerChoice === 'scissors') {
    result = 'You win'
  }
  }

  if (result === 'You win') {
    score.wins+=1
  }
  if (result === 'Tie') {
    score.ties+=1
  }
  if (result === 'You lose') {
    score.losses+=1
  }

  localStorage.setItem('score', JSON.stringify(score));

  
  function updateMovesElement (playerMove) {
    if (playerMove === 'rock') {
      playerMoveIMG = '<img class="move-img" src="icons/rock-emoji.png">';
    }
    else if(playerMove==='scissors') {
      playerMoveIMG = '<img class=move-img src="icons/scissors-emoji.png">';
    } 
    else if(playerMove==='paper') {
      playerMoveIMG = '<img class="move-img" src="icons/paper-emoji.png">';
    }

    if (computerChoice === 'rock') {
      computerChoice = '<img class="move-img" src="icons/rock-emoji.png">';
    }
    else if(computerChoice==='scissors') {
      computerChoice = '<img class=move-img src="icons/scissors-emoji.png">';
    } 
    else if(computerChoice==='paper') {
      computerChoice = '<img class="move-img" src="icons/paper-emoji.png">';
    }
    
    document.querySelector('.js-moves').innerHTML = `You ${playerMoveIMG} - ${computerChoice} Computer`
  };

  updateResultElement();
  updateMovesElement(playerMove);
  updateScoreElement();
}

function updateResultElement () {
  document.querySelector('.js-result').innerHTML = `${result}`;
}


function updateScoreElement() {   
  document.querySelector('.js-score')
  .innerHTML = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
}

function  pickComputerChoice() {
  const randomNumber = Math.random();
  let computerChoice ='';

    if (randomNumber >= 0 && randomNumber < 1/3) {
      computerChoice = 'rock';
    }
    else if (randomNumber >=1/3 && randomNumber < 2/3) {
      computerChoice = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
      computerChoice = 'scissors';
    }
    return computerChoice;
 }
