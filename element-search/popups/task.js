'use strict'

const modal = document.getElementsByClassName('modal');
const close = document.getElementsByClassName('modal__close');
const success = document.getElementsByClassName('show-success');
const successModal = document.getElementById('modal_success');

// Открывает главное модальное окно
const openModal = () => modal.item(0).className = 'modal modal_active';

openModal();

// Закрывает все модальные окна при нажатии на крестик
for (let i = 0; i < close.length; i++) {
    close.item(i).onclick = function() {
        for (let i = 0; i < modal.length; i++) {
            modal.item(i).className = 'modal';
        }
    }
}

// Открывает второе модальное окно при клике на кнопку "Сделать хорошо"
success.item(0).onclick = () => successModal.className = 'modal modal_active';