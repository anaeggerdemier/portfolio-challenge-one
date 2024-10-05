(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.navigation__list');

    if (menuToggle && navList) {
        const toggleNavigation = () => {
            navList.classList.toggle('show'); 
            const isExpanded = navList.classList.contains('show');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        };

        const closeNavigation = (event) => {
            if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
                navList.classList.remove('show');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        };

        menuToggle.addEventListener('click', toggleNavigation);
        document.addEventListener('click', closeNavigation);
    }
})();
