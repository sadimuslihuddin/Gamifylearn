const xhr = new XMLHttpRequest;
const navbar = document.getElementById("nav");
const sidebar = document.getElementById("sidebar");
const footerbar = document.getElementById("footerbar");
const checkout = document.getElementById("checkout");
const materi = document.getElementById("materi");
const ujian = document.getElementById("ujian");
const kontenMateri = document.getElementById("kontenMateri");
const kontenSoal = document.getElementById("kontenSoal");
const navbarPrem = document.getElementById("navbarPrem");
const sidebarKur = document.getElementById("sidebarKur");
const pagerKur = document.getElementById("pagerkur");
const CSheet = document.getElementById("CSheet");
const product = document.getElementById("product");

const searchData = [
    {
        item: "Daftar Try Out Gratis",
        link: "tryoutGL.htmlz"
    },
    {
        item: "Daftar Try Out Murah",
        link: "#"
    },
    {
        item: "Daftar Try Out Mahal",
        link: "#"
    },
    {
        item: "Materi Kuliah",
        link: "materiGL.html"
    },
]

function searchTemplate(search){
    return `
    <li><a href="${search.link}">${search.item}</a></li>
    `
}

const bellData = [
    {
        name: "Gamifylearn",
        time: "15.45",
        title: "Pembayaranmu terverifikasi!",
        content: "Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna anim...",
        status: "unread",
    },
    {
        name: "Gamifylearn",
        time: "13.45",
        title: "Pembayaranmu terverifikasi!",
        content: "Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna anim...",
        status: "read",
    }
]

function bellTemplate(bell){
    return `
      <div class="bell-content ${bell.status}">
        <div class="dropdown-item" href="#">
          <span>
            ${bell.name}
          </span>
          <i class="fa fa-circle" aria-hidden="true" style="font-size:5px;padding:0 3px;"></i>
          <span>
            ${bell.time}
          </span>
        </div>
        <div class="dropdown-title">
          <span>
          ${bell.title}
          </span>
        </div>
        <div class="dropdown-content">
          ${bell.content}
        </div>
      </div>
    `
}

const checkoutData = [
    {
        produk: "Try Out 1 Fisika Dasar 1A",
        jumlah: "1",
        harga: "Rp 10.000,00",
        diskon: "-",
        hargaAkhir: "Rp 10.000,00",
    },
    {
        produk: "Try Out 1 Kimia Dasar 1A",
        jumlah: "1",
        harga: "Rp 10.000,00",
        diskon: "10%",
        hargaAkhir: "Rp 9.000,00",
    },
]

function checkoutTemplate(check){
    return `
    <tr>
      <td>${check.produk}</td>
      <td>${check.jumlah}</td>
      <td>${check.harga}</td>
      <td>${check.diskon}</td>
      <td>${check.hargaAkhir}</td>
    </tr>
    `
}

const materiData = [
    {
        judulMateri: "Matematika Dasar IA",
        progress: "11%",
        lastProgress: "Pembuktian Limit",
        judulcheatsheet1: "Cheatsheet UTS Matemarika Dasar IA",
        judulcheatsheet2: "Cheatsheet UAS Matemarika Dasar IA",
        kurikulum:[{
            subjudul: "1. Bilangan Real dan Nilai Mutlak",
            href: "kontenmateriGL.html",
            },
            {
            subjudul: "Latihan Soal Bilangan Real dan Nilai Mutlak",
            href: "kontensoalGL.html",
            },
            {
            subjudul: "2. Sistem Koordinat Grafik Persamaan Fungsi Trigonometri",
            href: "kontenmateriGL.html",
            }
        ]
    },

    {
        judulMateri: "Fisika Dasar IA",
        progress: "23%",
        lastProgress: "Momen Inersia",
        judulcheatsheet1: "Cheatsheet UTS Fisika Dasar IA",
        judulcheatsheet2: "Cheatsheet UAS Fisika Dasar IA",
        kurikulum: ""
    },

    {
        judulMateri: "Kimia Dasar IA",
        progress: "43%",
        lastProgress: "Stoikiometri",
        judulcheatsheet1: "Cheatsheet UTS Kimia Dasar IA",
        judulcheatsheet2: "Cheatsheet UAS Kimia Dasar IA",
        kurikulum: ""
    },
]

function materiTemplate(materi){
    return `
    <div class="item">
        <a class="listmateri btn" href="kurikulumGL.html">
            <div class="d-flex mb-1">
                <div class="judul">${materi.judulMateri}</div>
                <i class="fa fa-circle pt-3 mx-3" style="color:white;font-size:8px;"></i>
                <div class="judul">${materi.progress}</div>
            </div>
            <div class="d-flex">
                <p class="subjudul mr-2">Terakhir:</p>
                <p class="subjudul">${materi.lastProgress}</p>
            </div>
        </a>
        <div class="cheatsheet">
            <div id="chs" class="chs btn"><img src="assets/Paper.svg"></div>
            <p class="teks col px-0 mt-1" style="margin-left: -12px">Cheatsheet</p>
        </div>
        <div id="cheatbar" class="disappear">
            <div>
                <div class="ch d-flex mt-4">
                    <p class="teks">${materi.judulcheatsheet1}</p>
                    <div class="ml-auto d-flex">
                        <div>
                            <a class="read-online btn mr-2" href="cheatsheetGL.html">Baca Online</a>
                        </div>
                        <div class="dropdown">
                            <a class="download btn" id="download" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Download<i class="fa fa-chevron-down ml-2" style=""></i></a>
                            <div class="dropdown-menu mt-1" aria-labelledby="download">
                              <div class="download-content">
                                <a class="dropdown-item" href="#">
                                  <span>English<i class="lni lni-download ml-3" style="font-size: 14px;"></i></span>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <span>Indonesia<i class="lni lni-lock ml-3" style="font-size: 14px;"></i></span>
                                </a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line mt-3"></div>
            </div>
            <div>
                <div class="ch d-flex mt-3">
                    <p class="teks">${materi.judulcheatsheet2}</p>
                    <div class="ml-auto d-flex">
                        <div>
                            <a class="read-online btn mr-2" href="cheatsheetGL.html">Baca Online</a>
                        </div>
                        <div class="dropdown">
                            <a class="download btn" id="download" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Download<i class="fa fa-chevron-down ml-2" style=""></i></a>
                            <div class="dropdown-menu mt-1" aria-labelledby="download">
                              <div class="download-content">
                                <a class="dropdown-item" href="profilGL.html">
                                  <span>English<i class="lni lni-download ml-3" style="font-size: 14px;"></i></span>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <span>Indonesia<i class="lni lni-lock ml-3" style="font-size: 14px;"></i></span>
                                </a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line mt-3"></div>
            </div>
        </div>
    </div>
    `
}

//sidebar kurikulum
var kurikulumData = materiData.map(function(materi){
 return materi.kurikulum;
})

var kurikulumDataMath = kurikulumData[0];
var titleindoc = $(".title").text();
var sidebarkur = kurikulumDataMath.map(function(materi){
    var x = materi.subjudul;
    if (x == titleindoc){
        console.log(x);
        return `
            <div class="now my-3">
                <a class="subbab btn d-flex align-items-center px-4" href="`+ materi.href +`">
                    <div class="subbab-capt mr-3">`+ x + `</div>
                    <img class="ml-auto" src="assets/materi.svg">
                </a>
            </div>
            `
    } else {
        return `
            <div class="my-3">
                <a class="subbab btn d-flex align-items-center px-4" href="`+ materi.href +`">
                    <div class="subbab-capt mr-3">`+ x + `</div>
                    <img class="ml-auto" src="assets/checklist.svg">
                </a>
            </div>
            `
    }
}).join("")

var sidebarkurM = kurikulumDataMath.map(function(materi){
    var x = materi.subjudul;
    if (x == titleindoc){
        return `
            <div class="now">
                <a class="subbab-capt" href="`+ materi.href +`">
                    `+ x + `
                </a>
            </div>
            `
    }else{
        return `
            <div>
                <a class="subbab-capt" href="`+ materi.href +`">
                    `+ x + `
                </a>
            </div>
            `
    }
}).join("")

if(checkout===null){
}else{
checkout.innerHTML = `
${checkoutData.map(checkoutTemplate).join("")}
`
};

if(materi===null){
}else{
materi.innerHTML = `
${materiData.map(materiTemplate).join("")}
`
};

if(pagerKur===null){
}else{
pagerkur.innerHTML = `
<a class="back" href="kurikulumGL.html"><i class="fa fa-chevron-left mx-3"></i>Kembali</a>
<form class="pager d-flex justify-content-center px-0 mr-2" style="margin-top: 20px;margin-bottom: 30px;">
    <button type="submit" class="prev mr-2">
        <i class="bi bi-chevron-left"></i>
    </button>
    <div class="dropkur dropdown">
          <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="bi bi-chevron-down mr-2"></i>${titleindoc}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            ${sidebarkurM}
          </div>
    </div>
    <button type="submit" class="next ml-2">
        <i class="bi bi-chevron-right"></i>
    </button>
</form>
`
}

var responsive_viewport = $(window).width();
if(responsive_viewport > 768){

if(navbar===null){
}else{
navbar.innerHTML = `
<a class="navbar-brand mb-1" href="#">
    <img id="brand-logo" src="assets/gamifylearn 1.png" alt="">
</a>
<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav ml-3 w-100">
        <li class="nav-item mr-auto">
            <div class="search-grup d-flex">
              <form class="d-inline form-inline mw-100 navbar-search">
                <div class="input-group">
                  <input type="text" id="mySearch" class="form-control border-0 small text-light" placeholder="Ketik 'Teorema limit'..." aria-label="Search" aria-describedby="basic-addon2" onkeyup="Search()">
                  <div class="input-group-append">
                    <button id="search" class="btn search-icon" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
                <div class="list">
                  <ul id="myMenu">
                    ${searchData.map(searchTemplate).join("")}
                  </ul>
                </div>
              </form>
            </div>
        </li>
        <li class="nav-item ml-3">
            <a class="nav-link px-0 py-0" href="#">
                <div class="foto-profil-main">
                    <img class="foto-profil" src="" alt="">
                </div>
            </a>
        </li>
        <li class="nav-item dropdown mx-1">
            <a id="setting" class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-chevron-down"></i>
            </a>
            <div class="setting dropdown-menu" aria-labelledby="setting">
              <div class="setting-content">
                <a class="dropdown-item" href="profilGL.html">
                  <i class="fas fa-user-alt mr-2"></i>
                  <span>Profil</span>
                </a>
                <a class="dropdown-item" href="checkoutGL.html">
                  <i class="fas fa-shopping-cart mr-2" style="font-size: 12px;"></i>
                  <span>Checkout</span>
                </a>
                <a class="dropdown-item" href="index.html">
                  <i class="fas fa-sign-out-alt mr-2"></i>
                  <span>Keluar</span>
                </a>
              </div>
            </div>
        </li>
        <li class="nav-item dropdown mx-3">
            <a id="bell" class="nav-link py-auto" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="far fa-bell"></i>
              <span class="badge">${bellData.length}</span>
            </a>
            <div class="bell dropdown-menu" aria-labelledby="bell">
                ${bellData.map(bellTemplate).join("")}
            </div>
        </li>
        <li class="nav-item mx-3">
            <a class="nav-link py-auto" href="checkoutGL.html">
                <i class="fas fa-shopping-cart"></i>
                <span class="badge">${checkoutData.length}</span>
            </a>
        </li>
        <li class="nav-item mx-3">
            <form><button id="nav-btn" class="btn btn-primary px-4" formaction="index.html"><i class="far fa-gem mr-1"></i>GO PREMIUM</button></form>
        </li>
    </ul>
</div>
`

if(!$("#pagerkur").hasClass("d-none")){
$("#pagerkur").addClass("d-none");
};
};

if(navbarPrem===null){
}else{
navbarPrem.innerHTML = `
<a class="navbar-brand mb-1" href="#">
    <img id="brand-logo" src="assets/gamifylearn 1.png" alt="">
</a>
<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav ml-3 w-100">
        <li class="nav-item ml-auto">
            <a class="nav-link px-0 py-0" href="#">
                <div class="foto-profil-main">
                    <img class="foto-profil" src="" alt="">
                </div>
            </a>
        </li>
        <li class="nav-item dropdown mx-1">
            <a id="setting" class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-chevron-down"></i>
            </a>
            <div class="setting dropdown-menu" aria-labelledby="setting">
              <div class="setting-content">
                <a class="dropdown-item" href="profilGL.html">
                  <i class="fas fa-user-alt mr-2"></i>
                  <span>Profil</span>
                </a>
                <a class="dropdown-item" href="checkoutGL.html">
                  <i class="fas fa-shopping-cart mr-2" style="font-size: 12px;"></i>
                  <span>Checkout</span>
                </a>
                <a class="dropdown-item" href="index.html">
                  <i class="fas fa-sign-out-alt mr-2"></i>
                  <span>Keluar</span>
                </a>
              </div>
            </div>
        </li>
        <li class="nav-item dropdown mx-3">
            <a id="bell" class="nav-link py-auto" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="far fa-bell"></i>
              <span class="badge">${bellData.length}</span>
            </a>
            <div class="bell dropdown-menu" aria-labelledby="bell">
                ${bellData.map(bellTemplate).join("")}
            </div>
        </li>
        <li class="nav-item mx-3">
            <a class="nav-link py-auto" href="checkoutGL.html">
                <i class="fas fa-shopping-cart"></i>
                <span class="badge">${checkoutData.length}</span>
            </a>
        </li>
    </ul>
</div>
`
};

if(sidebar===null){
}else{
sidebar.innerHTML = `
<ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
    <li class="nav-item homegl mx-3">
        <a class="nav-link d-flex ml-2" href="homeGL.html">
            <svg class="mr-3" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" />
            </svg>
            Beranda
        </a>
    </li>
    <li class="nav-item profilgl mx-3">
        <a class="nav-link d-flex ml-2" href="profilGL.html">
            <svg class="mr-3" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg>
            Profil
        </a>
    </li>
    <li class="nav-item materigl mx-3">
        <a class="nav-link d-flex ml-2" href="materiGL.html">
            <i class="fas fa-book mr-3"></i>
            Mata Kuliah
        </a>
    </li>
    <li class="nav-item rankgl mx-3">
        <a class="nav-link d-flex ml-2" href="rankingGL.html">
            <i class="fas fa-medal mr-3"></i>
            Ranking
        </a>
    </li>
    <li class="nav-item tryoutgl mx-3">
        <a class="nav-link d-flex ml-2" href="tryoutGL.html">
            <svg class="mr-3" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
            Try Out
        </a>
    </li>
    <li class="nav-item skorgl mx-3">
        <a class="nav-link d-flex ml-2" href="skorGL.html">
            <i class="fas fa-book-open mr-3"></i>
            Skor & Pembahasan
        </a>
    </li>
</ul>
`
};

if(sidebarKur===null){
}else{
sidebarKur.innerHTML = `
<div class="px-3">
    <a class="back" href="kurikulumGL.html"><i class="fa fa-chevron-left mx-3"></i>Kembali</a>
    <div class="d-flex mt-4">
        <div class="bullet-title mr-3"></div>
        <h1 class="b-title">Matematika Dasar IA</h1>
    </div>
    <div class="mt-4">
        ${sidebarkur}
    </div>
</div>
`
};

if(kontenMateri===null){
}else{
kontenMateri.innerHTML = `
    <div class="d-flex mt-3">
        <div class="panel">
            <img class="panel-img" src="" alt="">
            <span class="btn resize">
                <img src="assets/resize.svg" alt="">
            </span>
        </div>
        <div class="slide-grup ml-3">
            <div class="slide-content">
                <div class="slide"><img class="slide-img" src="" alt=""></div>
                <div class="slide"><img class="slide-img" src="" alt=""></div>
                <div class="slide"><img class="slide-img" src="" alt=""></div>
                <div class="slide"><img class="slide-img" src="" alt=""></div>
                <div class="slide"><img class="slide-img" src="" alt=""></div>
                <div class="slide"><img class="slide-img" src="" alt=""></div>
                <div class="slide"><img class="slide-img" src="" alt=""></div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
        <div class="pager d-flex justify-content-between">
            <button type="submit" class="prev">
                <i class="fa fa-chevron-left"></i>
            </button>
            <div class="d-flex">
                <div class="thispage">1</div>
                <div class="slash mx-1">/</div>
                <div class="total">15</div>
            </div>
            <button type="submit" class="next">
                <i class="fa fa-chevron-right"></i>
            </button>
        </div>
    </div>
`
};

if(kontenSoal===null){
}else{
kontenSoal.innerHTML = `
<div class="d-flex mt-3">
    <div class="panel">
        <div class="cardbody soal mb-4">
              <h4>Soal No. 1</h4>
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
              <form class="d-flex justify-content-end mt-3">
                  <button class="submit" type="submit" formaction="reviewGL.html">SUBMIT</button>
              </form>
        </div>
    </div>
</div>
<form class="d-flex justify-content-center mt-3">
    <div class="pager d-flex justify-content-between">
        <button type="submit" class="prev">
            <i class="fa fa-chevron-left"></i>
        </button>
        <div class="d-flex">
            <div class="thispage">1</div>
            <div class="slash mx-1">/</div>
            <div class="total">15</div>
        </div>
        <button type="submit" class="next">
            <i class="fa fa-chevron-right"></i>
        </button>
    </div>
</form>
`
};

if(CSheet===null){
}else{
CSheet.innerHTML = `
<div>
    <div class="path d-flex">
        <a href="materiGL.html" style="color: white; font-size:16px;">Mata Kuliah</a>
        <p><i class="fa fa-chevron-right mx-3" style="color: white;"></i></p>
        <a href="kurikulumGL.html" style="color: white; font-size:16px;">Matematika Dasar IA</a>
        <p><i class="fa fa-chevron-right mx-3" style="color: white;"></i></p>
        <a href="#" style="color: #6FCF97; font-size:16px;">Cheatsheet UTS Matematika Dasar IA</a>
    </div>
    <div class="ch d-flex mt-4">
        <div class="bullet-title mr-3"></div>
        <h1 class="b-title">Cheatsheet UTS Matematika Dasar IA</h1>
        <div class="ml-auto">
            <div class="dropdown">
                <a class="download btn" id="download" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Download<i class="fa fa-chevron-down ml-2" style=""></i></a>
                <div class="dropdown-menu mt-1" aria-labelledby="download">
                  <div class="download-content">
                    <a class="dropdown-item" href="#">
                      <span>English<i class="lni lni-download ml-3" style="font-size: 14px;"></i></span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span>Indonesia<i class="lni lni-lock ml-3" style="font-size: 14px;"></i></span>
                    </a>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-4">
        <div class="panel">
            <img src="" alt="">
        </div>
    </div>
</div>
`
};

if(product===null){
}else{
product.innerHTML = `
<div class="path d-flex">
    <a href="tryoutGL.html" style="color: white; font-size:16px;">Try Out UTS - UAS</a>
    <p><i class="fa fa-chevron-right mx-3" style="color: white;"></i></p>
    <a href="#" style="color: #6FCF97; font-size:16px;">UTS 1 Fisika Dasar IA</a>
</div>
<div style="margin-top:28px;">
    <h4 style="letter-spacing: 0.3px;font-family: 'DM Sans';font-weight: 500;font-size: 28px;line-height: 31px;color: white;">UTS 1 Fisika Dasar IA</h4>
    <h5 class="mt-3" style="font-family: DM Sans;font-size: 18px;font-weight: 400;line-height: 19px;color: #6FCF97;">Semester 1</h5>
    <div>
        <div class="row mx-0">
            <div class="item d-flex" style="margin-top: 24px;">
                <img class="card-img" src="https://picsum.photos/300/200">
                <div class="ml-5" style="color: white;">
                    <p class="title-desc">Deskripsi & Peraturan</p>
                    <ol class="desc">
                        <li>Try Out mencakup 30 butir soal pilihan ganda</li>
                        <li>Try Out dilaksanakan selama 120 menit</li>
                        <li>Jika telah selesai mengerjakan, wajib menekan tombol SUBMIT agar jawaban tersimpan di server</li>
                        <li>Try Out dilaksanakan secara close book dan dilarang melakukan kerja sama dalam bentuk apapun</li>
                    </ol>
                    <div class="price d-flex">
                        <p cLass="mr-3">Harga: </p>
                        <p>Rp 10.000,00</p>
                    </div>
                    <form class="pesan">
                        <button class="langganan" formaction="index.html"><i class="far fa-gem mr-1"></i>GO PREMIUM</button>
                        <button class="checkout" formaction="checkoutGL.html"><i class="fa fa-shopping-cart mr-1"></i>CHECKOUT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
`
}

}else if(responsive_viewport <= 425){

    if(navbar===null){
    }else{
    navbar.innerHTML = `
    <div class="mobile-nav w-100">
        <div class="d-flex justify-content-center">
            <div class="dropdown d-flex align-items-center position-static mr-auto">
                <a id="menubar" class="navbar-toggler mr-auto" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false" data-backdrop="static" data-keyboard="false">
                    <span class="navbar-toggler-icon"><i class="bi bi-list" style="color: white; font-size: 20px;"></i></span>
                </a>
                <div id="menudrop" class="dropdown-menu dropdown-menu-mega">
                    <div class="container">
                        <div class="row d-flex w-100 mx-0">
                            <div class="search-grup mx-auto d-flex">
                              <form class="row d-flex mx-0 mw-100 navbar-search">
                                <div class="input-group">
                                  <input type="text" id="mySearch" class="form-control border-0 small text-light" placeholder="Ketik 'Teorema limit'..." aria-label="Search" aria-describedby="basic-addon2" onkeyup="Search()">
                                  <div class="input-group-append">
                                    <button id="search" class="btn search-icon" type="button">
                                      <i class="fas fa-search fa-sm"></i>
                                    </button>
                                  </div>
                                </div>
                                <div class="list col-12 px-0">
                                  <ul id="myMenu">
                                    ${searchData.map(searchTemplate).join("")}
                                  </ul>
                                </div>
                              </form>
                            </div>
                            <div class="line-menu mx-auto"></div>
                            <div class="col-12 px-0 d-flex" style="margin-left: 24px; margin-top: 20px;">
                                <a class="px-0 py-0" href="#">
                                    <div class="foto-profil-main">
                                        <img class="foto-profil" src="" alt="">
                                    </div>
                                </a>
                                <div class="px-4 py-1">
                                    <h4 id="name" class="nama-profil">Muslihuddin Sa'di S</h4>
                                    <h5 id="email" class="email-profil">muslihuddinsadi@gmail.com</h5>
                                </div>
                            </div>
                            <div style="margin-bottom: 100%">
                                <ul>
                                    <li><a href="profilGL.html">Profil</a></li>
                                    <li><a href="homeGL.html">Beranda</a></li>
                                    <li><a href="checkoutGL.html">Go Premium<i class="far fa-gem ml-2"></i></a></li>
                                    <li><a href="index.html" style="color: rgba(255, 255, 255, 0.75); font-weight: 400;">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a class="navbar-brand mb-1 ml-4" href="#">
                    <img id="brand-logo" src="assets/gamifylearn mini.png" alt="">
                </a>
            </div>
            <div class="d-flex ml-auto">
                <div class="nav-item dropdown">
                    <a id="bell" class="nav-link py-auto" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="bi bi-bell" style="font-size: 18px"></i>
                      <span class="badge">${bellData.length}</span>
                    </a>
                    <div class="bell dropdown-menu" aria-labelledby="bell">
                        ${bellData.map(bellTemplate).join("")}
                    </div>
                </div>
                <div class="nav-item">
                    <a class="nav-link py-auto" href="checkoutGL.html">
                        <i class="bi bi-cart" style="font-size: 18px"></i>
                        <span class="badge">${checkoutData.length}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `
    };

    if(navbarPrem===null){
    }else{
    navbarPrem.innerHTML = `
    <div class="mobile-nav w-100">
        <div class="d-flex justify-content-center">
            <div class="dropdown d-flex align-items-center position-static mr-auto">
                <a id="menubar" class="navbar-toggler mr-auto" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false" data-backdrop="static" data-keyboard="false">
                    <span class="navbar-toggler-icon"><i class="bi bi-list" style="color: white; font-size: 20px;"></i></span>
                </a>
                <div id="menudrop" class="dropdown-menu dropdown-menu-mega">
                    <div class="container">
                        <div class="row d-flex w-100 mx-0">
                            <div class="col-12 px-0 d-flex" style="margin-left: 24px; margin-top: 20px;">
                                <a class="px-0 py-0" href="#">
                                    <div class="foto-profil-main">
                                        <img class="foto-profil" src="" alt="">
                                    </div>
                                </a>
                                <div class="px-4 py-1">
                                    <h4 id="name" class="nama-profil">Muslihuddin Sa'di S</h4>
                                    <h5 id="email" class="email-profil">muslihuddinsadi@gmail.com</h5>
                                </div>
                            </div>
                            <div style="margin-bottom: 100%">
                                <ul>
                                    <li><a href="profilGL.html">Profil</a></li>
                                    <li><a href="homeGL.html">Beranda</a></li>
                                    <li><a href="index.html" style="color: rgba(255, 255, 255, 0.75); font-weight: 400;">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a class="navbar-brand mb-1 ml-4" href="#">
                    <img id="brand-logo" src="assets/gamifylearn mini.png" alt="">
                </a>
            </div>
            <div class="d-flex ml-auto">
                <div class="nav-item dropdown">
                    <a id="bell" class="nav-link py-auto" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="bi bi-bell" style="font-size: 18px"></i>
                      <span class="badge">${bellData.length}</span>
                    </a>
                    <div class="bell dropdown-menu" aria-labelledby="bell">
                        ${bellData.map(bellTemplate).join("")}
                    </div>
                </div>
                <div class="nav-item">
                    <a class="nav-link py-auto" href="checkoutGL.html">
                        <i class="bi bi-cart" style="font-size: 18px"></i>
                        <span class="badge">${checkoutData.length}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `
    };

    if(footerbar===null){
    }else{
    footerbar.innerHTML = `
    <div class="d-flex justify-content-around" style="height: 100%;">
        <div class="align-self-center">
            <a class="nav-link homegl" href="homeGL.html">
                <svg aria-label="Home" class="homegl-svg" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
            </a>
        </div>
        <div class="align-self-center">
            <a class="nav-link materigl" href="materiGL.html">
                <i class="bi bi-layout-sidebar"></i>
            </a>
        </div>
        <div class="align-self-center">
            <a class="nav-link rankgl" href="rankingGL.html">
                <i class="bi bi-award"></i>
            </a>
        </div>
        <div class="align-self-center">
            <a class="nav-link tryoutgl" href="tryoutGL.html">
                <svg aria-label="New Message" class="tryoutgl-svg" fill="#262626" height="22" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
            </a>
        </div>
        <div class="align-self-center">
            <a class="nav-link skorgl" href="skorGL.html">
                <i class="bi bi-book"></i>
            </a>
        </div>
    </div>
    `
    };

    if(kontenMateri===null){
    }else{
    kontenMateri.innerHTML = `
        <div class="mt-3">
            <div class="panel">
                <img class="panel-img" src="" alt="">
                <span class="btn resize">
                    <img src="assets/resize.svg" alt="">
                </span>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <div class="pager d-flex justify-content-between">
                    <button type="submit" class="prev">
                        <i class="fa fa-chevron-left"></i>
                    </button>
                    <div class="d-flex">
                        <div class="thispage">1</div>
                        <div class="slash mx-1">/</div>
                        <div class="total">15</div>
                    </div>
                    <button type="submit" class="next">
                        <i class="fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="slide-grup mt-3">
                <div class="slide-content">
                    <div class="slide"><img class="slide-img" src="" alt=""></div>
                    <div class="slide"><img class="slide-img" src="" alt=""></div>
                    <div class="slide"><img class="slide-img" src="" alt=""></div>
                    <div class="slide"><img class="slide-img" src="" alt=""></div>
                    <div class="slide"><img class="slide-img" src="" alt=""></div>
                    <div class="slide"><img class="slide-img" src="" alt=""></div>
                    <div class="slide"><img class="slide-img" src="" alt=""></div>
                </div>
            </div>
        </div>
    `
    };

    if(kontenSoal===null){
    }else{
    kontenSoal.innerHTML = `
    <div class="mt-3">
        <form class="d-flex justify-content-center mt-3">
            <div class="pager d-flex justify-content-between">
                <button type="submit" class="prev">
                    <i class="fa fa-chevron-left"></i>
                </button>
                <div class="d-flex">
                    <div class="thispage">1</div>
                    <div class="slash mx-1">/</div>
                    <div class="total">15</div>
                </div>
                <button type="submit" class="next">
                    <i class="fa fa-chevron-right"></i>
                </button>
            </div>
        </form>
        <div class="panel mt-3">
            <div class="cardbody soal mb-4">
                  <h4>Soal No. 1</h4>
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
                  <form class="d-flex justify-content-end mt-3">
                      <button class="submit" type="submit" formaction="reviewGL.html">SUBMIT</button>
                  </form>
            </div>
        </div>
    </div>

    `
    };

    if(CSheet===null){
    }else{
    CSheet.innerHTML = `
    <div>
        <div class="path row mx-0 px-0">
            <a href="materiGL.html" style="color: white; font-size:16px;">Mata Kuliah</a>
            <div class="row mx-0 px-0">
                <p><i class="fa fa-chevron-right mx-2" style="color: white;"></i></p>
                <a href="kurikulumGL.html" style="color: white; font-size:16px;">Matematika Dasar IA</a>
            </div>
            <div class="row mx-0 px-0">
                <p><i class="fa fa-chevron-right mx-2" style="color: white;"></i></p>
                <a href="#" style="color: #6FCF97; font-size:16px;">Cheatsheet UTS Matematika Dasar IA</a>
            </div>
        </div>
        <div class="ch d-flex mt-4">
            <div class="bullet-title mr-3"></div>
            <h1 class="b-title">Cheatsheet UTS Matematika Dasar IA</h1>
        </div>
        <div class="ch d-flex">
            <div class="ml-auto">
                <div class="dropdown">
                    <a class="download btn" id="download" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Download<i class="fa fa-chevron-down ml-2" style=""></i></a>
                    <div class="dropdown-menu mt-1" aria-labelledby="download">
                      <div class="download-content">
                        <a class="dropdown-item" href="#">
                          <span>English<i class="lni lni-download ml-3" style="font-size: 14px;"></i></span>
                        </a>
                        <a class="dropdown-item" href="#">
                            <span>Indonesia<i class="lni lni-lock ml-3" style="font-size: 14px;"></i></span>
                        </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <div class="panel">
                <img src="" alt="">
            </div>
        </div>
    </div>
    `
    };

    if(product===null){
    }else{
    product.innerHTML = `
    <div class="path row px-0 mx-0">
        <a href="tryoutGL.html" style="color: white; font-size:16px;">Try Out UTS - UAS</a>
        <div class="row px-0 mx-0">
            <p><i class="fa fa-chevron-right mx-2" style="color: white;"></i></p>
            <a href="#" style="color: #6FCF97; font-size:16px;">UTS 1 Fisika Dasar IA</a>
        </div>
    </div>
    <div style="margin-top:28px;">
        <h4 style="letter-spacing: 0.3px;font-family: 'DM Sans';font-weight: 500;font-size: 28px;line-height: 31px;color: white;">UTS 1 Fisika Dasar IA</h4>
        <h5 class="mt-3" style="font-family: DM Sans;font-size: 18px;font-weight: 400;line-height: 19px;color: #6FCF97;">Semester 1</h5>
        <div>
            <div class="row mx-0">
                <div class="item" style="margin-top: 24px;">
                    <img class="card-img" src="https://picsum.photos/300/200">
                    <div class="mt-3" style="color: white;">
                        <p class="title-desc">Deskripsi & Peraturan</p>
                        <ol class="desc">
                            <li>Try Out mencakup 30 butir soal pilihan ganda</li>
                            <li>Try Out dilaksanakan selama 120 menit</li>
                            <li>Jika telah selesai mengerjakan, wajib menekan tombol SUBMIT agar jawaban tersimpan di server</li>
                            <li>Try Out dilaksanakan secara close book dan dilarang melakukan kerja sama dalam bentuk apapun</li>
                        </ol>
                        <div class="price d-flex">
                            <p cLass="mr-3">Harga: </p>
                            <p>Rp 10.000,00</p>
                        </div>
                        <form class="pesan d-flex">
                            <button class="langganan" formaction="index.html"><i class="far fa-gem mr-1"></i>GO PREMIUM</button>
                            <button class="checkout" formaction="checkoutGL.html"><i class="fa fa-shopping-cart mr-1"></i>CHECKOUT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    };

    $("#chs img").attr("src", "assets/Paper-m.svg");
    if($("#pagerkur").hasClass("d-none")){
    $("#pagerkur").removeClass("d-none");
    };

};

$(document).click(function(){
  $("#menubar .navbar-toggler-icon i").addClass("bi-list");
  $("#menubar .navbar-toggler-icon i").removeClass("bi-x");
});

$(document).ready(function() {
    $("#menubar").on('click', function(e) {
    var cek2 = !$("#menudrop").hasClass("show");
    if(cek2){
        $("#menubar .navbar-toggler-icon i").removeClass("bi-list");
        $("#menubar .navbar-toggler-icon i").addClass("bi-x");
    }else{
        $("#menubar .navbar-toggler-icon i").addClass("bi-list");
        $("#menubar .navbar-toggler-icon i").removeClass("bi-x");
    }
    });
});

//carousel
$(document).ready(function() {
  if ( $(window).width() > 600 ) {
    startCarousel();
  } else {
    $('.owl-carousel').addClass('off');
  }
});

$(window).resize(function() {
    if ( $(window).width() > 600 ) {
      startCarousel();
    } else {
      stopCarousel();
    }
});

function startCarousel(){
     $('.owl-carousel').owlCarousel({
            loop:false,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:3
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                },
            }
        });
  };

function stopCarousel() {
  var owl = $('.owl-carousel');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}



