var hoursEl = document.getElementById("jam");
var minsEl = document.getElementById("menit");
var secondsEl = document.getElementById("detik");
var startTime = localStorage.getItem("startTime");
startTime = new Date(startTime)

const deadline = startTime.setHours(startTime.getHours() + 2);
console.log(deadline)

function countdown() {
    const d = new Date();

    const totalSeconds =  (deadline - d) / 1000;

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

$("#mark").on('click', function(e){
    if (!$(".number.focus").hasClass("flag") ){
        $(".number.focus").addClass("flag");
    }
    else{
        $(".number.focus").removeClass("flag");
    }
    });

$("#hapus").on('click', function(e){
    document.getElementById('a').checked = false;
    document.getElementById('b').checked = false;
    document.getElementById('c').checked = false;
    document.getElementById('d').checked = false;
    document.getElementById('e').checked = false;
})

$("#star-1").on('click', function(e){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star";
})

$("#star-2").on('click', function(e){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
})

$("#star-3").on('click', function(e){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
    document.getElementById('star-3').className = "star-rating fa fa-star"
})

$("#star-4").on('click', function(e){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
    document.getElementById('star-3').className = "star-rating fa fa-star"
    document.getElementById('star-4').className = "star-rating fa fa-star"
})

$("#star-5").on('click', function(e){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
    document.getElementById('star-3').className = "star-rating fa fa-star"
    document.getElementById('star-4').className = "star-rating fa fa-star"
    document.getElementById('star-5').className = "star-rating fa fa-star"
})


$("#check").on('click', function(e){
    var x = document.getElementById('check').checked;
    if ( x == true ){
        document.getElementById('sel').className = "btn finish mr-4"
        document.getElementById('sel').href = "#feedback"
    }
    else{
        document.getElementById('sel').className = "btn unfinish mr-4"
        document.getElementById('sel').href = "#selesai"
    };
})