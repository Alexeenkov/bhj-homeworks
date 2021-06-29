'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let modal = document.getElementById('subscribe-modal');
    let close = document.querySelector('.modal__close');
    // Показываем модальное окно, если в куки нет 'modal=close':
    if (getCookie('modal') !== 'close') {
        modal.classList.add('modal_active');
    }
    // Завкрываем попап и записываем в куки информацию при клике на крестик:
    close.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = 'modal=close';
    });
    // Функция возвращает значение куки по указанному ключу:
    function getCookie(name) {
        const cookie = '; ' + document.cookie;
        let value = cookie.split('; ' + name + '=');
        if (value.length === 2) {
            return value.pop().split(';').shift();
        }
    }
});