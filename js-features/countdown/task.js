'use strict'

let status = document.getElementById('status');
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');

let timerBegin = setInterval(() => {
    seconds.textContent -= 1;
    if (seconds.textContent < 10) {
        seconds.textContent = '0' + seconds.textContent;
    }
    if (seconds.textContent == 0 && minutes.textContent == 0 && hours.textContent == 0) {
        alert('Вы победили в конкурсе!');
        timerBegin = clearInterval(timerBegin);
        status.textContent = 'Конкурс завершен!'
        window.location = "test.rar";
    } else if (seconds.textContent == 0 && minutes.textContent != 0) {
        minutes.textContent -= 1;
        if (minutes.textContent < 10) {
            minutes.textContent = '0' + minutes.textContent;
        }
        seconds.textContent = 59;
    } else if (seconds.textContent == 0 && minutes.textContent == 0 && hours.textContent != 0) {
        hours.textContent -= 1;
        if (hours.textContent < 10) {
            hours.textContent = '0' + hours.textContent;
        }
        minutes.textContent = 59;
        seconds.textContent = 59;
    }
}, 1000);