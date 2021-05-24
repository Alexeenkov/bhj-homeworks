'use strict'

const rotatorCase = document.getElementsByClassName('rotator__case');

for (let i = 0; i < rotatorCase.length; i++) {
    const dataColor = rotatorCase.item(i).getAttribute('data-color');
    rotatorCase.item(i).style.color = dataColor;
}

setInterval(() => {
    const rotatorCaseActive = document.querySelectorAll('.rotator__case_active');
    for (let i = 0; i < rotatorCaseActive.length; i++) {
        rotatorCaseActive.item(i).classList.remove('rotator__case_active');
        if (rotatorCaseActive.item(i).nextElementSibling == null) {
            rotatorCaseActive.item(i).closest('.rotator').querySelector('.rotator__case').classList.add('rotator__case_active');
        } else {
            rotatorCaseActive.item(i).nextElementSibling.classList.add('rotator__case_active');
        }
    }
}, 1000);

console.log('Я дальше работаю!');