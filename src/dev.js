const openMenu = document.getElementById("open-menu");

const closeMenu = document.getElementById("close-menu");

const desktopMenu = document.getElementById("desktop-menu");

const mobileMenu = document.getElementById("mobile-menu");

openMenu.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

new Swiper(".swiper", {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
