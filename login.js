
$(document).ready(function(){
    $("#login").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        var error = true;

        $.ajax({
            type: "POST",
            url: "data.json",
            dataType: "json",
            success: function(data){
                $.each(data,function(key,value){
                    if(email == value.email && password == value.password){
                        error = false;
                    }
                });

                if (error == false){
                    sessionStorage.setItem("user", email);
                    if($.trim(sessionStorage.getItem("user"))){
                       location.replace("homeGL.html");
                       console.log(sessionStorage.getItem("user"));
                    }
                } else {
                    $('#email').val('');
                    $("#password").val('');
                }
            }
        });

        return false;
    });
});