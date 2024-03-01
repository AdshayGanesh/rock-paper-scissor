let score = JSON.parse(localStorage.getItem
  ('score')) ||  {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updatePageScore();

  function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove ='';
    
  
    if(randomNumber >=0 && randomNumber < 1/3){
      computerMove='rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove='paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
      computerMove='scissors';
    }

    return computerMove;
  }

  function finalMove(userMove){
    
    let result ='';
    const computerMove = pickComputerMove();

    if(userMove === 'rock'){
      
      if(computerMove === 'rock'){
        result='Tie.';
      }
      else if(computerMove === 'paper'){
        result='You lose.';
      }
      else if(computerMove === 'scissors'){
        result='You win.';
      }
    }

    else if(userMove === 'paper'){

        if(computerMove === 'rock'){
        result='You win.';
      }
      else if(computerMove === 'paper'){
        result='Tie.';
      }
      else if(computerMove === 'scissors'){
        result='You lose.';
      }
    }
      
    else if(userMove === 'scissors'){
      
        if(computerMove === 'rock'){
        result='You lose.';
      }
      else if(computerMove === 'paper'){
        result='You win.';
      }
      else if(computerMove === 'scissors'){
        result='Tie.';
      }
    }

    if(result === 'You win.'){
        score.wins += 1;
      }
      else if(result === 'You lose.'){
        score.losses += 1;
      }
      else if(result === 'Tie.'){
        score.ties += 1;
      }

        document.querySelector('.js-moves')
          .innerHTML = `You <img src="Images/${userMove}-emoji.png" class="js-moves-result"> <img src="Images/${computerMove}-emoji.png" class="js-moves-result"> Computer`;

      
        document.querySelector('.js-result')
        .innerHTML = result;

      function updatePageScore(){

        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;

        }
      
      localStorage.setItem('score', JSON.stringify(score));

      updatePageScore();


      }
