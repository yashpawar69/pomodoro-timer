let timer;
let timeLeft = 25 * 60; // Default to 25 minutes
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const breakBtn = document.getElementById("break");
const setBtn = document.getElementById("set-timer");
const customInput = document.getElementById("custom-minutes");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert("Time's up! 🎉");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 25 * 60;
  updateDisplay();
}

function shortBreak() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 5 * 60;
  updateDisplay();
}

function setCustomTimer() {
  const minutes = parseInt(customInput.value);
  if (!isNaN(minutes) && minutes > 0) {
    clearInterval(timer);
    isRunning = false;
    timeLeft = minutes * 60;
    updateDisplay();
  } else {
    alert("Please enter a valid number between 1 and 120.");
  }
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
breakBtn.addEventListener("click", shortBreak);
setBtn.addEventListener("click", setCustomTimer);

updateDisplay();
