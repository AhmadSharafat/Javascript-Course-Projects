"use strict";
// Selecting Element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const dicEl = document.querySelector(".dice");
const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
dicEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
// Buttons Functionality
btnroll.addEventListener("click", function () {
  if (playing) {
    // 1.Generating random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display a dice
    dicEl.classList.remove("hidden");
    dicEl.src = `dice-${dice}.png`;
    // Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score

      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch the player
      switchPlayer();
    }
  }
});

btnhold.addEventListener("click", function () {
  if (playing) {
    //1. Add current score to acive player's score
    scores[activePlayer] += currentScore;
    // scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2 too End the game
    if (scores[activePlayer] >= 20) {
      dicEl.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnnew.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  dicEl.classList.add("hidden");
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
});
