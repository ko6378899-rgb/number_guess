let randomNumber = Math.floor(Math.random() * 100) + 1; // 1〜100のランダムな数字
let attempts = 0;

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

submitButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);
  attempts++;
  attemptsDisplay.textContent = `試行回数: ${attempts}`;
  
  if (userGuess < randomNumber) {
    message.textContent = '小さすぎます！';
    message.style.color = 'blue';
  } else if (userGuess > randomNumber) {
    message.textContent = '大きすぎます！';
    message.style.color = 'red';
  } else {
    message.textContent = `正解！あなたは${attempts}回目で当たりました！`;
    message.style.color = 'green';
  }
  
  guessInput.value = ''; // 入力欄をクリア
});
