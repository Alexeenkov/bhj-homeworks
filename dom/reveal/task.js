let blockEmergence = document.getElementsByClassName('reveal');

window.addEventListener('scroll', showBlockWhenScroll);

function showBlockWhenScroll() {
    for (let i = 0; i < blockEmergence.length; i++) {
        if (blockEmergence.item(i).getBoundingClientRect().top + 100 < window.innerHeight) {
            console.log(blockEmergence.item(i).getBoundingClientRect().top);
            blockEmergence.item(i).classList.add('reveal_active');
        }
    }
}