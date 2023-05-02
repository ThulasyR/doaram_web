(function ($) {
  "use strict";
  // Back to top button

  
$(".ngoPanel").click(function(){
    callNGOPanel();
});



  $("input[name=categoryofcause]").click(function () {
    let count = 0; 
      $(this).each(function (i,v) {
        count= $("input[name=categoryofcause]:checked").length;
            $("#checkedNumbers").html(""+count+"/16 selected"); 
            if(count == 16){
              $("input[id=categoryAll]").prop("checked",true);
            }else{
              $("input[id=categoryAll]").prop("checked",false);
            }
      }); 
      
  });

  //*** end of pagination */
  $("input[id=categoryAll]").click(function () {
    if ($(this).prop("checked")) {
      $("input[name=categoryofcause]").each(function () {
        $(this).prop("checked", true);
      });
      $("input[id=categoryAll]").prop("checked",true);
      $("#checkedNumbers").html("16/16 selected");
    } else {
      $("input[name=categoryofcause]").each(function () {
        $(this).prop("checked", false);
        $("input[id=categoryAll]").prop("checked",false);
        $("#checkedNumbers").html("0/16 selected");
      });
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });


  var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider input[type="range"]'),
        value = $('.range-value');
    slider.each(function(){
        value.each(function(){
            var value = $(this).prev().attr('value');
            $(this).html(value+" Rupees");
        });
        range.each(function(){
            var per = ((parseInt(this.value) / parseInt(this.max)) * 100);
            // $(this).css('background','linear-gradient(to right,#E09400 '+per+'%,#FDC24F '+per+'%)');
        });
        range.on('input', function(){
            var per = ((parseInt(this.value) / parseInt(this.max)) * 100);
            $(this).next(value).html(this.value+" Rupees");
            // $(this).css('background','linear-gradient(to right,#E09400 '+per+'%,#FDC24F '+per+'%)');
            // 
        });
    });
};
rangeSlider();



  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var carousel = function () {
    $("#testimonials").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 20,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      items: 2,
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });

    $(".brands").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 20,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      autoplayHoverPause: true,
      items: 3,
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    $("#blog-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 20,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      autoplayHoverPause: true,
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });

    $(".cause-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 10,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true, 
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });

    $("#pressmedia-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 10,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true, 
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    $(".featured-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 10,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true, 
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();
})(jQuery);
