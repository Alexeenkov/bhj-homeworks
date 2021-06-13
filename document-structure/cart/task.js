'use strict';

const productQuantity = Array.from(document.getElementsByClassName("product__quantity-control"));
productQuantity.forEach(item => item.addEventListener("click", quantityHandler));

function quantityHandler() {
    const quantityValue = this.closest(".product__quantity-controls").querySelector(".product__quantity-value");
    if (this.classList.contains("product__quantity-control_dec")) {
        quantityValue.innerText = +quantityValue.innerText - 1;
        if (+quantityValue.innerText <= 0) {
            quantityValue.innerText = 1;
        }
    } else {
        quantityValue.innerText = +quantityValue.innerText + 1;
    }
}

const addProductButton = Array.from(document.getElementsByClassName("product__add"));
addProductButton.forEach(item => item.addEventListener("click", addToBasketHandler));

const basket = document.querySelector(".cart__products");

function addToBasketHandler() {
    const item = this.closest(".product");

    const basketItems = Array.from(basket.getElementsByClassName("cart__product"));

    const basketFilter = basketItems.filter(element => element.dataset.id === item.dataset.id);

    if (basketFilter.length) {
        basketFilter[0].querySelector(".cart__product-count").innerText = +basketFilter[0].querySelector(".cart__product-count").innerText + +item.querySelector(".product__quantity-value").innerText;
    } else {
        const basketItemCreate = document.createElement("div");
        basketItemCreate.classList.add("cart__product");
        basketItemCreate.dataset.id = item.dataset.id;

        basketItemCreate.innerHTML = `<img class="cart__product-image" src="${item.querySelector(".product__image").src}">
                                      <div class="cart__product-count">${item.querySelector(".product__quantity-value").innerText}</div>`;

        basket.appendChild(basketItemCreate);
    }
}