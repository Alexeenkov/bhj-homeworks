'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let signIn = document.getElementById('signin');
    let button = document.getElementById('signin__btn');
    let form = document.getElementById('signin__form');
    let welcome = document.getElementById('welcome');
    let userId = document.getElementById('user_id');

    signIn.classList.add('signin_active');
    // При клике на кнопку входа:
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Собираем данные из формы, создаем и отправляем запрос с данными формы:
        let formData = new FormData(form);
        let request = new XMLHttpRequest();
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        request.send(formData);
        // Следим за изменением состояния готовности запроса: 
        request.addEventListener('readystatechange', () => {
            // Выполняем код когда ответ готов:
            if (request.readyState === request.DONE) {
                let response = JSON.parse(request.responseText);
                // При успешной авторизации:
                if (response.success === true) {
                    signIn.classList.remove('signin_active'); // Скрываем форму авторизации
                    welcome.classList.add('welcome_active'); // Показываем приветствие
                    userId.textContent = response.user_id; // Указываем идентификатор пользователя
                    localStorage.user_id = response.user_id; // Записываем его в локальное хранилище
                } else { // Если ошибка при авторизации:
                    alert('Неверный логин/пароль');
                }
            }
        });
    });
});