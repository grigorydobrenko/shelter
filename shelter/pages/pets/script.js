const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const logo = document.querySelector(".header__logo");

const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header__container");

function toggleMenu() {
  menu.classList.toggle("menu_active");
  logo.classList.toggle("header__logo_active");
}

function rotateBurger() {
  burger.classList.toggle("burger_active");
}

function toggleHidden() {
  body.classList.toggle("hidden");
}

function overLaid() {
  overlay.classList.toggle("display-block");
}

overlay.addEventListener("click", overLaid);
overlay.addEventListener("click", toggleMenu);
overlay.addEventListener("click", rotateBurger);
overlay.addEventListener("click", toggleHidden);

burger.addEventListener("click", () => {
  toggleMenu();
  rotateBurger();
  toggleHidden();
  overLaid();
});

menu.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.nodeName == "A") {
    toggleMenu();
    overLaid();
    rotateBurger();
    toggleHidden();
  }
});

logo.addEventListener("click", (event) => {
  if (menu.classList.contains("menu_active")) {
    toggleMenu();
    overLaid();
    rotateBurger();
    toggleHidden();
  }
});
