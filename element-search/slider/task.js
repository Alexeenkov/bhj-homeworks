'use strict'

let sliderItem = document.getElementsByClassName('slider__item');
const buttonSlideRight = document.getElementById('slider__arrow_next');
const buttonSlideLeft = document.getElementById('slider__arrow_prev');
let sliderItemArray = Array.from(sliderItem);
let i = 1;

// Находит индекс активного слайда
function findIndexActiveItem() {
    i = sliderItemArray.findIndex(item => {
        return item.className == 'slider__item slider__item_active';
    });
}

buttonSlideRight.onclick = () => {
    if (i === sliderItem.length - 2) {
        sliderItem.item(sliderItem.length - 1).className = 'slider__item';
        i = 0;
        sliderItem.item(i).className = 'slider__item slider__item_active';
    } else {
        findIndexActiveItem();
        sliderItem.item(i).className = 'slider__item';
        sliderItem.item(i + 1).className = 'slider__item slider__item_active';
    }
}

buttonSlideLeft.onclick = () => {
    if (i === 1) {
        sliderItem.item(0).className = 'slider__item';
        i = sliderItem.length - 1;
        sliderItem.item(i).className = 'slider__item slider__item_active';
    } else {
        findIndexActiveItem();
        sliderItem.item(i).className = 'slider__item';
        sliderItem.item(i - 1).className = 'slider__item slider__item_active';
    }
}