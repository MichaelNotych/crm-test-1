// 25 min.

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    insertTimerData(seconds);
    const timer = setInterval(function() {
      seconds--;
      if (seconds < 0) {
        clearInterval(timer);
        return;
      }
      insertTimerData(seconds);
    }, 1000);
  };
};

const insertTimerData = (seconds) => {
  const calcHours = Math.floor(seconds / 60 / 60);
  const calcMinutes = Math.floor((seconds - calcHours * 60 * 60) / 60);
  const calcSeconds = seconds - calcHours * 60 * 60 - calcMinutes * 60;
  timerEl.innerHTML = (calcHours > 0 ? (calcHours > 9 ? calcHours : '0' + calcHours) : '00') + ':' + (calcMinutes > 0 ? (calcMinutes > 9 ? calcMinutes : '0' + calcMinutes) : '00') + ':' + (calcSeconds > 9 ? calcSeconds : '0' + calcSeconds);
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9.]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
