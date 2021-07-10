function cek() {
    var x = document.getElementById('check').checked;
    if ( x == false ){
        document.getElementById('sel').className = "confirm"
        document.getElementById('form').action = "#"
    }
    else{
        document.getElementById('sel').className = "confirm aktif"
        document.getElementById('form').action = "confirmedGL.html"
    }
    }

