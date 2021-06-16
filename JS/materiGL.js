$(".chs").on('click', function(e){
    if($(this).parent().parent().find("#cheatbar").hasClass("disappear")){
    $(this).parent().parent().find("#cheatbar").removeClass("disappear");
    }else{
    $(this).parent().parent().find("#cheatbar").addClass("disappear");
    };
});

