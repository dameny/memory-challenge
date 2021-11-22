function dontPropagate(e) {
  e.stopPropagation();
}

function openMainMenu() {
  $('.intro').removeClass('hide-modal');
}

function closeMainMenu() {
  $('.intro').addClass('hide-modal');
}

function openHighScore() {
  const highScoreTable = getHighScoreTable();
  $('.high-score-div').append(highScoreTable);
  $('.high-score').removeClass('hide-modal');
}

function closeHighScore() {
  $('.high-score-table').remove();
  $('.high-score').addClass('hide-modal');
}

function openHighScoreEntry() {
  $('.high-score-entry').removeClass('hide-modal');
}

function closeHighScoreEntry() {
  $('.high-score-entry').addClass('hide-modal');
}

function openGameOver() {
  $('.game-over-modal').removeClass('hide-modal');
}

function closeGameOver() {
  $('.game-over-modal').addClass('hide-modal');
}

function showGameOverScreen(score) {
  openGameOver();
  $('#score').text(score);
}

function updateScore(score) {
  $('#level-title').text('Score ' + score);
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

function setNewHighScore(score) {
  const name = $('#name').val();
  checkAndSetHighScore(score, name);
  closeHighScoreEntry();
  openHighScore();
}

function goToGame() {
  closeMainMenu();
  setTimeout(startGame, 750);
}

function goToMainMenu() {
  resetGame();
  closeGameOver();
  openMainMenu();
}

function tryAgain() {
  resetGame();
  closeGameOver();
  startGame();
}
