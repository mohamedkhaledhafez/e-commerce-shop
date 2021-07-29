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
