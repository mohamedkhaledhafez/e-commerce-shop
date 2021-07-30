const menu = document.querySelector(".menu"),
  navOpen = document.querySelector(".humburger"),
  navClose = document.querySelector(".close"),
  navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;

// To open menu
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

// To close menu
navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Add Fix-nav Class to nav
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];

links.map((link) => {
  if (!link) return;
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const el = document.getElementById(id);

    let position = el.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  });
});

// Make gsap
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: 200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// Count subtotal & total price
let count = 0;

// select quantity of the products
var quantity = document.getElementById("quantity");

// Increase the quantity of products
function add() {
  quantity.value = ++count;
}

// Decrease the quantity of products
function remove() {
  quantity.value = --count;
  if (count <= 0) {
    quantity.value = 0;
    count = 0;
  }
}

// select price of the product
