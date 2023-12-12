var swiper = new Swiper(".slides-video", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    pagination: {
      el: ".s-videos .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".s-videos .btn-next",
      prevEl: ".s-videos .btn-prev",
    },
  });