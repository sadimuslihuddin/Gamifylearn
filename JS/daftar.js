
function cek() {
    var x = document.getElementById('check').checked;
    if ( x == true ){
        document.getElementById('signup').className = "signup btn-primary"
        $(".signup").removeAttr('disabled');
    }
    else{
        document.getElementById('signup').className = "signup"
        $(".signup").prop('disabled', true);
    }
    }