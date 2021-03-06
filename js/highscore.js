function checkAndSetHighScore(score, name) {
  if (!isHighScore(score)) return;

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

  if (score < 1) return false;
  if (highScore.length < 10) return true;
  if (score > highScore[9].score) return true;

  return false;
}

function initHighScore() {
  localStorage.setItem('high-scores', JSON.stringify([]));
}

function compareHighScores(a, b) {
  return b.score - a.score;
}

function getHighScoreTable() {
  const highScores = getHighScores();
  console.log(highScores);

  if (highScores.length === 0) {
    const noHighScoreMsg = $(
      '<p class="no-high-scores">No high scores set yet</p>'
    );
    return noHighScoreMsg;
  }

  const table = $('<table class="high-score-table"></table>');
  const scoreElements = [];

  for (const score of highScores) {
    scoreElements.push(
      `<tr><td class="name">${score.name}</td><td class="score">${score.score}</td></tr>`
    );
  }

  return table.append(scoreElements.join(''));
}
