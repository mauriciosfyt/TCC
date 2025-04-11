var swiper = new Swiper(".swiper1", {
  slidesPerView: 3,  
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
      delay: 3000, /* Pequeno aumento para acompanhar a transição */
      disableOnInteraction: false,
  },
  
  speed: 1200, /* Sincronizado com a transição do CSS */
  effect: 'slide',
});

// Carrossel 2
var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
