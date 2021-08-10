$("#mySearch").on( "keyup", function(e) {
    var a, i;
    var input = document.getElementById("mySearch");
    var filter = input.value.toUpperCase();
    console.log(filter)
    var ul = document.getElementById("myMenu");
    var li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().includes(filter) && filter !== "") {
        li[i].style.display = "block";
        ul.style.display = "block";
      } else if (!a.innerHTML.toUpperCase().includes(filter)){
        li[i].style.display = "";
      } else{
        ul.style.display = "";
      };
    };
});

$(document).ready(function() {
if ( $(window).width() > 600 ) {
    startCarousel();
} else {
    $('.owl-carousel').addClass('off');
}
});

$(window).resize(function() {
    if ( $(window).width() > 600 ) {
    startCarousel();
    } else {
    stopCarousel();
    }
});

function startCarousel(){
    $('.owl-carousel').owlCarousel({
            loop:false,
            margin:20,
            nav:true,
            items: 5,
            autoWidth:true,
        });
};

function stopCarousel() {
var owl = $('.owl-carousel');
owl.trigger('destroy.owl.carousel');
owl.addClass('off');
}

$(document).click(function(){
$("#menubar .navbar-toggler-icon i").addClass("bi-list");
$("#menubar .navbar-toggler-icon i").removeClass("bi-x");
});

$(document).ready(function() {
    $("#menubar").on('click', function(e) {
    var cek2 = !$("#menudrop").hasClass("show");
    if(cek2){
        $("#menubar .navbar-toggler-icon i").removeClass("bi-list");
        $("#menubar .navbar-toggler-icon i").addClass("bi-x");
    }else{
        $("#menubar .navbar-toggler-icon i").addClass("bi-list");
        $("#menubar .navbar-toggler-icon i").removeClass("bi-x");
    }
    });
});

var notification = $(".bell .unread" ).length;
$("#bell .badge").html(notification);
if(notification>0){$("#bell .badge").removeClass("disappear")};

$("#bell").on('click', function(e){
    $("#bell .badge").html("0");
    if($("#bell .dropdown").hasClass("show")){
        $(".bell>.unread").removeClass("unread");
    };
    if($("#bell .badge").html("0")){
        $("#bell .badge").addClass("disappear");
    }else{$("#bell .badge").removeClass("disappear")}
});

$('.foto-profil[src=""]').hide();
$('.foto-profil:not([src=""])').show();
$('.foto-profil-edit[src=""]').hide();
$('.foto-profil-edit:not([src=""])').show();

