---
layout: pomodoro
title: MyPomodoro 線上番茄鐘
description: 一個簡潔、無干擾的線上番茄鐘，幫助你專注工作。
---
<div class="pomodoro-app-body">
  <div class="pomodoro-container">

    <div class="app-title">
      <img src="https://img.icons8.com/color/48/tomato.png" alt="tomato icon">
      <span>MyPomodoro</span>
    </div>

    <div class="settings-grid">
      <label for="workInput">💪 工作時間 (分鐘):</label>
      <input type="number" id="workInput" value="25" min="1">
      
      <label for="breakInput">☕ 休息時間 (分鐘):</label>
      <input type="number" id="breakInput" value="5" min="1">
    </div>

    <div id="timer">25:00</div>

    <div id="progressBarContainer">
      <div id="progressBar"></div>
    </div>

    <div class="button-group">
      <button id="startBtn">開始</button>
      <button id="pauseBtn">暫停</button>
      <button id="resetBtn">重置</button>
    </div>

    <div id="customAlert">
      <div id="customAlertContent">
        <p id="alertMessage">時間到囉！</p>
        <button id="closeAlertBtn">確認</button>
      </div>
    </div>

  </div>
</div>

