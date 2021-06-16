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

$(document).ready(function(){
        if($(".foto-profil").attr('src')=='').{
          $(".foto-profil")).addClass("disappear");
        }else{
          $(".foto-profil")).removeClass("disappear");
        };
});
