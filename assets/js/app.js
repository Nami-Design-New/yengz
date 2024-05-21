// text trim
$(document).ready(function () {
  $(".service-card h6").each(function () {
    var text = $(this).text();
    if (text.length > 70) {
      var truncatedText =
        $.trim(text).substring(0, 70).split(" ").slice(0, -1).join(" ") + "...";
      $(this).text(truncatedText);
    }
  });
});
//hero swiper
var swiper = new Swiper(".heroSwiper", {
  direction: "vertical",
  effect: "fade",
  speed: 1000,
  pagination: {
    el: ".mainSliderPagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainSliderPrev",
  },
});
//services swiper
var categoriesSwiper = new Swiper(".categories-swiper", {
  loop: true,
  spaceBetween: 30,
  speed: 2000,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    350: {
      slidesPerView: 2,
    },
  },
});
// testimonials slider
var swiper = new Swiper(".testimonilas", {
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
  },
});
let toggler = document.querySelector(".toogler");
let menu = document.querySelector(".small-media-menu");
toggler.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggler.classList.add("close");
  } else {
    toggler.classList.remove("close");
  }
});
$(document).ready(function () {
  //aos Delay
  if ($(window).width() > 768) {
    $("section").each(function () {
      const sectionDivs = $(this).find("[data-aos]");
      sectionDivs.each(function (index) {
        // Check if data-aos-delay is not already set
        if (!$(this).attr("data-aos-delay")) {
          $(this).attr("data-aos-delay", (index + 1) * 100);
        }
      });
    });
  }
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});

var mainSlider = new Swiper(".mainSliderContainer", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  // effect: "fade",
  speed: 500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mainsliderPagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainsliderPrev",
  },
});

var blogSwiper = new Swiper(".blogSwiper", {
  spaceBetween: 10,
  speed: 1000,
  effect: "fade",
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
