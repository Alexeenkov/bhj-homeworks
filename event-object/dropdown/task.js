'use strict'

const dropdownValue = document.getElementsByClassName('dropdown__value');
let dropdownList;

for (let i = 0; i < dropdownValue.length; i++) {
    // Вешаем событие клика на каждый из блоков
    dropdownValue.item(i).addEventListener('click', function() {
        // Показываем или скрываем список при нажатии на определенный блок
        dropdownList = this.closest('.dropdown').querySelector('.dropdown__list');
        dropdownList.classList.toggle('dropdown__list_active');
    });
    let dropdownLink = dropdownValue.item(i).closest('.dropdown').getElementsByClassName('dropdown__link');
    for (let j = 0; j < dropdownLink.length; j++) {
        // Вешаем событие клика на каждую ссылку в этом блоке
        dropdownLink.item(j).addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем действия браузера по умолчанию (переход по ссылке)
            dropdownValue.item(i).textContent = this.textContent; // Меняем текст блока на выбранный
            dropdownList.classList.remove('dropdown__list_active'); // Скрываем список
        });
    }
}