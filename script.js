'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guses = Number(document.querySelector('.guess').value);
  console.log(guses, typeof guses);

  // when thereis no input
  if (!guses) {
    displaymessage('🛑 No Number');
  }
  // when player is win
  else if (guses === secretNumber) {
    displaymessage('🎉✨ Currect Number !!!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guses !== secretNumber) {
    if (score > 1) {
      displaymessage(guses > secretNumber ? ' 📈 Too High!' : ' 📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 🧨 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});
