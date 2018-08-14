document.addEventListener('DOMContentLoaded', () => {
    toggleMobileMenu();
});

function toggleMobileMenu() {
    const menuToggle = document.querySelector('.toggle-menu'),
        closeBtn = document.querySelector('.mobile-menu__close');

    if (menuToggle) {
        menuToggle.addEventListener('click', openMobileMenu);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
    }

    function openMobileMenu() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.add('mobile-menu--is-active');
    }

    function closeMobileMenu() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.remove('mobile-menu--is-active');
    }
}