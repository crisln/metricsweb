$(document).ready(function () {
  $(".my-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    merge: true,
    nav: true,
    navText: [
      "<span class='nav-main-slider-btn fa fa-chevron-left'></span>",
      "<span class='nav-main-slider-btn fa fa-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 5
      }
    }
  });
});
