var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
var patternIndex = 0;

// Was set to click before, but that doesn't work on touch screens
// $(document).mouseup(function (event) {
// $('.game-area').mouseup(function (event) {
//   event.stopPropagation();
//   startGame();
//   // if (!started) {
//   //   started = true;
//   //   nextSequence();
//   // }
// });

$('.btn').click(function () {
  if (started) {
    button = $(this);
    buttonPressed(button);
    playSound(button);
    animatePress(button);
    checkAnswer(button);
  }
});

function startGame() {
  if (!started) {
    started = true;
    nextSequence();
  }
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColor = buttonColours[randomNumber];

  gamePattern.push(buttonColor);
  level++;
  $('#level-title').text('Level ' + level);

  button = $('.' + buttonColor);
  playSound(button);
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
    patternIndex = 0;
    setTimeout(nextSequence, 1000);
  }
}

function gameOver() {
  gameOverSoundAndAnimation();
  highScoreEntry(level);
  showGameOverScreen(level);
  // resetGame(); //need to moved to be done on a button press
}

function gameOverSoundAndAnimation() {
  // $('level-title').text('Game Over, Press Any Key to Restart');
  new Audio('sounds/wrong.mp3').play();
  animateGameOver();
}

function highScoreEntry(score) {
  if (!isHighScore(score)) return;

  openHighScoreEntry();
}

function resetGame() {
  started = false;
  patternIndex = 0;
  level = 0;
  gamePattern = [];
}

function animateSound(button) {
  button
    .animate(
      {
        opacity: '50%',
      },
      'fast'
    )
    .animate(
      {
        opacity: '100%',
      },
      'fast'
    );
}

function animatePress(button) {
  button.addClass('pressed');

  setTimeout(function () {
    button.removeClass('pressed');
  }, 100);
}

function animateGameOver() {
  $('body').addClass('game-over');

  setTimeout(function () {
    $('body').removeClass('game-over');
  }, 250);
}

function playSound(button) {
  new Audio('sounds\\' + button.attr('id') + '.mp3').play();
}

function buttonPressed(button) {
  userChosenColor = button.attr('id');
  userClickedPattern.push(userChosenColor);
}
