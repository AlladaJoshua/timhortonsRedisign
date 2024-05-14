var swiper1 = new Swiper("#swiper1 .slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
      el: "#swiper1 .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: "#swiper1 .swiper-button-next",
      prevEl: "#swiper1 .swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

var swiper2 = new Swiper("#swiper2 .slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
      el: "#swiper2 .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: "#swiper2 .swiper-button-next",
      prevEl: "#swiper2 .swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

var swiper3 = new Swiper("#swiper3 .slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
      el: "#swiper3 .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: "#swiper3 .swiper-button-next",
      prevEl: "#swiper3 .swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

  document.addEventListener('DOMContentLoaded', function () {
      var moveUpButton = document.getElementById('move-up-btn');

      // Show or hide the button based on scroll position
      function toggleMoveUpButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          moveUpButton.classList.add('active');
        } else {
          moveUpButton.classList.remove('active');
        }

        // Fade out button when at the top
        if (document.documentElement.scrollTop === 0) {
          moveUpButton.style.opacity = '0';
        } else {
          moveUpButton.style.opacity = '1';
        }
      }

      // Initial check on page load
      toggleMoveUpButton();

      // Toggle button visibility on scroll
      window.onscroll = toggleMoveUpButton;

      // Smooth scroll to top when button is clicked
      moveUpButton.addEventListener('click', function () {
        scrollToTop(600); // Scroll duration in milliseconds
      });

      function scrollToTop(duration) {
        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scroll() {
          var currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
          var progress = Math.min(1, (currentTime - startTime) / duration);

          window.scrollTo(0, easeInOutQuad(start, 0, progress));

          if (progress < 1) {
            requestAnimationFrame(scroll);
          }
        }

        function easeInOutQuad(start, end, progress) {
          return start + (end - start) * (progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress);
        }

        requestAnimationFrame(scroll);
      }
    });