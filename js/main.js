// var NGO_PANEL = "http://localhost:3000/";
var NGO_PANEL = "www.doaram.com/DoAram_CRM.html";

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Modal Video
  var $videoSrc;
  $(".btn-play").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  $("#videoModal").on("shown.bs.modal", function (e) {
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#videoModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", $videoSrc);
  });

  // Project carousel

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
})(jQuery);

function callNGOPanel() {
  var width = screen.width; //$(window).width();
  var height = screen.height; //$(window).height();
  window.open(
    NGO_PANEL,
    "NGO_PANEL",
    "left=0,top=0,width=" +
      width +
      ",height=" +
      height +
      ",resizable=no,status=no,toolbar=no,menubar=no,location=no,offscreenBuffering=true"
  );
}
$(document).ready(function () {
  
  $(".owl_content").owlCarousel({
    rewindNav: false,
    addClassActive: true, //important
    mouseDrag: false,
    afterAction: function add_mid_class(el) {
      $(".owl-item")
        .removeClass("middle")
        .removeClass("middle_beside")
        .removeClass("next_to_mid")
        .removeClass("prev_to_mid");
      var middle_item = Math.floor($(".active").length / 2);
      middle_item--;
      $(".active")
        .eq(middle_item - 1)
        .addClass("middle_beside");
      $(".active").eq(middle_item).addClass("middle");
      $(".active")
        .eq(middle_item + 1)
        .addClass("middle_beside");
      $(".active")
        .eq(middle_item + 1)
        .nextAll()
        .addClass("next_to_mid");
      $(".active")
        .eq(middle_item - 1)
        .prevAll()
        .addClass("prev_to_mid");
    },
  });

  var owl = $(".owl_content").data("owlCarousel");
  $(".owl_wrapper .next").click(function () {
    owl.next();
  });
  $(".owl_wrapper .prev").click(function () {
    owl.prev();
  });
});
