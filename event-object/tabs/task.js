'use strict'

const tabs = Array.from(document.getElementsByClassName("tab"));
const tabContent = Array.from(document.getElementsByClassName("tab__content"));

tabs.forEach(tab => tab.addEventListener("click", function(event) {
    this.closest('.tabs').querySelector(".tab_active").classList.remove("tab_active");
    this.closest('.tabs').querySelector(".tab__content_active").classList.remove("tab__content_active");
    event.currentTarget.classList.add("tab_active");
    tabContent[tabs.indexOf(event.currentTarget)].classList.add("tab__content_active");
}));