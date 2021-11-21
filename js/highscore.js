function checkAndSetHighScore(score, name) {
  if (!isHighScore(score)) return;
  console.log('Score high enough');
  const highScores = getHighScores();
  highScores.push({
    name,
    score,
  });

  highScores.sort(compareHighScores);
  localStorage.setItem('high-scores', JSON.stringify(highScores.slice(0, 10)));
}

function getHighScores() {
  const highScores = JSON.parse(localStorage.getItem('high-scores'));

  if (!highScores) {
    initHighScore();
    return [];
  }

  return highScores;
}

function isHighScore(score) {
  // Checks if score is higher than the lowest
  const highScore = getHighScores();

  if (highScore.length < 10) return true;
  console.log('High score list full');
  if (score > highScore[9].score) return true;
  console.log('Was not a high score');

  return false;
}

function initHighScore() {
  localStorage.setItem('high-scores', JSON.stringify([]));
  console.log('High score initialized');
}

function compareHighScores(a, b) {
  return b.score - a.score;
}

function getHighScoreTable() {
  const highScores = getHighScores();
  console.log(highScores);
  const table = $('<table class="high-score-table"</table>');
  const scoreElements = [];

  for (const score of highScores) {
    scoreElements.push(
      `<tr><td>${score.name}</td><td>${score.score}</td></tr>`
    );
  }

  return table.append(scoreElements.join(''));
}
