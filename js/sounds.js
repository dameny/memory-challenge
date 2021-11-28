const buttonSounds = {};
const gameOverSound = new Audio('sounds/wrong.mp3');

for (const color of buttonColours) {
  buttonSounds[color] = new Audio(`sounds/${color}.mp3`);
}

function playGameOverSound() {
  gameOverSound.play();
}

function playButtonSound(button) {
  buttonSounds[button.attr('id')].play();
}
