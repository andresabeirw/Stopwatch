var timerInterval;
var hours = 0;
var minutes = 0;
var seconds = 0;

function startTimer() {
  timerInterval = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    var timeString = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);
    document.getElementById('timer').textContent = timeString;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('timer').textContent = '00:00:00';
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
