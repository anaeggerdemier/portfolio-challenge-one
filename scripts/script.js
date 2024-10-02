document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navegacao');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', toggleMenu);
        
        menuToggle.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); 
                toggleMenu();
            }
        });

        document.addEventListener('click', function(event) {
            const isClickInside = menuToggle.contains(event.target) || menu.contains(event.target);
            if (!isClickInside && menu.classList.contains('show')) {
                toggleMenu(); 
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && menu.classList.contains('show')) {
                toggleMenu(); 
            }
        });
    }

    function toggleMenu() {
        const isActive = menu.classList.toggle('show'); 
        menuToggle.setAttribute('aria-expanded', isActive); 
        menu.setAttribute('aria-hidden', !isActive); 
    }
});
