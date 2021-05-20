'use strict'

const modal = document.getElementsByClassName('modal');
const close = document.getElementsByClassName('modal__close');
const success = document.getElementsByClassName('show-success');
const successModal = document.getElementById('modal_success');

// Открывает главное модальное окно
const openModal = () => modal.item(0).classList.add('modal_active');

openModal();

// Закрывает все модальные окна при нажатии на крестик
for (let i = 0; i < close.length; i++) {
    close.item(i).onclick = function() {
        this.closest('.modal').classList.remove('modal_active');
    }
}

// Открывает второе модальное окно при клике на кнопку "Сделать хорошо"
success.item(0).onclick = () => {
    successModal.classList.add('modal_active');
    document.getElementsByClassName('modal_active').item(0).classList.remove('modal_active');
}