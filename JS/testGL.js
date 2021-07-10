const ujian = document.getElementById("ujian");
const pembahasan = document.getElementById("pembahasan");
const ujianData = [
    {
        judul: "Try Out UTS II FISIKA B 2021",
        soal: 25,
        waktu: 120
    },
];

const pembahasanData = [
    {
        judul: "Try Out UTS II FISIKA B 2021",
        "1": "Pada konsepnya, soal ini menggunakan konsep deret dan barisan, di mana terlihat pola penambahan untuk setiap n+1 jarak.<br><b>Diketahui: </b><br>a1 = 835 km"
    },
]

const koreksiData = ["b" ,"s", "b", "s", "s", "b", "b", "s", "s", "b", "b" ,"s", "b", "s", "s", "b", "b", "s", "s", "b", "b", "b", "s", "s", "b"]

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
var nomor = ujianData[0].soal;
var soalData = range(1, nomor); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

var thisnumber = 0;
function ujianSoalTemplate(soalData){
    if (soalData == thisnumber+1){
        return `
        <div class="px-0">
            <button class="number focus">
                ${soalData}
            </button>
        </div>
        `
    }else{
        return `
        <div class="px-0">
            <button class="number">
                ${soalData}
            </button>
        </div>
        `
    };
};

function koreksiSoalTemplate(soalData){
    if (koreksiData[soalData-1] == "b"){
        return `
        <div class="px-0">
            <button class="number true">
                ${soalData}
            </button>
        </div>
        `
    }else{
        return `
        <div class="px-0">
            <button class="number wrong">
                ${soalData}
            </button>
        </div>
        `
    };
};

function ujianTemplate(ujianData){
        return `
        <nav class="navbar navbar-default fixed-top">
            <a class="navbar-brand mb-1" href="#">
                <img id="brand-logo" src="assets/gamifylearn 1.png" alt="">
            </a>
        </nav>

        <div class="row d-flex mx-0 justify-content-center" style="margin-top: 100px;">
            <div class="col-xl-7 col-lg-12 col-md-12 col-xs-12 h-100 mb-md-4 mb-xs-0 px-0 mr-xl-3">
                <div class="title d-flex mb-4">
                    <span>${ujianData.judul}</span>
                    <button class="mark ml-auto">RAGU-RAGU</button>
                </div>
                <div class="cardbody soal mb-4">
                      <h4>Soal No. ${soalData[thisnumber]}</h4>
                      <p>Amir mengemudi mobil menempuh jarak 835 km dalam waktu 6 hari. Hari pertama ia menempuh 175 km, hari kedua 100 km, hari ketiga 115 km, hari keempat 125 km, dan hari kelima 165 km. Berapa kilometerkah jarak yang ditempuh pada hari enam?</p>
                      <div class="radio">
                          <div class="mt-2">
                              <label for="a">
                                  <input type="radio" name="opt" id="a" value="a">
                                  <span  onclick="numberfill()" class="btn">A</span>
                              </label>
                              <span class="ml-2">185 Km</span>
                          </div>
                          <div class="mt-2">
                              <label for="b">
                                  <input type="radio" name="opt" id="b" value="b">
                                  <span onclick="numberfill()" class="btn">B</span>
                              </label>
                              <span class="ml-2">175 Km</span>
                          </div>
                          <div class="mt-2">
                              <label for="c">
                                  <input type="radio" name="opt" id="c" value="c">
                                  <span onclick="numberfill()" class="btn">C</span>
                              </label>
                              <span class="ml-2">165 Km</span>
                          </div>
                          <div class="mt-2">
                              <label for="d">
                                  <input type="radio" name="opt" id="d" value="d">
                                  <span onclick="numberfill()" class="btn">D</span>
                              </label>
                              <span class="ml-2">155 Km</span>
                          </div>
                          <div class="mt-2">
                              <label for="e">
                                  <input type="radio" name="opt" id="e" value="e">
                                  <span onclick="numberfill()" class="btn">E</span>
                              </label>
                              <span class="ml-2">145 Km</span>
                          </div>
                      </div>
                      <div class="d-flex justify-content-end">
                          <div onclick="emptyFill()" class="hapus-jawaban btn d-flex mr-2 mt-2 w-auto">HAPUS JAWABAN</div>
                      </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-12 col-md-12 col-xs-12 right-content mb-4">
                <div class="time mt-2 mb-2 px-auto py-auto d-flex justify-content-around">
                    <p class="my-auto">Sisa waktu : </p>
                    <div>
                        <span id="jam">00</span>
                        <span>:</span>
                        <span id="menit">00</span>
                        <span>:</span>
                        <span id="detik">00</span>
                    </div>
                </div>
                <form class="c-answer mb-4 px-0">
                    <div class="nomor">
                        <div class="row d-flex justify-content-center">
                            ${soalData.map(ujianSoalTemplate).join("")}
                        </div>
                    </div>
                </form>

                <form class="pager d-flex mb-4 px-0">
                    <button type="submit" class="prev mr-2">
                        <i class="fa fa-angle-left mr-2"></i>
                        Sebelumnya
                    </button>
                    <button type="submit" class="next">
                        Selanjutnya
                        <i class="fa fa-angle-right ml-2"></i>
                    </button>
                </form>

                <form class="col-12 px-0">
                   <a href="#selesai">
                       <button type="submit" class="save text-center" formaction="#selesai">
                           SELESAI
                       </button>
                   </a>
                </form>

                <div class="form-popup" id="selesai">
                  <form action="/action_page.php" class="form-container">
                    <h3 class="mb-4">Selesai mengerjakan sesi ini?</h3>
                    <h5>Anda tidak dapat mengubah jawaban lagi setelah  menyelesaikan sesi ini. Centang kolom di bawah untuk menyelesaikan.</h5>
                    <div class="row mt-4">
                        <label class="container-checkbox ml-2 mr-2" onclick="cek()">
                          <input type="checkbox" id="check">
                          <span class="btn checkmark" onclick="cek()"></span>
                        </label>
                        <h4 class="ml-2 mt-1">Saya sudah selesai mengerjakan soal</h4>
                    </div>
                    <div class="d-flex flex-row-reverse mt-4">
                        <a class="btn cancel" href="#"">Batal</a>
                        <a id="sel" class="btn unfinish mr-4" href="#selesai">Selesai</a>
                    </div>
                  </form>
                </div>
                <div id="cover">
                </div>
                <div class="form-popup2" id="feedback">
                  <form action="/action_page.php" class="form-container2">
                    <h4 class="mb-4 text-center">Kamu mau kasi bintang berapa <br> untuk to kali ini?</h4>
                    <div class="star row d-flex justify-content-center">
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-1" value="1" onclick="star1()"></i>
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-2" value="2" onclick="star2()"></i>
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-3" value="3" onclick="star3()"></i>
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-4" value="4" onclick="star4()"></i>
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-5" value="5" onclick="star5()"></i>
                    </div>
                    <div class="row d-flex justify-content-center mt-4">
                        <textarea></textarea>
                        <span></span>
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                        <button type="submit" class="btn kritik" formaction="homeGL.html">
                            Simpan dan Selesai
                        </button>
                    </div>
                  </form>
                </div>
                <div id="cover2"></div>
            </div>
        </div>
        `
}

function ujianTemplateMobile(ujianData){
        return `
        <div class="row d-flex mx-0 justify-content-center" style="margin-top: 20px;">
            <div class="col-xl-7 col-lg-12 col-md-12 col-xs-12 h-100 mb-md-4 mb-xs-0 px-0 mr-xl-3">
                <div class="title">
                    <span>${ujianData.judul}</span>
                </div>
                <div class="mt-3 title d-flex">
                    <form class="pager d-flex mb-2 px-0 mr-2">
                        <button type="submit" class="prev mr-2">
                            <i class="bi bi-chevron-left"></i>
                        </button>
                        <button type="submit" class="next">
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    </form>
                    <div class="dropdown mr-2">
                        <button class="drop-nomor" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-chevron-down mr-2"></i>${soalData[thisnumber]}</button>
                        <form class="dropdown-menu c-answer mb-4 px-0">
                            <div class="nomor">
                                <div class="row d-flex justify-content-center">
                                    ${soalData.map(ujianSoalTemplate).join("")}
                                </div>
                            </div>
                        </form>
                    </div>
                    <button class="mark ml-auto">RAGU-RAGU</button>
                </div>
                <div>
                    <div class="time mt-2 mb-2 px-auto py-auto d-flex justify-content-start">
                        <p class="my-auto">Sisa waktu : </p>
                        <div class="ml-2">
                            <span id="jam">00</span>
                            <span>:</span>
                            <span id="menit">00</span>
                            <span>:</span>
                            <span id="detik">00</span>
                        </div>
                    </div>
                </div>
                <div class="cardbody soal mb-4">
                      <h4>Soal No. ${soalData[thisnumber]}</h4>
                      <p>Amir mengemudi mobil menempuh jarak 835 km dalam waktu 6 hari. Hari pertama ia menempuh 175 km, hari kedua 100 km, hari ketiga 115 km, hari keempat 125 km, dan hari kelima 165 km. Berapa kilometerkah jarak yang ditempuh pada hari enam?</p>
                      <div class="radio">
                          <div class="mt-2">
                              <label for="a">
                                  <input type="radio" name="opt" id="a" value="a">
                                  <span  onclick="numberfill()" class="btn">A</span>
                              </label>
                              <span class="ml-2">185 Km</span>
                          </div>
                          <div class="mt-2">
                              <label for="b">
                                  <input type="radio" name="opt" id="b" value="b">
                                  <span onclick="numberfill()" class="btn">B</span>
                              </label>
                              <span class="ml-2">175 Km</span>
                          </div>
                          <div class="mt-2">
                              <label for="c">
                                  <input type="radio" name="opt" id="c" value="c">
                                  <span onclick="numberfill()" class="btn">C</span>
                              </label>
                              <span class="ml-2">165 Km</span>
                          </div>
                          <div class="mt-2">
                              <label for="d">
                                  <input type="radio" name="opt" id="d" value="d">
                                  <span onclick="numberfill()" class="btn">D</span>
                              </label>
                              <span class="ml-2">155 Km</span>
                          </div>
                          <div class="mt-2">
                              <label for="e">
                                  <input type="radio" name="opt" id="e" value="e">
                                  <span onclick="numberfill()" class="btn">E</span>
                              </label>
                              <span class="ml-2">145 Km</span>
                          </div>
                      </div>
                      <div class="d-flex justify-content-end">
                          <div onclick="emptyFill()" class="hapus-jawaban btn d-flex mr-2 mt-2 w-auto">HAPUS JAWABAN</div>
                      </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-12 col-md-12 col-xs-12 right-content mb-4">

                <form class="col-12 px-0">
                   <a href="#selesai">
                       <button type="submit" class="save text-center" formaction="#selesai">
                           SELESAI
                       </button>
                   </a>
                </form>

                <div class="form-popup" id="selesai">
                  <form action="/action_page.php" class="form-container">
                    <h3 class="mb-4">Selesai mengerjakan sesi ini?</h3>
                    <h5>Anda tidak dapat mengubah jawaban lagi setelah  menyelesaikan sesi ini. Centang kolom di bawah untuk menyelesaikan.</h5>
                    <div class="row mt-4">
                        <label class="container-checkbox ml-2 mr-2" onclick="cek()">
                          <input type="checkbox" id="check">
                          <span class="btn checkmark" onclick="cek()"></span>
                        </label>
                        <h4 class="ml-2 mt-1">Saya sudah selesai mengerjakan soal</h4>
                    </div>
                    <div class="d-flex flex-row-reverse mt-4">
                        <a class="btn cancel" href="#"">Batal</a>
                        <a id="sel" class="btn unfinish mr-4" href="#selesai">Selesai</a>
                    </div>
                  </form>
                </div>
                <div id="cover">
                </div>
                <div class="form-popup2" id="feedback">
                  <form action="/action_page.php" class="form-container2">
                    <h4 class="mb-4 text-center">Kamu mau kasi bintang berapa <br> untuk to kali ini?</h4>
                    <div class="star row d-flex justify-content-center">
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-1" value="1" onclick="star1()"></i>
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-2" value="2" onclick="star2()"></i>
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-3" value="3" onclick="star3()"></i>
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-4" value="4" onclick="star4()"></i>
                        <i class="star-blank fa fa-star" aria-hidden="true" id="star-5" value="5" onclick="star5()"></i>
                    </div>
                    <div class="row d-flex justify-content-center mt-4">
                        <textarea></textarea>
                        <span></span>
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                        <button type="submit" class="btn kritik" formaction="homeGL.html">
                            Simpan dan Selesai
                        </button>
                    </div>
                  </form>
                </div>
                <div id="cover2"></div>
            </div>
        </div>
        `
}

function pembahasanContentTemplate1(ujianData){
    return `
    <h4>Soal No. ${soalData[thisnumber]}</h4>
      <p>Amir mengemudi mobil menempuh jarak 835 km dalam waktu 6 hari. Hari pertama ia menempuh 175 km, hari kedua 100 km, hari ketiga 115 km, hari keempat 125 km, dan hari kelima 165 km. Berapa kilometerkah jarak yang ditempuh pada hari enam?</p>
      <div class="radio">
          <div class="mt-2">
              <label for="a">
                  <input type="radio" name="opt" id="a" value="a" disabled>
                  <span class="btn">A</span>
              </label>
              <span class="ml-2">185 Km</span>
          </div>
          <div class="mt-2">
              <label for="b">
                  <input type="radio" name="opt" id="b" value="b" disabled>
                  <span class="btn user-wrong">B</span>
              </label>
              <span class="ml-2">175 Km</span>
          </div>
          <div class="mt-2">
              <label for="c">
                  <input type="radio" name="opt" id="c" value="c" disabled>
                  <span class="btn true">C</span>
              </label>
              <span class="ml-2">165 Km</span>
          </div>
          <div class="mt-2">
              <label for="d">
                  <input type="radio" name="opt" id="d" value="d" disabled>
                  <span class="btn">D</span>
              </label>
              <span class="ml-2">155 Km</span>
          </div>
          <div class="mt-2">
              <label for="e">
                  <input type="radio" name="opt" id="e" value="e" disabled>
                  <span class="btn">E</span>
              </label>
              <span class="ml-2">145 Km</span>
          </div>
      </div>
  `
}

function pembahasanContentTemplate2(pembahasanData){
    var x = pembahasanData[thisnumber+1];
    console.log(thisnumber+1)
    return `
    <h4>Soal No. ${soalData[thisnumber]}</h4>
      <p>Amir mengemudi mobil menempuh jarak 835 km dalam waktu 6 hari. Hari pertama ia menempuh 175 km, hari kedua 100 km, hari ketiga 115 km, hari keempat 125 km, dan hari kelima 165 km. Berapa kilometerkah jarak yang ditempuh pada hari enam?</p>
      <div class="radio teks">
          <h4 style="font-style: italic;">Pembahasan</h4>
          <p>
              `+ x +`
          </p>
      </div>
    `
}

function pembahasanTemplate(ujian){
        return `
        <nav class="navbar navbar-default fixed-top">
            <a class="navbar-brand mb-1" href="#">
                <img id="brand-logo" src="assets/gamifylearn 1.png" alt="">
            </a>
        </nav>

        <div class="row d-flex mx-0 justify-content-center" style="margin-top: 100px;">
            <div class="col-xl-7 col-lg-12 col-md-12 col-xs-12 h-100 mb-md-4 mb-xs-0 px-0 mr-xl-3">
                <div class="title d-flex mb-4">
                    <span><a href="skorGL.html"><i class="fa fa-arrow-left mr-3"></i></a>${ujian.judul}</span>
                </div>
                <div id="pembahasanContent" class="cardbody soal mb-4">
                </div>
            </div>
            <div class="col-xl-4 col-lg-12 col-md-12 col-xs-12 right-content mb-4">
                <div class="time mt-2 mb-2 px-auto py-auto d-flex justify-content-around">
                    <p class="my-auto">Sisa waktu : </p>
                    <div>
                        <span>00</span>
                        <span>:</span>
                        <span>00</span>
                        <span>:</span>
                        <span>00</span>
                    </div>
                </div>
                <form class="c-answer mb-4 px-0">
                    <div class="nomor">
                        <div class="row d-flex justify-content-center">
                            ${soalData.map(koreksiSoalTemplate).join("")}
                        </div>
                    </div>
                </form>

                <form class="pager d-flex mb-4 px-0">
                    <button type="submit" class="prev mr-2">
                        <i class="fa fa-angle-left mr-2"></i>
                        Sebelumnya
                    </button>
                    <button type="submit" class="next">
                        Selanjutnya
                        <i class="fa fa-angle-right ml-2"></i>
                    </button>
                </form>

                <form class="col-12 px-0">
                       <button type="button" class="save text-center" id="changeP">
                           <i class="fas fa-book-open mr-2" style="color:white;"></i>CEK PEMBAHASAN
                       </button>
                </form>
            </div>
        </div>
        `
}

function pembahasanTemplateMobile(ujian){
        return `
        <div class="row d-flex mx-0 justify-content-center" style="margin-top: 20px;">
            <div class="col-xl-7 col-lg-12 col-md-12 col-xs-12 h-100 mb-md-4 mb-xs-0 px-0 mr-xl-3">
                <div class="title">
                    <span><a href="skorGL.html"><i class="fa fa-arrow-left mr-3"></i></a>${ujian.judul}</span>
                </div>
                <div class="mt-3 title d-flex">
                    <form class="pager d-flex mb-2 px-0 mr-2">
                        <button type="button" class="prev mr-2">
                            <i class="bi bi-chevron-left"></i>
                        </button>
                        <button type="button" class="next">
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    </form>
                    <div class="dropdown mr-2">
                        <button class="drop-nomor" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-chevron-down mr-2"></i>${soalData[thisnumber]}</button>
                        <form class="dropdown-menu c-answer mb-4 px-0">
                            <div class="nomor">
                                <div class="row d-flex justify-content-center">
                                    ${soalData.map(koreksiSoalTemplate).join("")}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <div class="time mt-2 mb-2 px-auto py-auto d-flex justify-content-start">
                        <p class="my-auto">Sisa waktu : </p>
                        <div class="ml-2">
                            <span>00</span>
                            <span>:</span>
                            <span>00</span>
                            <span>:</span>
                            <span>00</span>
                        </div>
                    </div>
                </div>
                <div id="pembahasanContent" class="cardbody soal mb-4">
                </div>
            </div>
            <div class="col-xl-4 col-lg-12 col-md-12 col-xs-12 right-content mb-4">
                <form class="col-12 px-0">
                       <button type="button" class="save text-center" id="changeP">
                           <i class="fas fa-book-open mr-2" style="color:white;"></i>CEK PEMBAHASAN
                       </button>
                </form>
            </div>
        </div>
        `
}

var responsive_viewport = $(window).width();
if(responsive_viewport > 768){

if(ujian === null){
}else{
ujian.innerHTML = `
${ujianData.map(ujianTemplate).join("")}
`
};

if(pembahasan === null){
}else{
pembahasan.innerHTML = `
${ujianData.map(pembahasanTemplate).join("")}
`
};

}else if(responsive_viewport <= 425){

if(ujian === null){
}else{
ujian.innerHTML = `
${ujianData.map(ujianTemplateMobile).join("")}
`
};

if(pembahasan === null){
}else{
pembahasan.innerHTML = `
${ujianData.map(pembahasanTemplateMobile).join("")}
`
};
};

const pembahasanContent = document.getElementById("pembahasanContent");
var change = document.getElementById("changeP");
console.log(change.innerHTML)
$("#changeP").on('click', function(e){
    if(pembahasanContent === null){
    }else{
        if(!$(".radio").hasClass("teks")){
        pembahasanContent.innerHTML = `
            ${pembahasanData.map(pembahasanContentTemplate2).join("")}
        `
        change.innerHTML = `LIHAT SOAL`
        }else{
        pembahasanContent.innerHTML = `
            ${ujianData.map(pembahasanContentTemplate1).join("")}
        `
        change.innerHTML = `
        <i class="fas fa-book-open mr-2" style="color:white;"></i>CEK PEMBAHASAN
        `
        };
    };
});

if($(".radio").hasClass("teks")){
pembahasanContent.innerHTML = `
    ${pembahasanData.map(pembahasanContentTemplate2).join("")}
`
}else{
pembahasanContent.innerHTML = `
    ${ujianData.map(pembahasanContentTemplate1).join("")}
`
}

$(".pager .next").on('click', function(e){
    thisnumber += 1;
    console.log(thisnumber)
});
$(".pager .prev").on('click', function(e){
    thisnumber -= 1;
    console.log(thisnumber)
});

const hoursEl = document.getElementById("jam");
const minsEl = document.getElementById("menit");
const secondsEl = document.getElementById("detik");

if(hoursEl === null || minsEl === null || secondEl === null){
}else{
Date.prototype.addHours = function(h) {
  this.setHours(this.getHours() + h);
  return this;
}

const deadline = new Date().addHours(2);

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
};

$(".mark").on('click', function(e){
    if (!$(".number.focus").hasClass("flag") ){
        $(".number.focus").addClass("flag");
    }
    else{
        $(".number.focus").removeClass("flag");
    }
    });

function emptyFill() {
    document.getElementById('a').checked = false;
    document.getElementById('b').checked = false;
    document.getElementById('c').checked = false;
    document.getElementById('d').checked = false;
    document.getElementById('e').checked = false;
}

function numberFill(){
    $("number").addClass("focus")
}

function star1(){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star";
}

function star2(){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
}

function star3(){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
    document.getElementById('star-3').className = "star-rating fa fa-star"
}

function star4(){
    document.getElementById('star-1').className = "star-blank fa fa-star"
    document.getElementById('star-2').className = "star-blank fa fa-star"
    document.getElementById('star-3').className = "star-blank fa fa-star"
    document.getElementById('star-4').className = "star-blank fa fa-star"
    document.getElementById('star-5').className = "star-blank fa fa-star"
    document.getElementById('star-1').className = "star-rating fa fa-star"
    document.getElementById('star-2').className = "star-rating fa fa-star"
    document.getElementById('star-3').className = "star-rating fa fa-star"
    document.getElementById('star-4').className = "star-rating fa fa-star"
}

function star5(){
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
}


function cek() {
    var x = document.getElementById('check').checked;
    if ( x == true ){
        document.getElementById('sel').className = "btn finish mr-4"
        document.getElementById('sel').href = "#feedback"
    }
    else{
        document.getElementById('sel').className = "btn unfinish mr-4"
        document.getElementById('sel').href = "#selesai"
    };
}
