'use strict';

const tooltip = Array.from(document.getElementsByClassName("has-tooltip"));
tooltip.forEach(item => item.addEventListener("click", function(event) {
    event.preventDefault();

    const tooltipContainer = document.querySelector(".tooltip");
    if (tooltipContainer) {
        let target = event.target;
        if (tooltipContainer === target.nextElementSibling) {
            tooltipContainer.remove();
            return;
        } else {
            tooltipContainer.remove();
        }
    }

    const tooltipTitle = this.title;
    const tooltipPosition = this.getBoundingClientRect();
    const tooltipLeft = tooltipPosition.left;
    const tooltipTop = tooltipPosition.top + tooltipPosition.height;
    this.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${tooltipLeft}px; top: ${tooltipTop}px">${tooltipTitle}</div>`);
}));