// Slider 1
const swiper1 = new Swiper(".slider1", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  freeMode: true,
  allowTouchMove: false,
});

// Slider 2
const swiper2 = new Swiper(".slider2", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  freeMode: true,
  allowTouchMove: false,
});

// Slider 3
const swiper3 = new Swiper(".slider3", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  freeMode: true,
  allowTouchMove: false,
});

// Pause/Play functionality
let isPlaying = true;
const pausePlayBtn = document.getElementById("pausePlayBtn");

pausePlayBtn.addEventListener("click", () => {
  if (isPlaying) {
    swiper1.autoplay.stop();
    swiper2.autoplay.stop();
    swiper3.autoplay.stop();
    pausePlayBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    isPlaying = false;
  } else {
    swiper1.autoplay.start();
    swiper2.autoplay.start();
    swiper3.autoplay.start();
    pausePlayBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    isPlaying = true;
  }
});

// School slider 
const swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  allowTouchMove: false,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});

// reverse school slider
const swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  allowTouchMove: false,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});

// exhibition feature slider
const swiper6 = new Swiper(".mySwiper6", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".exhibition-features .navigations .swiper-button-next",
    prevEl: ".exhibition-features .navigations .swiper-button-prev",
  },
  speed: 1000, 
  autoplay: {
    delay: 1500, 
    disableOnInteraction: true, 
    pauseOnMouseEnter: true,
  },
  allowTouchMove: true, 
  breakpoints: {
     320: {
      slidesPerView:1,
    },
      376: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 4.8,
    },
  },
});

// custom video controls
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");
  const playPauseBtn = document.querySelector(".play-pause");

  video.removeAttribute("controls");

  playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      video.pause();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  });
});

//on scroll navbar

const mainHead = document.getElementById("mainHead");
const goToTopBtn = document.getElementById("goToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) { 
    mainHead.classList.add("sticky");
    goToTopBtn.classList.add("show");
  } else {
    mainHead.classList.remove("sticky");
    goToTopBtn.classList.remove("show");
  }
});

// Go to top functionality
goToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


