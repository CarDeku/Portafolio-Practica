//menu hamburguesa
(function() {
    let navbar = document.querySelector('#navbar');
    let hamburguer = document.querySelector('#hamburger');
    hamburguer.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})()



