$("#check").on("click", function(e){
    var x = document.getElementById('check').checked;
    if ( x == true ){
        document.getElementById('signup').className = "signup btn-primary"
        $(".signup").removeAttr('disabled');
    }
    else{
        document.getElementById('signup').className = "signup"
        $(".signup").prop('disabled', true);
    }
});

$('#showpass').on('click', function(e) {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
})