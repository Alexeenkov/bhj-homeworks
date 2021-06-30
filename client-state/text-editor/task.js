'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let editor = document.getElementById('editor');
    let clear = document.getElementById('clear');
    // Если в поле была введена информация пользователем ранее, выводим её (из хранилища):
    editor.value = localStorage.getItem('editor');
    // Записываем введеный текст после нажатия на клавишу в хранилище:
    editor.addEventListener('keyup', () => localStorage.editor = editor.value);
    // При нажатии на кнопку очищаем хранилище:
    clear.addEventListener('click', () => delete localStorage.editor);
});