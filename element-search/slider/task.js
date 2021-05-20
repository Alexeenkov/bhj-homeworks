'use strict'

const sliderItems = document.getElementsByClassName('slider__item');
const buttonSlideRight = document.getElementById('slider__arrow_next');
const buttonSlideLeft = document.getElementById('slider__arrow_prev');
const dots = document.getElementsByClassName('slider__dot');
const sliderItemArray = Array.from(sliderItems);

// Находит индекс активного слайда
let findIndexActiveItem = () => sliderItemArray.findIndex(item => item.classList.contains('slider__item_active'));

function slide() {
    let i = findIndexActiveItem();
    sliderItems.item(i).classList.remove('slider__item_active'); // Скрываем активный слайд
    let nextSlide = this.classList.contains('next') ? 1 : -1; // Смотрим, какая нажата кнопка, в зависимости от этого записываем 1, либо -1 в переменную
    i += nextSlide; // Эту переменную прибавляем к индексу активного слайда (определяем индекс следующего слайда)
    // Делаем слайдер бесконечным:
    if (i === -1) {
        i = sliderItems.length - 1;
    } else if (i === sliderItems.length) {
        i = 0;
    }
    sliderItems.item(i).classList.add('slider__item_active'); // Показываем следующий слайд
}

// Вешаем событие клика на каждый буллет:
for (let j = 0; j < dots.length; j++) {
    dots.item(j).onclick = () => {
        let i = findIndexActiveItem();
        sliderItems.item(i).classList.remove('slider__item_active'); // При нажатии на буллет, находим активный слайд и скрываем его
        sliderItems.item(j).classList.add('slider__item_active'); // Показываем тот, на который кликнули
    }
}

buttonSlideRight.onclick = slide;
buttonSlideLeft.onclick = slide;