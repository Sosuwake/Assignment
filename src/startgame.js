

export default function startGame() {
  const start = document.getElementById('start-page');
  if (start.style.display === 'none') {
    start.style.display = 'block';
  } else {
    start.style.display = 'none';
  }
}

const startPage = document.querySelector('.container');
const startButton = document.createElement('button');

startPage.appendChild(startButton);

_button.innerHTML = 'START!';
_button.onclick = startGame();

