// show main cards
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element_show"); // added class for main cards
      change.target.classList.add("show_card"); // added class for footer cards
    }
    // console.log(change);
  });
}

// show main cards left
let optionsLeft = { threshold: [0.5] };
let observerLeft = new IntersectionObserver(onEntry, optionsLeft);
let elementsLeft = document.querySelectorAll(".hiden_left");
for (let elm of elementsLeft) {
  observerLeft.observe(elm);
}

// show main cards right

let optionsRight = { threshold: [0.5] };
let observerRight = new IntersectionObserver(onEntry, optionsRight);
let elementsRight = document.querySelectorAll(".hiden_right");
for (let elm of elementsRight) {
  observerRight.observe(elm);
}

// show footer cards
let optionsFooter = { threshold: [0.5] };
let observerFooter = new IntersectionObserver(onEntry, optionsFooter);
let elementsFooter = document.querySelectorAll(".hiden_subscription_card");
for (let elm of elementsFooter) {
  observerFooter.observe(elm);
}

//// Modal window

const btnRegistr = document.querySelectorAll(".registration_btn");
const modalRegistrWindow = document.querySelector(".modal_registr");
const btnCloseModalWindowRegistr = document.querySelectorAll(".btn_close");

const btnLogin = document.querySelectorAll(".login_btn");
const modalLoginWindow = document.querySelector(".modal_login");
const btnCloseWindowLogin = document.querySelector(".btn_close_login");

const modalMenu = document.querySelector(".modal_menu");
const btnMenu = document.querySelector(".menu_icon");
const btnCloseMenu = document.querySelector(".btn_close_menu");

// show modal registr
btnRegistr.forEach((elem) => {
  elem.addEventListener("click", () => {
    modalRegistrWindow.classList.toggle("show_modal");
  });
});

// close modal registr
btnCloseModalWindowRegistr.forEach((elem) => {
  elem.addEventListener("click", () => {
    modalRegistrWindow.classList.remove("show_modal");
  });
});

// show modal login
btnLogin.forEach(elem => {
   elem.addEventListener('click', () => {
      modalLoginWindow.classList.toggle("show_modal")
   })
})
// close modal login
btnCloseWindowLogin.addEventListener("click", () => {
   modalLoginWindow.classList.toggle("show_modal");
 });

// show and hide modal menu
btnMenu.addEventListener("click", () => {
  modalMenu.classList.toggle("show_modal");
});

btnCloseMenu.addEventListener("click", () => {
  modalMenu.classList.toggle("show_modal");
});
