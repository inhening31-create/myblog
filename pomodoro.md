---
layout: pomodoro
title: MyPomodoro - 專注工作、高效休息的線上番茄鐘
permalink: /pomodoro/
---

<h1>🍅 MyPomodoro</h1>

<div>
  <span id="workLabel">💪 工作時間 (分鐘):</span>
  <input type="number" id="workInput" value="25" min="1"> <br>
  <span id="breakLabel">🍵 休息時間 (分鐘):</span>
  <input type="number" id="breakInput" value="5" min="1"> <br>
</div>

<div id="timer">25:00</div>

<div id="progressBarContainer">
  <div id="progressBar"></div>
</div>

<button id="startBtn">開始</button>
<button id="pauseBtn">暫停</button>
<button id="resetBtn">重置</button>

<div id="customAlert">
  <div id="customAlertContent">
    <p id="alertMessage">時間到囉！</p>
    <button id="closeAlertBtn">確認</button>
  </div>
</div>

<script src="{{ '/assets/js/pomodoro.js' | relative_url }}"></script>
