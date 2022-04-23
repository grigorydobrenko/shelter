const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const logo = document.querySelector('.header__logo');

function toggleMenu() {
  menu.classList.toggle('menu_active');
  logo.classList.toggle('header__logo_active');
}

function rotateBurger() {
  burger.classList.toggle('burger_active');
}

function toggleHidden() {
  body.classList.toggle('hidden');
}





burger.addEventListener('click', () => {
  toggleMenu();
  rotateBurger();
  toggleHidden();
})