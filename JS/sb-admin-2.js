 var responsive_viewport = $(window).width();
if(responsive_viewport > 768){
(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    jQuery.fx.off = false;
    $("body").toggleClass("sidebar-toggled");
    if (!$(".sidebar").hasClass("toggled")){
    $(".sidebar").animate({left: '-200px'}, "fast").toggleClass("toggled", true, 1).animate({left: '0px'}, "fast");
    } else {
    $(".sidebar").hide(0).animate({left: '-200px'}, "fast").toggleClass("toggled", false, 1).show(12).animate({left: '0px'}, "fast");
    }
    $(".sidebar .avatar-data").toggleClass("disappear")
    $(".main-content").removeClass("ml-sm-5")
    $(".main-content").toggleClass("move-right")
    $(".sidebar-brand-text").toggleClass("disappear")
    $(".sidebar-brand-text-small").removeClass("disappear")
    $(".avatar-picture").removeClass("mb-4")
    $(".avatar-picture").toggleClass("mb-0")
    $(".sidebarToggleTop").toggleClass("disappear")
    $(".sidebarToggleBottom").removeClass("disappear")
    if (!$(".sidebar").hasClass("toggled")){
      $(".main-content").toggleClass("ml-sm-5")
      $(".main-content").removeClass("move-right")
      $(".sidebar-brand-text-small").toggleClass("disappear")
      $(".avatar-picture").toggleClass("mb-4")
      $(".sidebarToggleBottom").addClass("disappear")
    }

    $(".sidebar span").toggleClass("disappear")
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });


  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if($(window).width() >= 768 ){
      $('.sidebar .avatar-data').show();
    }
    if ($(window).width() < 768 ) {
      $('.sidebar .collapse').collapse('hide');
      $('.sidebar .avatar-data').hide();
    };

    // Toggle the side navigation when window is resized below 480px

  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict
};

$(window).resize(function() {
   var responsive_viewport = $(window).width();
   //console.log(responsive_viewport);
   if (responsive_viewport > 768) {
      $(".sidebar").animate({
            left: '0px'
        });
   };

});

if (responsive_viewport < 800) {
        $(document).ready(function(){
          $(".sidebarToggleTop").click(function(){
            $(".sidebar").animate({
                left: '-250px'
            });
          });
        });

        $(document).ready(function(){
          $(".navbar-toggler").click(function(){
            $(".sidebar").animate({
                left: '0px'
            });
            $(".search-grup .input-group-append .btn").addClass("search-icon");
            $(".search-grup .form-inline").removeClass("ml-5");
            $(".search-grup .form-control").hide().removeClass("appear");

          });
        });

   };


(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#more1").on('click', function(e){
    if(!$(".TO .owl-item2").hasClass("appear")){
        $(".TO .owl-item2").fadeIn().addClass("appear", 10);
        $(document).ready(function(){
            // Change text of button element
            $("#more1").html("TUTUP");
        });
    }
    else{
        $(".TO .owl-item2").fadeOut().removeClass("appear", 10);
        $(document).ready(function(){
            // Change text of button element
            $("#more1").html("LIHAT LEBIH LANJUT");
        });
    }
  });

  $("#more2").on('click', function(e){
    if(!$(".ON .owl-item2").hasClass("appear")){
        $(".ON .owl-item2").fadeIn().addClass("appear", 10);
        $(document).ready(function(){
            // Change text of button element
            $("#more2").html("TUTUP");
        });
    }
    else{
        $(".ON .owl-item2").fadeOut().removeClass("appear", 10);
        $(document).ready(function(){
            // Change text of button element
            $("#more2").html("LIHAT LEBIH LANJUT");
        });
    }
  });

})(jQuery);

if(responsive_viewport < 800){
    (function($) {
      "use strict"; // Start of use strict

      // Toggle the side navigation
      $("#search").on('click', function(e){
        $(".search-grup .input-group-append .btn").toggleClass("search-icon");
        $(".search-grup .form-inline").toggleClass("ml-5");
        $(".search-grup .form-control").animate({width: 'toggle'}).toggleClass("appear");
        $(".sidebar").animate({left: '-250px'});
      });

    })(jQuery);
};

var notification = $(".bell .unread" ).length;
$(".badge").html(notification);
if(notification>0){$(".badge").removeClass("disappear")};

$("#bell").on('click', function(e){
        $("#bell .badge").html("0");
        if($(".dropdown").hasClass("show")){
            $(".bell>.unread").removeClass("unread");
        };
        if($("#bell .badge").html("0")){
            $(".badge").addClass("disappear");
        }else{$(".badge").removeClass("disappear")}
    });


