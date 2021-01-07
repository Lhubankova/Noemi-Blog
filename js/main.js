const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggle = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggle.addEventListener('click', function () {
    body.classList.toggle('open');
});

//scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left-first', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 2300
});

sr.reveal('.animate-right-first', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 2300
});

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 1300
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});