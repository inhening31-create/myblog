const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const workInput = document.getElementById("workInput");
const breakInput = document.getElementById("breakInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const customAlert = document.getElementById("customAlert");
const alertMessage = document.getElementById("alertMessage");
const closeAlertBtn = document.getElementById("closeAlertBtn");

let workTime, breakTime, timeLeft;
let timerId = null;
let isWorkSession = true;
let isRunning = false;

function updateUI() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (isRunning) {
    document.title = `${timerDisplay.textContent} - ${isWorkSession ? "工作中" : "休息中"} | MyPomodoro`;
  } else {
    document.title = "MyPomodoro - 專注工作、高效休息的線上番茄鐘";
  }

  const totalTime = isWorkSession ? workTime : breakTime;
  const percent = totalTime > 0 ? (timeLeft / totalTime) * 100 : 100;
  progressBar.style.width = percent + "%";

  if (!isRunning) {
    document.body.style.background = "#fdf6e3";
    progressBar.style.background = "#ccc";
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("green-btn"));
  } else if (isWorkSession) {
    document.body.style.background = "#ffe4c4";
    progressBar.style.background = "#ff6b6b";
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("green-btn"));
  } else {
    document.body.style.background = "#dfffe0";
    progressBar.style.background = "#4caf50";
    document.querySelectorAll("button").forEach(btn => btn.classList.add("green-btn"));
  }
}

function startTimer() {
  if (isRunning || timeLeft <= 0) return;

  isRunning = true;
  toggleInputs(false);
  updateUI();

  timerId = setInterval(() => {
    timeLeft--;
    updateUI();
    if (timeLeft < 0) {
      timerEndSequence();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
  isRunning = false;
  toggleInputs(true);
  updateUI();
}

function applySettingsAndReset() {
  pauseTimer();
  isWorkSession = true;

  workTime = Math.max(1, parseInt(workInput.value)) * 60;
  breakTime = Math.max(1, parseInt(breakInput.value)) * 60;

  workInput.value = workTime / 60;
  breakInput.value = breakTime / 60;

  timeLeft = workTime;
  updateUI();
}

function timerEndSequence() {
  pauseTimer();
  const message = isWorkSession ? "努力夠久啦！現在休息一下吧🍵！" : "休息時間結束了！讓我們繼續努力💪！";
  showAlert(message);
  setupNextSession();
}

function setupNextSession() {
  isWorkSession = !isWorkSession;
  timeLeft = isWorkSession ? workTime : breakTime;
  updateUI();
}

function toggleInputs(enabled) {
  workInput.disabled = !enabled;
  breakInput.disabled = !enabled;
}

function showAlert(message) {
  alertMessage.textContent = message;
  customAlert.style.display = "flex";
}

function closeAlert() {
  customAlert.style.display = "none";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", applySettingsAndReset);
closeAlertBtn.addEventListener("click", closeAlert);

applySettingsAndReset();
