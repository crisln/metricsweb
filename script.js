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

$(document).ready(function () {
  // Gets the video src from the data-src on each button

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});
