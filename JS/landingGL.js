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
