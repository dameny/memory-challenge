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

function setNewHighScore(score) {
  const name = $('#name').val();
  checkAndSetHighScore(score, name);
  closeHighScoreEntry();
  openHighScore();
}

function goToGame() {
  closeMainMenu();
  // should add a slight delay before the start
  startGame();
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
