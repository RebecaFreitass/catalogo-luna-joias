let hamburguer = document.querySelector(".hamburguer");
let navMenu = document.querySelector(".contact-us-box");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    console.log('Funciona')
});