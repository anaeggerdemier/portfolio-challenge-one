document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const menu = document.querySelector('.navegacao__lista');
            if (menu) {
                menu.classList.toggle('ativo');
            }
        });
    }
});
