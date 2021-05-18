'use strict'

let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let speedCounter = document.getElementById('speed__counter');
let timeLastClick = 0;

cookie.onclick = () => {
    clickerCounter.textContent = +clickerCounter.textContent + 1;
    if (+clickerCounter.textContent % 2 != 0) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }

    speedCounter.textContent = +(1 / ((Date.now() - timeLastClick) / 1000)).toFixed(2); // Скорость клика
    timeLastClick = Date.now();
}