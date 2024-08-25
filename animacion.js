document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo');
    const paragraphs = document.querySelectorAll('.content p');

    // Añadir la clase 'show' al logo después de un pequeño retraso
    setTimeout(() => {
        logo.classList.add('show');
    }, 500);

    // Añadir la clase 'show' a los párrafos con un retraso entre ellos
    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.classList.add('show');
        }, 1000 + index * 500); // El retraso inicial es mayor para permitir que el logo se anime primero
    });
});
