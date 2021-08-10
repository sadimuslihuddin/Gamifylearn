$("#check").on("click", function(e) {
    var x = document.getElementById('check').checked;
    if ( x == false ){
        document.getElementById('sel').className = "confirm"
        $("#sel").prop('disabled', true);
    }
    else{
        document.getElementById('sel').className = "confirm aktif"
        $("#sel").removeAttr('disabled');        
    };
})