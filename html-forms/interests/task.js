const checkbox = document.getElementsByClassName('interest__category');

for (let i = 0; i < checkbox.length; i++) {
    checkbox.item(i).addEventListener('change', function() {
        let checkboxItem = checkbox.item(i).closest('.interest').getElementsByClassName('interest__check');
        if (checkbox.item(i).checked) {
            for (let j = 0; j < checkboxItem.length; j++) {
                checkboxItem.item(j).checked = true;
            }
        } else {
            for (let j = 0; j < checkboxItem.length; j++) {
                checkboxItem.item(j).checked = false;
            }
        }
    });
}