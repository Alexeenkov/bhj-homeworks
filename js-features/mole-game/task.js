'use strict'

let lost = document.getElementById('lost');
let dead = document.getElementById('dead');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.className === 'hole') {
            lost.textContent = +lost.textContent + 1;
            if (lost.textContent == 5) {
                alert('Вы проиграли! :(');
                clear();
            }
        } else {
            dead.textContent = +dead.textContent + 1;
            if (dead.textContent == 10) {
                alert('Вы выиграли! =)');
                clear();
            }
        }
    };
}

function clear() {
    dead.textContent = 0;
    lost.textContent = 0;
}