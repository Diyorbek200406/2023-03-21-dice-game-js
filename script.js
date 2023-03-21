// Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
// Buttons

// dice img
const diceImg = document.querySelector(".dice");
diceImg.style.display = "none";
// dice img

// variables
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

// function variables

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};
// function variables

// variables

// events start
btnRoll.addEventListener("click", () => {
  if (gameOver) {
    diceImg.style.display = "block";
    //   Math.floor(Math.random() * ( max - min + 1 ) + 1) random son formulasi
    const random = Math.floor(Math.random() * 6 + 1);
    diceImg.src = `./dice-${random}.png`;

    if (random !== 1) {
      currentScore += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// events end

// hold btn score start

btnHold.addEventListener("click", () => {
  if (gameOver) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      // winner game end

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      gameOver = false;
    } else {
      switchPlayer();
    }
  }
});

// hold btn score end

// new game btn

btnNew.addEventListener("click", () => {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  gameOver = true;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
});
// new game btn

// topshiriq muvofaqquyatli bajarildi
