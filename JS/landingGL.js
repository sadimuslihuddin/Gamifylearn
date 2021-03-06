const landing = document.getElementById("landing");

var responsive_viewport = $(window).width();
if(responsive_viewport > 768){

landing.innerHTML = `
<div>
    <div class="col-12">
        <h1 class="capt-1">More than just learn<br>It's gamifylearn.</h1>
    </div>
    <div class="col-12" style="padding-right: 20%;padding-left: 20%;margin-top: 20px;">
        <h5 class="subcapt-1">Sebuah sistem yang dirancang khusus sebagai One Stop Learning Platform bagi mahasiswa TPB ITB agar mereka dapat mengambis di tahun pertama</h5>
    </div>
    <div class="daftarbtn col-12 text-center mt-5">
        <a class="btn btn-primary px-4 py-2" href="daftar.html">Daftar Sekarang!</a>
    </div>
    <div class="img-1 col-12 text-center mt-5">
        <img src="assets/Dashboard 2.png" style="z-index: 5">
    </div>
</div>
<div class="container mx-0 px-0" style="background: #1D1D42;max-width:100%;">
    <div class="col-12">
        <h1 class="capt-1" style="color: white;">Dirancang khusus untuk kamu</h1>
    </div>
    <div class="col-12" style="padding-right: 20%;padding-left: 20%;margin-top: 20px;">
        <h5 class="subcapt-1">Tahap Persiapan Bersama (TPB) merupakan masa di mana kamu dituntut untuk berjuang untuk yang kedua kalinya. Maka dari itu, rencanakan belajarmu bersama gamifylearn dan raih jurusan impian!</h5>
    </div>
    <div class="threeitem d-flex justify-content-center mt-5">
        <div class="item-1 mx-2 d-flex">
            <i class="fas fa-pen-alt mr-3 mt-1"></i>
            <div>
                <div><b>Try Out Berbasis Online</b></div>
                <div>We’ve helped over 2,500 learners to get into the most popular tech-based lessons platform.</div>
            </div>
        </div>
        <div class="item-1 mx-2 d-flex">
            <i class="fas fa-scroll mr-3 mt-1"></i>
            <div>
                <div><b>Materi Lengkap</b></div>
                <div>Rangkuman kece mata kuliah Matematika, Fisika, dan Kimia berbasis online siap menemani ambismu di manapun, kapanpun.</div>
            </div>
        </div>
        <div class="item-1 mx-2 d-flex">
            <i class="fas fa-user mr-3 mt-1"></i>
            <div>
                <div><b>Mobile Friendly</b></div>
                <div>Works well and very responsive for mobile</div>
            </div>
        </div>
    </div>
    <div class="col-12 text-center mt-5" style="margin-bottom: 150px;">
        <a class="btn btn-primary px-4 py-2" href="login.html">Mulai Sekarang</a>
    </div>
</div>
<div class="container d-flex mx-0 px-0" style="max-width:100%;">
    <div class="col" style="padding-left: 150px;">
        <h2 class="capt-1 mb-4">Fitur super lengkap yang dirancang untuk survive TPB</h2>
        <h5 class="subcapt-1-2">Tidak dapat dipungkiri bahwa terdapat persentase mahasiswa yang tidak lulus TPB. Maka dari itu, kami sediakan fitur super lengkap agar kamu bisa lulus TPB dan masuk jurusan impian.</h5>
        <div class="icon-1 my-3 d-flex">
            <div class="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                <i class="fas fa-pen-alt"></i>
            </div>
            <span class="my-auto">Try Out UTS-UAS</span>
        </div>
        <div class="icon-1 my-3 d-flex">
            <div class="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                <i class="fas fa-scroll"></i>
            </div>
            <span class="my-auto">Rangkuman Materi</span>
        </div>
        <div class="icon-1 my-3 d-flex">
            <div class="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                <i class="fas fa-user"></i>
            </div>
            <span class="my-auto">Gamifyteach</span>
        </div>
    </div>
    <div class="col px-0">
        <img style="margin-top: 127px;" src="assets/Try Out Page 1.png">
    </div>
</div>
<div class="container mx-0 px-0" style="background: #1D1D42;max-width:100%;">
    <div class="col-12 d-flex justify-content-center">
        <img class="mr-5" src="assets/Group 117.png" style="margin-left: 100px">
        <div>
            <h2 class="capt-1 ml-5" style="color: white;">Ambis dimanapun. <br>kapanpun.</h2>
            <h5 class="subcapt-1-2 mx-5">Tidak dapat dipungkiri bahwa terdapat persentase mahasiswa yang tidak lulus TPB. Maka dari itu, kami sediakan fitur super lengkap agar kamu bisa lulus TPB dan masuk jurusan impian.</h5>
        </div>
    </div>
</div>
<div class="container mx-0 px-0" style="background: #F7F8FA;max-width:100%;">
    <div class="col-12">
        <h1 class="capt-1">1000+ mahasiswa telah <br>mengambis bersama kami</h1>
    </div>
    <div class="col-12" style="padding-right: 20%;padding-left: 20%;margin-top: 20px;">
        <h5 class="subcapt-1">Begitu banyak mahasiswa yang memperjuangkan masa TPB nya bersama kami, sekarang giliranmu untuk bergabung</h5>
    </div>
    <div class="kesan" style="margin-top: 60px; margin-bottom: 149px;">
        <div class="d-flex justify-content-center mb-4">
            <div class="card mx-3">
                <div class="d-flex">
                    <div class="profile-img">
                        <img src="" alt="">
                    </div>
                    <div>
                        <div class="nama">Akang</div>
                        <div class="fakultas">FMIPA</div>
                    </div>
                </div>
                <div class="caption">
                    Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                </div>
            </div>
            <div class="card mx-3">
                <div class="d-flex">
                    <div class="profile-img">
                        <img src="" alt="">
                    </div>
                    <div>
                        <div class="nama">Akang</div>
                        <div class="fakultas">FMIPA</div>
                    </div>
                </div>
                <div class="caption">
                    Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                </div>
            </div>
            <div class="card mx-3">
                <div class="d-flex">
                    <div class="profile-img">
                    </div>
                    <div>
                        <div class="nama">Akang</div>
                        <div class="fakultas">FMIPA</div>
                    </div>
                </div>
                <div class="caption">
                    Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class="card mx-3">
                <div class="d-flex">
                    <div class="profile-img">
                    </div>
                    <div>
                        <div class="nama">Akang</div>
                        <div class="fakultas">FMIPA</div>
                    </div>
                </div>
                <div class="caption">
                    Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                </div>
            </div>
            <div class="card mx-3">
                <div class="d-flex">
                    <div class="profile-img"></div>
                    <div>
                        <div class="nama">Akang</div>
                        <div class="fakultas">FMIPA</div>
                    </div>
                </div>
                <div class="caption">
                    Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                </div>
            </div>
            <div class="card mx-3">
                <div class="d-flex">
                    <div class="profile-img">
                        <img src="" alt="">
                    </div>
                    <div>
                        <div class="nama">Akang</div>
                        <div class="fakultas">FMIPA</div>
                    </div>
                </div>
                <div class="caption">
                    Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container mx-0 px-0" style="background: #1D1D42;max-width:100%;">
    <div class="col-12 d-flex justify-content-center">
        <h1 class="capt-1" style="color: white">Maksimalkan keambisanmu dengan fitur premium Gamifylearn</h1>
    </div>
    <div class="col-12" style="padding-right: 10%;padding-left: 10%;margin-top: 20px;">
        <h5 class="subcapt-1" style="color: white;">Akses seluruh materi kuliah berkualitas, ratusan latihan soal dan kuis, Try Out UTS-UAS, dan grup eksklusif hanya dengan merogoh kocek seharga uang jajanmu selama tiga hari</h5>
    </div>
    <div class="d-flex justify-content-center" style="margin-top:80px; margin-bottom:200px">
        <div class="card-price mx-3">
            <div>
                <h1>Newbie</h1>
                <div class="d-flex">
                    <div class="price">Rp 100K</div>
                    <div class="month mt-auto mb-2">/bulan</div>
                </div>
                <div class="paket">Rp 100.000 /bulan</div>
                <div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                </div>
            </div>
            <form class="mt-auto" action="checkoutGL.html">
                <button class="btn">PILIH PAKET NEWBIE</button>
            </form>
        </div>
        <div class="card-price-dark mx-3">
            <div>
                <div class="label">BEST CHOICE</div>
                <h1>Pro</h1>
                <div class="d-flex">
                    <div class="price">Rp 100K</div>
                    <div class="month mt-auto mb-2">/bulan</div>
                </div>
                <div class="paket">Rp 100.000 /bulan</div>
                <div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                </div>
            </div>
            <form class="mt-auto" action="checkoutGL.html">
                <button class="btn">PILIH PAKET NEWBIE</button>
            </form>
        </div>
        <div class="card-price mx-3">
            <div>
                <h1>Beyond</h1>
                <div class="d-flex">
                    <div class="price">Rp 100K</div>
                    <div class="month mt-auto mb-2">/bulan</div>
                </div>
                <div class="paket">Rp 100.000 /bulan</div>
                <div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                </div>
            </div>
            <form class="mt-auto" action="checkoutGL.html">
                <button class="btn">PILIH PAKET NEWBIE</button>
            </form>
        </div>
    </div>
</div>
<div class="container row justify-content-center mx-0 px-0 pt-5" style="background: #1D293F;max-width:100%;">
    <div class="col-4 ml-5">
        <img src="assets/gamifylearn 2.png">
        <h5 class="subcapt-footer mt-2">Begitu banyak mahasiswa yang memperjuangkan masa TPB nya bersama kami, sekarang giliranmu untuk bergabung</h5>
    </div>
    <ul class="col-2">
        <li>
            <p class="subcapt-footer">Produk kami</p>
        </li>
        <li>
            <p class="subcapt-footer">Rangkuman Materi</p>
        </li>
        <li>
            <p class="subcapt-footer">Try Out UTS-UAS</p>
        </li>
        <li>
            <p class="subcapt-footer">Gamifyteach</p>
        </li>
    </ul>
    <ul class="col-2">
        <li>
            <p class="subcapt-footer">Tentang kami</p>
        </li>
        <li>
            <p class="subcapt-footer">Keluarga Gamify</p>
        </li>
    </ul>
    <ul class="col-2 mr-5">
        <li>
            <p class="subcapt-footer">Kontak</p>
        </li>
        <li>
            <p class="subcapt-footer" style="color: #FFD166;">gamifylearn@gmail.com</p>
        </li>
    </ul>
    <ul class="col-12 mt-3">
        <hr class="solid">
        <li class="subcapt-footer ml-3 d-flex">
            © Gamifylearn 2021, All Rights Reserved
            <div class="sosmed d-flex ml-auto">
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </li>
    </ul>
</div>
`

}else if(responsive_viewport <= 425){
landing.innerHTML = `
<div>
    <div class="col-12">
        <h1 class="capt-1">More than just learn<br>It's gamifylearn.</h1>
    </div>
    <div class="col-12" style="padding-right: 20%;padding-left: 20%;margin-top: 20px;">
        <h5 class="subcapt-1">Sebuah sistem yang dirancang khusus sebagai One Stop Learning Platform bagi mahasiswa TPB ITB agar mereka dapat mengambis di tahun pertama</h5>
    </div>
    <div class="daftarbtn col-12 text-center mt-5">
        <a class="btn btn-primary px-4 py-2" href="daftar.html">Daftar Sekarang!</a>
    </div>
    <div class="img-1 col-12 text-center mt-5">
        <img src="assets/mock-up 1.png" style="z-index: 5">
    </div>
</div>
<div class="container mx-0 px-0" style="background: #1D1D42;max-width:100%;">
    <div class="col-12">
        <h1 class="capt-1" style="color: white;">Dirancang khusus untuk kamu</h1>
    </div>
    <div class="col-12" style="padding-right: 20%;padding-left: 20%;margin-top: 20px;">
        <h5 class="subcapt-1">Tahap Persiapan Bersama (TPB) merupakan masa di mana kamu dituntut untuk berjuang untuk yang kedua kalinya. Maka dari itu, rencanakan belajarmu bersama gamifylearn dan raih jurusan impian!</h5>
    </div>
    <div class="threeitem justify-content-center mt-5">
        <div class="item-1 mx-2 d-flex">
            <i class="fas fa-pen-alt mr-3 mt-1"></i>
            <div>
                <div><b>Try Out Berbasis Online</b></div>
                <div>We’ve helped over 2,500 learners to get into the most popular tech-based lessons platform.</div>
            </div>
        </div>
        <div class="item-1 mx-2 d-flex">
            <i class="fas fa-scroll mr-3 mt-1"></i>
            <div>
                <div><b>Materi Lengkap</b></div>
                <div>Rangkuman kece mata kuliah Matematika, Fisika, dan Kimia berbasis online siap menemani ambismu di manapun, kapanpun.</div>
            </div>
        </div>
        <div class="item-1 mx-2 d-flex">
            <i class="fas fa-user mr-3 mt-1"></i>
            <div>
                <div><b>Mobile Friendly</b></div>
                <div>Works well and very responsive for mobile</div>
            </div>
        </div>
    </div>
    <div class="col-12 text-center mt-5" style="margin-bottom: 150px;">
        <a class="btn btn-primary px-4 py-2" href="login.html">Mulai Sekarang</a>
    </div>
</div>
<div class="container mx-0 px-0" style="max-width:100%;">
    <div class="col-12">
        <h1 class="capt-1">Fitur super lengkap yang dirancang untuk survive TPB</h1>
    </div>
    <div class="col-12" style="padding-right: 20%;padding-left: 20%;margin-top: 20px;">
        <h5 class="subcapt-1">Tidak dapat dipungkiri bahwa terdapat persentase mahasiswa yang tidak lulus TPB. Maka dari itu, kami sediakan fitur super lengkap agar kamu bisa lulus TPB dan masuk jurusan impian.</h5>
    </div>
    <div class="col-12">
        <div class="icon-1 my-3 d-flex justify-content-center">
            <div class="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                <i class="fas fa-pen-alt"></i>
            </div>
            <span class="my-auto">Try Out UTS-UAS</span>
        </div>
        <div class="icon-1 my-3 d-flex justify-content-center">
            <div class="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                <i class="fas fa-scroll"></i>
            </div>
            <span class="my-auto">Rangkuman Materi</span>
        </div>
        <div class="icon-1 my-3 d-flex justify-content-center">
            <div class="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                <i class="fas fa-user"></i>
            </div>
            <span class="my-auto">Gamifyteach</span>
        </div>
    </div>
    <div class="col px-0">
        <img src="">
    </div>
</div>
<div class="container mx-0 px-0" style="background: #1D1D42;max-width:100%;">
    <div class="col-12 text-center">
        <img class="mt-5" src="assets/login mockup 1.png" style="">
        <div>
            <h2 class="capt-1 text-center" style="color: white;">Ambis dimanapun. <br>kapanpun.</h2>
            <h5 class="subcapt-1-2 text-center">Tidak dapat dipungkiri bahwa terdapat persentase mahasiswa yang tidak lulus TPB. Maka dari itu, kami sediakan fitur super lengkap agar kamu bisa lulus TPB dan masuk jurusan impian.</h5>
        </div>
    </div>
</div>
<div class="container mx-0 px-0" style="background: #F7F8FA;max-width:100%;">
    <div class="col-12">
        <h1 class="capt-1">1000+ mahasiswa telah <br>mengambis bersama kami</h1>
    </div>
    <div class="col-12" style="padding-right: 20%;padding-left: 20%;margin-top: 20px;">
        <h5 class="subcapt-1">Begitu banyak mahasiswa yang memperjuangkan masa TPB nya bersama kami, sekarang giliranmu untuk bergabung</h5>
    </div>
    <div class="kesan" style="margin-top: 60px; margin-bottom: 149px;">
        <div class="justify-content-center mb-4">
            <div class="card mx-auto my-4">
                <div class="d-flex">
                    <div class="profile-img">
                        <img src="" alt="">
                    </div>
                    <div>
                        <div class="nama">Akang</div>
                        <div class="fakultas">FMIPA</div>
                    </div>
                </div>
                <div class="caption">
                    Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                </div>
            </div>
            <div class="card mx-auto my-4">
                <div class="d-flex">
                    <div class="profile-img">
                        <img src="" alt="">
                    </div>
                    <div>
                        <div class="nama">Akang</div>
                        <div class="fakultas">FMIPA</div>
                    </div>
                </div>
                <div class="caption">
                    Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                </div>
            </div>
            <div class="card mx-auto my-4">
                <div class="d-flex">
                    <div class="profile-img">
                    </div>
                    <div>
                        <div class="nama">Akang</div>
                        <div class="fakultas">FMIPA</div>
                    </div>
                </div>
                <div class="caption">
                    Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container mx-0 px-0" style="background: #1D1D42;max-width:100%;">
    <div class="col-12 d-flex justify-content-center">
        <h1 class="capt-1" style="color: white">Maksimalkan keambisanmu dengan fitur premium Gamifylearn</h1>
    </div>
    <div class="col-12" style="padding-right: 10%;padding-left: 10%;margin-top: 20px;">
        <h5 class="subcapt-1" style="color: white;">Akses seluruh materi kuliah berkualitas, ratusan latihan soal dan kuis, Try Out UTS-UAS, dan grup eksklusif hanya dengan merogoh kocek seharga uang jajanmu selama tiga hari</h5>
    </div>
    <div style="margin-top:80px; margin-bottom:200px">
        <div class="card-price mx-auto">
            <div>
                <h1>Newbie</h1>
                <div class="d-flex">
                    <div class="price">Rp 100K</div>
                    <div class="month mt-auto mb-2">/bulan</div>
                </div>
                <div class="paket">Rp 100.000 /bulan</div>
                <div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                </div>
            </div>
            <form class="mt-auto" action="checkoutGL.html">
                <button class="btn">PILIH PAKET NEWBIE</button>
            </form>
        </div>
        <div class="card-price-dark mx-auto">
            <div>
                <div class="label">BEST CHOICE</div>
                <h1>Pro</h1>
                <div class="d-flex">
                    <div class="price">Rp 100K</div>
                    <div class="month mt-auto mb-2">/bulan</div>
                </div>
                <div class="paket">Rp 100.000 /bulan</div>
                <div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                </div>
            </div>
            <form class="mt-auto" action="checkoutGL.html">
                <button class="btn">PILIH PAKET NEWBIE</button>
            </form>
        </div>
        <div class="card-price mx-auto">
            <div>
                <h1>Beyond</h1>
                <div class="d-flex">
                    <div class="price">Rp 100K</div>
                    <div class="month mt-auto mb-2">/bulan</div>
                </div>
                <div class="paket">Rp 100.000 /bulan</div>
                <div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                    <div class="list"><i class="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                </div>
            </div>
            <form class="mt-auto" action="checkoutGL.html">
                <button class="btn">PILIH PAKET NEWBIE</button>
            </form>
        </div>
    </div>
</div>
<div class="container justify-content-center mx-0 px-3 pt-5" style="background: #1D293F;max-width:100%;">
    <div>
        <img src="assets/gamifylearn 2.png">
        <h5 class="subcapt-footer mt-4">Begitu banyak mahasiswa yang memperjuangkan masa TPB nya bersama kami, sekarang giliranmu untuk bergabung</h5>
    </div>
    <ul class="mt-2">
        <li>
            <p class="subcapt-footer" style="color: white;"><b>Produk kami</b></p>
        </li>
        <li>
            <p class="subcapt-footer">Rangkuman Materi</p>
        </li>
        <li>
            <p class="subcapt-footer">Try Out UTS-UAS</p>
        </li>
        <li>
            <p class="subcapt-footer">Gamifyteach</p>
        </li>
    </ul>
    <ul>
        <li>
            <p class="subcapt-footer" style="color: white;"><b>Tentang kami</b></p>
        </li>
        <li>
            <p class="subcapt-footer">Keluarga Gamify</p>
        </li>
    </ul>
    <ul class="col-2 mr-5">
        <li>
            <p class="subcapt-footer">Kontak</p>
        </li>
        <li>
            <p class="subcapt-footer" style="color: #FFD166;">gamifylearn@gmail.com</p>
        </li>
    </ul>
    <ul class="mt-3">
        <hr class="solid">
        <li class="subcapt-footer ml-3 d-flex">
            © Gamifylearn 2021, All Rights Reserved
            <div class="sosmed d-flex ml-auto">
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </li>
    </ul>
</div>
`
};


window.onscroll = function() {scrollFunction()};
let nav         = document.querySelector("nav")
let nav_link    = document.querySelectorAll(".nav-link");
let brand_logo  = document.querySelector("#brand-logo");
let hamburger   = document.querySelector("#hamburger");
let nav_btn     = document.querySelector("#nav-btn")

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
    nav.style.backgroundColor = "#1D1D42";
    nav_link.forEach(element => {
        element.style.color = "#ffffff";
        element.style.setProperty('--nav-link-line','#fff');
    });

    hamburger.style.color = "#ffffff";

    brand_logo.src = "./assets/gamifylearn 2.png";
  } else {
    nav.style.backgroundColor = "";
    nav_link.forEach(element => {
        element.style.color = "#000";
        element.style.setProperty('--nav-link-line','#000');
    });
    hamburger.style.color = "#0B6E8E";
    brand_logo.src = "./assets/gamifylearn logo black 1.png";
  }
}
