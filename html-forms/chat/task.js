'use strict'

const chatWidget = document.querySelector('.chat-widget');
const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatWidgetInput = document.querySelector('.chat-widget__input');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');

// Сообщения бота:
let messages = [
    'Привет! И пока..',
    'Что ты хочешь от меня, белоглазая?',
    'Остань, а? Нет настроения',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
];

// Показываем чат при клике на кнопку:
chatWidgetSide.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');
});

// Рандомно возвращаем сообщение из списка
const getRandomMessage = () => {
    let min = 0;
    let max = messages.length - 1;
    return messages[Math.floor(Math.random() * (max - min + 1)) + min];
}

// При нажатии на Enter (если сообщение не пустое), публикуем сообщение пользователя и ответ бота
chatWidgetInput.addEventListener('keydown', event => {
    if (event.key === 'Enter' && chatWidgetInput.value != '') {
        let timeMessage = new Date();
        timeMessage = `${timeMessage.getHours()}:${timeMessage.getMinutes()}`; // Получаем реальное время
        chatWidgetMessages.innerHTML += `
			<div class="message message_client">
				<div class="message__time">${timeMessage}</div>
				<div class="message__text">${chatWidgetInput.value}</div>
			</div>
		`;
        chatWidgetMessages.innerHTML += `
			<div class="message">
				<div class="message__time">${timeMessage}</div>
				<div class="message__text">
					${getRandomMessage()}
				</div>
			</div>
		`;
        chatWidgetInput.value = ''; // Очищаем поле ввода сообщения
    }
});