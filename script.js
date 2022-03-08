$(document).ready(function () {
  $(".my-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,

    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 5
      }
    }
  });
});
