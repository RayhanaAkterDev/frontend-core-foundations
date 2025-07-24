// script.js for Responsive Navigation Patterns

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('primary-menu');

menuToggle.addEventListener('click', () => {
    const expanded =
        menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
});
