'use strict'

const menuLinks = document.querySelectorAll('.menu__link');
let menuActive;

menuLinks.forEach(menuLink => {
    menuLink.onclick = () => {
        let subMenu = menuLink.closest('.menu__item').querySelector('.menu_sub'); // Находим подменю нажатой ссылки
        if (subMenu != null) { // Если такие подменю есть
            let menuActive = menuLink.closest('.menu').querySelector('.menu_active'); // Находим все ранее открытые подменю в этом меню
            if (subMenu.classList.contains('menu_active')) { // Проверяем, открыто ли подменю нажатой ссылки
                subMenu.classList.remove('menu_active'); // Если открыто, то закрываем
                return false; // И больше ничего не делаем
            }
            if (menuActive != null) { // Если другие открытые подменю в меню есть
                menuActive.classList.remove('menu_active'); // Закрываем их
            }
            subMenu.classList.add('menu_active'); // Если всё же не было открыто, то открываем подменю
            return false; // И ничего больше при клике на эту ссылку не делаем
        }
    }
});