'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number :)';
// document.querySelector('.number').textContent = '$';
// document.querySelector('.guess').value = 24;
// // console.log(document.querySelector('.guess').value);

let score = 20;
let highScore = 0;

const secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    // when there is no input

    if (! guess) {
        document.querySelector('.message').textContent = 'no number';
        // when the player wins the game
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // when the number is too high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'TOO High ' : 'TOO Low';
            score--;
            document.querySelector('.score').textContent = score;

            // when the player lose the game
        } else {
            document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
        }
        // when the score is too low
    }

})


// Function of again button

document.querySelector('.again').addEventListener('click', function () {
    let score = 20;
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';

})
