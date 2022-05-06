

// Menu burger

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



// Carousel


import parsed from '../../js/pets.js';


const BTN_LEFT = document.querySelector(".pets__left-button");
const BTN_RIGHT = document.querySelector(".pets__right-button");

const WRAPPER = document.querySelector('.pets__wrapper');

const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");



const CAROUSEL = document.querySelector(".carousel");




BTN_LEFT.addEventListener('click', getArr);

function getArr() {
  BTN_LEFT.removeEventListener("click", getArr);
  let randoms = [];  
  if (WRAPPER.clientWidth == 990) {
    let rand = getRandom();
    randoms.push(rand);    
    for (let i = 0; i < 2; i++) {
      rand = getRandom(); 
      while (randoms.includes(rand)) {
        rand = getRandom(); 
      }
      randoms.push(rand); 
    }
     
  } 
  else if (WRAPPER.clientWidth == 580) {
    let rand = getRandom();
    randoms.push(rand);    
    for (let i = 0; i < 1; i++) {
      rand = getRandom(); 
      while (randoms.includes(rand)) {
        rand = getRandom(); 
      }
      randoms.push(rand); 
    }     
  } 
  else if (WRAPPER.clientWidth == 270) {
    let rand = getRandom();
    randoms.push(rand);    
        
  } 
  console.log(randoms);
  // return randoms;
  for (let i = 0; i < randoms.length; i++) {
    let newItem = createCardTemplate(randoms[i]);
    ITEM_LEFT.appendChild(newItem);
  }
  CAROUSEL.classList.add("transition-left");

}




CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  }
  BTN_LEFT.addEventListener('click', getArr);
});



function createCardTemplate(i) {
  let item = document.createElement("div");
  item.classList.add("pets__item");
  item.innerHTML = `<div class="pets__img" data-name="${parsed[i].name}"><img src="../../assets/img/${parsed[i].name}.png" alt="${parsed[i].name}"></div>
  <div class="pets__name">${parsed[i].name}</div>
  <div class="pets__button "><a href="" class="btn btn_transparent">Learn more</a></div>`;
  console.log(item);
  return item;
}


function getRandom() {
  let random = Math.floor(Math.random() * 8);
  return random;
}



// pets items 990, 580, 279   = clientWidth: 580













