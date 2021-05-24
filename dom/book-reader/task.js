'use strict'

const book = document.getElementById('book');
const fontSize = book.getElementsByClassName('font-size');
const colorText = book.getElementsByClassName('color');


for (let i = 0; i < fontSize.length; i++) {
    fontSize.item(i).addEventListener('click', function(event) {
        event.preventDefault();
        book.querySelector('.font-size_active').classList.remove('font-size_active');
        this.classList.add('font-size_active');
        if (this.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (this.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    });
}