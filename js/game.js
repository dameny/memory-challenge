var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var started = false;
var score = 0;
var patternIndex = 0;

$('.btn').click(function () {
  if (started) {
    const button = $(this);
    playButtonSound(button);
    animatePress(button);
    checkAnswer(button);
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColor = buttonColours[randomNumber];

  gamePattern.push(buttonColor);

  button = $('.' + buttonColor);
  playButtonSound(button);
  animateSound(button);
}

function checkAnswer(button) {
  userAnswer = button.attr('id');
  if (patternIndex < gamePattern.length) {
    if (userAnswer === gamePattern[patternIndex]) {
      patternIndex++;
    } else {
      gameOver();
      return;
    }
  }

  if (patternIndex >= gamePattern.length) {
    score++;
    updateScore(score);
    patternIndex = 0;
    setTimeout(nextSequence, 1000);
  }
}

function startGame() {
  if (!started) {
    started = true;
    nextSequence();
  }
}

function gameOver() {
  started = false;
  playGameOverSound();
  animateGameOver();
  highScoreEntry(score);
  showGameOverScreen(score);
}

function highScoreEntry(score) {
  if (!isHighScore(score)) return;

  openHighScoreEntry();
}

function resetGame() {
  patternIndex = 0;
  score = 0;
  gamePattern = [];
}
