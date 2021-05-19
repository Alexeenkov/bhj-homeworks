'use strict'

const menuLinks = document.querySelectorAll('.menu__link');
let menuActive;

menuLinks.forEach(menuLink => {
    menuLink.onclick = () => {
        menuActive = document.querySelector('.menu_active');
        if (menuActive != null) {
            menuActive.className = 'menu menu_sub';
        }
        if (menuLink.closest('.menu__item').querySelector('.menu_sub') != null) {
            menuLink.closest('.menu__item').querySelector('.menu_sub').className = 'menu menu_sub menu_active';
            return false;
        }
    }
});