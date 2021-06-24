'use strict'

let loader = document.querySelector('.loader');
let items = document.getElementById('items');

let requestCourseCurrency = new XMLHttpRequest();
requestCourseCurrency.open('GET', 'https://netology-slow-rest.herokuapp.com');
requestCourseCurrency.send();
// console.log(requestCourseCurrency); // создали запрос и получили ответ от сервера в формате JSON

requestCourseCurrency.addEventListener('readystatechange', () => {
    if (requestCourseCurrency.readyState === requestCourseCurrency.DONE) {
        let currencies = JSON.parse(requestCourseCurrency.responseText).response.Valute;
        console.log(currencies); // извлекли объект Valute
        for (let currency in currencies) {
            let item = document.createElement('div');
            item.classList.add('item');
            // console.log(item); // Создали HTML-элементы div с классом item
            item.innerHTML = `<div class="item__code">${currencies[currency].CharCode}</div>
        					  <div class="item__value">${currencies[currency].Value}</div>
            				  <div class="item__currency">руб.</div>`;
            // console.log(item); // Добавили в каждый созданный элемент item необходимую разметку с валютой и её значением
            loader.classList.remove('loader_active'); // Убираем картинку загрузки
            items.appendChild(item); // Добавляем каждый созданный элемент с валютой к элементу items
        }
    }
});