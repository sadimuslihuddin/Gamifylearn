$(".chs").on('click', function(e){
    if($(this).parent().parent().find("#cheatbar").hasClass("disappear")){
    $(this).parent().parent().find("#cheatbar").removeClass("disappear");
    }else{
    $(this).parent().parent().find("#cheatbar").addClass("disappear");
    };
});

$(document).ready(function() {
    $(".materigl").addClass("active");
});

var responsive_viewport = $(window).width();
if(responsive_viewport <= 600){
$("#chs img").attr("src", "assets/Paper-m.svg");
}