
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        // Toggle the active class on the burger and navLinks
        burger.classList.toggle('toggle');
        navLinks.classList.toggle('active');
    });
});


ScrollReveal().reveal('.headline');