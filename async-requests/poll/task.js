'use strict'

let titlePoll = document.getElementById('poll__title');
let answersPoll = document.getElementById('poll__answers');

let requestPoll = new XMLHttpRequest();
requestPoll.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
requestPoll.send();

requestPoll.addEventListener('readystatechange', () => {
    if (requestPoll.readyState === requestPoll.DONE) {
        // console.log(requestPoll);
        let poll = JSON.parse(requestPoll.responseText).data;
        console.log(poll);
        titlePoll.textContent = poll.title; // Выводим заголовок, полученный с сервера
        for (let answer of poll.answers) {
            let buttonPoll = document.createElement('button');
            buttonPoll.classList.add('poll__answer');
            buttonPoll.textContent = answer;
            answersPoll.appendChild(buttonPoll);
            buttonPoll.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
        }
    }
});