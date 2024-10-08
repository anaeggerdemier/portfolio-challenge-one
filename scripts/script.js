(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navigation');

    if (menuToggle && nav) {
        const toggleNavigation = () => {
            nav.classList.toggle('active');
            const isExpanded = nav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        };

        const closeNavigation = (event) => {
            if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        };

        menuToggle.addEventListener('click', toggleNavigation);
        document.addEventListener('click', closeNavigation);
    }
})();
