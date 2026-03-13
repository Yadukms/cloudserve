var swiper1 = new Swiper(".first-swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  speed: 9500,
  freeMode: true,
  freeModeMomentum: false,

  breakpoints: {
    0: { slidesPerView: 2, spaceBetween: 20 },
    480: { slidesPerView: 3, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    992: { slidesPerView: 5, spaceBetween: 20 },
    1200: { slidesPerView: 6, spaceBetween: 20 },
  },
});


var swiper2 = new Swiper(".second-swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,

  autoplay: {
    delay: 0,
    reverseDirection: true,    // ← key difference
    disableOnInteraction: false,
  },

  speed: 9500,
  freeMode: true,
  freeModeMomentum: false,

  breakpoints: {
    0: { slidesPerView: 2, spaceBetween: 20 },
    480: { slidesPerView: 3, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    992: { slidesPerView: 5, spaceBetween: 20 },
    1200: { slidesPerView: 6, spaceBetween: 20 },
  },
});
