import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import logo from "../assets/Dashboard 2.png";
import logo1 from "../assets/Try Out Page 1.png";
import logo2 from "../assets/Group 117.png";
import logo3 from "../assets/gamifylearn 2.png";
import logo1M from "../assets/mock-up 1.png";
import logo2M from "../assets/login mockup 1.png";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {Helmet, ReactHelmet} from 'react-helmet';
import useScript from './Hook/useScript';
 
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
 
const Landing = () => {
    return (
        <div>
        <Helmet>
            {useScript("/js/stylelanding.js")}
        </Helmet>
        <Desktop>
        <div className="main-content row mx-0">
            <div>
                <div className="col-12">
                    <h1 className="capt-1">More than just learn<br/>It&apos;s gamifylearn. </h1>
                </div>
                <div className="col-12" style={{paddingRight: '20%', paddingLeft: '20%', marginTop: '20px'}}>
                    <h5 className="subcapt-1">Sebuah sistem yang dirancang khusus sebagai One Stop Learning Platform bagi mahasiswa TPB ITB agar mereka dapat mengambis di tahun pertama</h5>
                </div>
                <div className="daftarbtn col-12 text-center mt-5">
                    <Link className="btn btn-primary px-4 py-2" to="/daftar">Daftar Sekarang!</Link>
                </div>
                <div className="img-1 col-12 text-center mt-5">
                    <img src={logo} zindex= {5} />
                </div>
            </div>
            <div className="container mx-0 px-0" style={{backgroundColor: '#1D1D42', maxWidth:'100%'}}>
                <div className="col-12">
                    <h1 className="capt-1" style={{color: 'white'}}>Dirancang khusus untuk kamu</h1>
                </div>
                <div className="col-12" style={{paddingRight: '20%', paddingLeft: '20%', marginTop: '20px'}}>
                    <h5 className="subcapt-1">Tahap Persiapan Bersama (TPB) merupakan masa di mana kamu dituntut untuk berjuang untuk yang kedua kalinya. Maka dari itu, rencanakan belajarmu bersama gamifylearn dan raih jurusan impian!</h5>
                </div>
                <div className="threeitem d-flex justify-content-center mt-5">
                    <div className="item-1 mx-2 d-flex">
                        <i className="fas fa-pen-alt mr-3 mt-1"></i>
                        <div>
                            <div><b>Try Out Berbasis Online</b></div>
                            <div>We’ve helped over 2,500 learners to get into the most popular tech-based lessons platform.</div>
                        </div>
                    </div>
                    <div className="item-1 mx-2 d-flex">
                        <i className="fas fa-scroll mr-3 mt-1"></i>
                        <div>
                            <div><b>Materi Lengkap</b></div>
                            <div>Rangkuman kece mata kuliah Matematika, Fisika, dan Kimia berbasis online siap menemani ambismu di manapun, kapanpun.</div>
                        </div>
                    </div>
                    <div className="item-1 mx-2 d-flex">
                        <i className="fas fa-user mr-3 mt-1"></i>
                        <div>
                            <div><b>Mobile Friendly</b></div>
                            <div>Works well and very responsive for mobile</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center mt-5" style={{marginBottom: '150px'}}>
                    <Link className="btn btn-primary px-4 py-2" to="/login">Mulai Sekarang</Link>
                </div>
            </div>
            <div className="container d-flex mx-0 px-0" style={{maxWidth: '100%'}}>
                <div className="col" style={{paddingLeft: '150px'}}>
                    <h2 className="capt-1 mb-4">Fitur super lengkap yang dirancang untuk survive TPB</h2>
                    <h5 className="subcapt-1-2">Tidak dapat dipungkiri bahwa terdapat persentase mahasiswa yang tidak lulus TPB. Maka dari itu, kami sediakan fitur super lengkap agar kamu bisa lulus TPB dan masuk jurusan impian.</h5>
                    <div className="icon-1 my-3 d-flex">
                        <div className="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                            <i className="fas fa-pen-alt"></i>
                        </div>
                        <span className="my-auto">Try Out UTS-UAS</span>
                    </div>
                    <div className="icon-1 my-3 d-flex">
                        <div className="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                            <i className="fas fa-scroll"></i>
                        </div>
                        <span className="my-auto">Rangkuman Materi</span>
                    </div>
                    <div className="icon-1 my-3 d-flex">
                        <div className="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                            <i className="fas fa-user"></i>
                        </div>
                        <span className="my-auto">Gamifyteach</span>
                    </div>
                </div>
                <div className="col px-0">
                    <img style={{marginTop: '127px'}} src={logo1} />
                </div>
            </div>
            <div className="container mx-0 px-0" style={{backgroundColor: '#1D1D42', maxWidth: '100%'}}>
                <div className="col-12 d-flex justify-content-center">
                    <img className="mr-5" src={logo2} style={{marginLeft: '100px'}} />
                    <div>
                        <h2 className="capt-1 ml-5" style={{color: 'white'}}>Ambis dimanapun. <br/>kapanpun.</h2>
                        <h5 className="subcapt-1-2 mx-5">Tidak dapat dipungkiri bahwa terdapat persentase mahasiswa yang tidak lulus TPB. Maka dari itu, kami sediakan fitur super lengkap agar kamu bisa lulus TPB dan masuk jurusan impian.</h5>
                    </div>
                </div>
            </div>
            <div className="container mx-0 px-0" style={{background: '#F7F8FA', maxWidth: '100%'}}>
                <div className="col-12">
                    <h1 className="capt-1">1000+ mahasiswa telah <br/>mengambis bersama kami</h1>
                </div>
                <div className="col-12" style={{paddingRight: '20%', paddingLeft: '20%', marginTop: '20px'}}>
                    <h5 className="subcapt-1">Begitu banyak mahasiswa yang memperjuangkan masa TPB nya bersama kami, sekarang giliranmu untuk bergabung</h5>
                </div>
                <div className="kesan" style={{marginTop: '60px', marginBottom: '149px'}}>
                    <div className="d-flex justify-content-center mb-4">
                        <div className="card mx-3">
                            <div className="d-flex">
                                <div className="profile-img">
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <div className="nama">Akang</div>
                                    <div className="fakultas">FMIPA</div>
                                </div>
                            </div>
                            <div className="caption">
                                Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                            </div>
                        </div>
                        <div className="card mx-3">
                            <div className="d-flex">
                                <div className="profile-img">
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <div className="nama">Akang</div>
                                    <div className="fakultas">FMIPA</div>
                                </div>
                            </div>
                            <div classNames="caption">
                                Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                            </div>
                        </div>
                        <div className="card mx-3">
                            <div className="d-flex">
                                <div className="profile-img">
                                </div>
                                <div>
                                    <div className="nama">Akang</div>
                                    <div className="fakultas">FMIPA</div>
                                </div>
                            </div>
                            <div className="caption">
                                Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="card mx-3">
                            <div className="d-flex">
                                <div className="profile-img">
                                </div>
                                <div>
                                    <div className="nama">Akang</div>
                                    <div className="fakultas">FMIPA</div>
                                </div>
                            </div>
                            <div className="caption">
                                Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                            </div>
                        </div>
                        <div className="card mx-3">
                            <div className="d-flex">
                                <div className="profile-img"></div>
                                <div>
                                    <div className="nama">Akang</div>
                                    <div className="fakultas">FMIPA</div>
                                </div>
                            </div>
                            <div className="caption">
                                Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                            </div>
                        </div>
                        <div className="card mx-3">
                            <div className="d-flex">
                                <div className="profile-img">
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <div className="nama">Akang</div>
                                    <div className="fakultas">FMIPA</div>
                                </div>
                            </div>
                            <div className="caption">
                                Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-0 px-0" style={{backgroundColor: '#1D1D42', maxWidth: '100%'}}>
                <div className="col-12 d-flex justify-content-center">
                    <h1 className="capt-1" style={{color: 'white'}}>Maksimalkan keambisanmu dengan fitur premium Gamifylearn</h1>
                </div>
                <div className="col-12" style={{paddingRight: '10%', paddingLeft: '10%', marginTop: '20px'}}>
                    <h5 className="subcapt-1" style={{color: 'white'}}>Akses seluruh materi kuliah berkualitas, ratusan latihan soal dan kuis, Try Out UTS-UAS, dan grup eksklusif hanya dengan merogoh kocek seharga uang jajanmu selama tiga hari</h5>
                </div>
                <div className="d-flex justify-content-center" style={{marginTop: '80px', marginBottom: '200px'}}>
                    <div className="card-price mx-3">
                        <div>
                            <h1>Newbie</h1>
                            <div className="d-flex">
                                <div className="price">Rp 100K</div>
                                <div className="month mt-auto mb-2">/bulan</div>
                            </div>
                            <div className="paket">Rp 100.000 /bulan</div>
                            <div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                            </div>
                        </div>
                        <form className="mt-auto" action="checkoutGL.html">
                        <Link to="/home"><button className="btn">PILIH PAKET NEWBIE</button></Link>
                        </form>
                    </div>
                    <div className="card-price-dark mx-3">
                        <div>
                            <div className="label">BEST CHOICE</div>
                            <h1>Pro</h1>
                            <div className="d-flex">
                                <div className="price">Rp 100K</div>
                                <div className="month mt-auto mb-2">/bulan</div>
                            </div>
                            <div className="paket">Rp 100.000 /bulan</div>
                            <div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                            </div>
                        </div>
                        <form className="mt-auto" action="checkoutGL.html">
                        <Link to="/home"><button className="btn">PILIH PAKET PRO</button></Link>
                        </form>
                    </div>
                    <div className="card-price mx-3">
                        <div>
                            <h1>Beyond</h1>
                            <div className="d-flex">
                                <div className="price">Rp 100K</div>
                                <div className="month mt-auto mb-2">/bulan</div>
                            </div>
                            <div className="paket">Rp 100.000 /bulan</div>
                            <div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                            </div>
                        </div>
                        <form className="mt-auto" action="checkoutGL.html">
                            <Link to="/home"><button className="btn">PILIH PAKET NEWBIE</button></Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container row justify-content-center mx-0 px-0 pt-5" style={{backgroundColor: '#1D293F', maxWidth: '100%'}}>
                <div className="col-4 ml-5">
                    <img src={logo3} />
                    <h5 className="subcapt-footer mt-2">Begitu banyak mahasiswa yang memperjuangkan masa TPB nya bersama kami, sekarang giliranmu untuk bergabung</h5>
                </div>
                <ul className="col-2">
                    <li>
                        <p className="subcapt-footer">Produk kami</p>
                    </li>
                    <li>
                        <p className="subcapt-footer">Rangkuman Materi</p>
                    </li>
                    <li>
                        <p className="subcapt-footer">Try Out UTS-UAS</p>
                    </li>
                    <li>
                        <p className="subcapt-footer">Gamifyteach</p>
                    </li>
                </ul>
                <ul className="col-2">
                    <li>
                        <p className="subcapt-footer">Tentang kami</p>
                    </li>
                    <li>
                        <p className="subcapt-footer">Keluarga Gamify</p>
                    </li>
                </ul>
                <ul className="col-2 mr-5">
                    <li>
                        <p className="subcapt-footer">Kontak</p>
                    </li>
                    <li>
                        <p className="subcapt-footer" style={{color: '#FFD166'}}>gamifylearn@gmail.com</p>
                    </li>
                </ul>
                <ul className="col-12 mt-3">
                    <hr className="solid" />
                    <li className="subcapt-footer ml-3 d-flex">
                        © Gamifylearn 2021, All Rights Reserved
                        <div className="sosmed d-flex ml-auto">
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </li>
                </ul>
            </div>            
        </div>
        </Desktop>

        <Mobile>
        <div className="main-content row mx-0">
            <div>
                <div className="col-12">
                    <h1 className="capt-1">More than just learn<br/>It&apos;s gamifylearn. </h1>
                </div>
                <div className="col-12" style={{paddingRight: '20%', paddingLeft: '20%', marginTop: '20px'}}>
                    <h5 className="subcapt-1">Sebuah sistem yang dirancang khusus sebagai One Stop Learning Platform bagi mahasiswa TPB ITB agar mereka dapat mengambis di tahun pertama</h5>
                </div>
                <div className="daftarbtn col-12 text-center mt-5">
                    <Link className="btn btn-primary px-4 py-2" to="/daftar">Daftar Sekarang!</Link>
                </div>
                <div className="img-1 col-12 text-center px-0 mt-5">
                    <img src={logo1M} zindex= {5} />
                </div>
            </div>
            <div className="container mx-0 px-0" style={{backgroundColor: '#1D1D42', maxWidth:'100%'}}>
                <div className="col-12">
                    <h1 className="capt-1" style={{color: 'white'}}>Dirancang khusus untuk kamu</h1>
                </div>
                <div className="col-12" style={{paddingRight: '20%', paddingLeft: '20%', marginTop: '20px'}}>
                    <h5 className="subcapt-1">Tahap Persiapan Bersama (TPB) merupakan masa di mana kamu dituntut untuk berjuang untuk yang kedua kalinya. Maka dari itu, rencanakan belajarmu bersama gamifylearn dan raih jurusan impian!</h5>
                </div>
                <div className="threeitem d-flex justify-content-center mt-5">
                    <div className="item-1 mx-2 d-flex">
                        <i className="fas fa-pen-alt mr-3 mt-1"></i>
                        <div>
                            <div><b>Try Out Berbasis Online</b></div>
                            <div>We’ve helped over 2,500 learners to get into the most popular tech-based lessons platform.</div>
                        </div>
                    </div>
                    <div className="item-1 mx-2 d-flex">
                        <i className="fas fa-scroll mr-3 mt-1"></i>
                        <div>
                            <div><b>Materi Lengkap</b></div>
                            <div>Rangkuman kece mata kuliah Matematika, Fisika, dan Kimia berbasis online siap menemani ambismu di manapun, kapanpun.</div>
                        </div>
                    </div>
                    <div className="item-1 mx-2 d-flex">
                        <i className="fas fa-user mr-3 mt-1"></i>
                        <div>
                            <div><b>Mobile Friendly</b></div>
                            <div>Works well and very responsive for mobile</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center mt-5" style={{marginBottom: '150px'}}>
                    <Link className="btn btn-primary px-4 py-2" to="/login">Mulai Sekarang</Link>
                </div>
            </div>
            <div className="container mx-0 px-0" style={{maxWidth: '100%'}}>
                <div className="col-12">
                    <h1 className="capt-1">Fitur super lengkap yang dirancang untuk survive TPB</h1>
                </div>
                <div className="col-12" style={{paddingRight: '20%', paddingLeft: '20%', marginTop: '20px'}}>
                    <h5 className="subcapt-1">Tidak dapat dipungkiri bahwa terdapat persentase mahasiswa yang tidak lulus TPB. Maka dari itu, kami sediakan fitur super lengkap agar kamu bisa lulus TPB dan masuk jurusan impian.</h5>
                </div>
                <div className="col-12">
                    <div className="icon-1 my-3 d-flex justify-content-center">
                        <div className="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                            <i className="fas fa-pen-alt"></i>
                        </div>
                        <span className="my-auto">Try Out UTS-UAS</span>
                    </div>
                    <div className="icon-1 my-3 d-flex justify-content-center">
                        <div className="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                            <i className="fas fa-scroll"></i>
                        </div>
                        <span className="my-auto">Rangkuman Materi</span>
                    </div>
                    <div className="icon-1 my-3 d-flex justify-content-center">
                        <div className="icon-1-2 d-flex justify-content-center align-items-center mr-3">
                            <i className="fas fa-user"></i>
                        </div>
                        <span className="my-auto">Gamifyteach</span>
                    </div>
                </div>
                <div className="col px-0">
                    <img src="" />
                </div>
            </div>
            <div className="container mx-0 px-0" style={{backgroundColor: '#1D1D42', maxWidth: '100%'}}>
                <div className="col-12 text-center">
                    <img className="mt-5" src={logo2M} />
                    <div>
                        <h2 className="capt-1 text-center" style={{color: 'white'}}>Ambis dimanapun. <br/>kapanpun.</h2>
                        <h5 className="subcapt-1-2 text-center">Tidak dapat dipungkiri bahwa terdapat persentase mahasiswa yang tidak lulus TPB. Maka dari itu, kami sediakan fitur super lengkap agar kamu bisa lulus TPB dan masuk jurusan impian.</h5>
                    </div>
                </div>
            </div>
            <div className="container mx-0 px-0" style={{background: '#F7F8FA', maxWidth: '100%'}}>
                <div className="col-12">
                    <h1 className="capt-1">1000+ mahasiswa telah <br/>mengambis bersama kami</h1>
                </div>
                <div className="col-12" style={{paddingRight: '20%', paddingLeft: '20%', marginTop: '20px'}}>
                    <h5 className="subcapt-1">Begitu banyak mahasiswa yang memperjuangkan masa TPB nya bersama kami, sekarang giliranmu untuk bergabung</h5>
                </div>
                <div className="kesan" style={{marginTop: '60px', marginBottom: '149px'}}>
                    <div className="justify-content-center mb-4">
                        <div className="card mx-auto my-4">
                            <div className="d-flex">
                                <div className="profile-img">
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <div className="nama">Akang</div>
                                    <div className="fakultas">FMIPA</div>
                                </div>
                            </div>
                            <div className="caption">
                                Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                            </div>
                        </div>
                        <div className="card mx-auto my-4">
                            <div className="d-flex">
                                <div className="profile-img">
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <div className="nama">Akang</div>
                                    <div className="fakultas">FMIPA</div>
                                </div>
                            </div>
                            <div classNames="caption">
                                Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                            </div>
                        </div>
                        <div className="card mx-auto my-4">
                            <div className="d-flex">
                                <div className="profile-img">
                                </div>
                                <div>
                                    <div className="nama">Akang</div>
                                    <div className="fakultas">FMIPA</div>
                                </div>
                            </div>
                            <div className="caption">
                                Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="container mx-0 px-0" style={{backgroundColor: '#1D1D42', maxWidth: '100%'}}>
                <div className="col-12 d-flex justify-content-center">
                    <h1 className="capt-1" style={{color: 'white'}}>Maksimalkan keambisanmu dengan fitur premium Gamifylearn</h1>
                </div>
                <div className="col-12" style={{paddingRight: '10%', paddingLeft: '10%', marginTop: '20px'}}>
                    <h5 className="subcapt-1" style={{color: 'white'}}>Akses seluruh materi kuliah berkualitas, ratusan latihan soal dan kuis, Try Out UTS-UAS, dan grup eksklusif hanya dengan merogoh kocek seharga uang jajanmu selama tiga hari</h5>
                </div>
                <div style={{marginTop: '80px', marginBottom: '200px'}}>
                    <div className="card-price mx-auto">
                        <div>
                            <h1>Newbie</h1>
                            <div className="d-flex">
                                <div className="price">Rp 100K</div>
                                <div className="month mt-auto mb-2">/bulan</div>
                            </div>
                            <div className="paket">Rp 100.000 /bulan</div>
                            <div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                            </div>
                        </div>
                        <form className="mt-auto" action="checkoutGL.html">
                        <Link to="/home"><button className="btn">PILIH PAKET NEWBIE</button></Link>
                        </form>
                    </div>
                    <div className="card-price-dark mx-auto">
                        <div>
                            <div className="label">BEST CHOICE</div>
                            <h1>Pro</h1>
                            <div className="d-flex">
                                <div className="price">Rp 100K</div>
                                <div className="month mt-auto mb-2">/bulan</div>
                            </div>
                            <div className="paket">Rp 100.000 /bulan</div>
                            <div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ kuis per bab</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                            </div>
                        </div>
                        <form className="mt-auto" action="checkoutGL.html">
                        <Link to="/home"><button className="btn">PILIH PAKET PRO</button></Link>
                        </form>
                    </div>
                    <div className="card-price mx-auto">
                        <div>
                            <h1>Beyond</h1>
                            <div className="d-flex">
                                <div className="price">Rp 100K</div>
                                <div className="month mt-auto mb-2">/bulan</div>
                            </div>
                            <div className="paket">Rp 100.000 /bulan</div>
                            <div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Akses semua fitur selama 3 bulan</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Materi lengkap & komprehensif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>100+ latihan soal interaktif</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Cheatsheet UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Try Out UTS & UAS</div>
                                <div className="list"><i className="fa fa-check-circle mr-2"></i>Sistem ranking realtime</div>
                            </div>
                        </div>
                        <form className="mt-auto" action="checkoutGL.html">
                            <Link to="/home"><button className="btn">PILIH PAKET BEYOND</button></Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container justify-content-center mx-0 px-3 pt-5" style={{backgroundColor: '#1D293F', maxWidth: '100%'}}>
                <div>
                    <img src={logo3} />
                    <h5 className="subcapt-footer mt-4">Begitu banyak mahasiswa yang memperjuangkan masa TPB nya bersama kami, sekarang giliranmu untuk bergabung</h5>
                </div>
                <ul className="mt-2">
                    <li>
                        <p className="subcapt-footer"><b>Produk kami</b></p>
                    </li>
                    <li>
                        <p className="subcapt-footer">Rangkuman Materi</p>
                    </li>
                    <li>
                        <p className="subcapt-footer">Try Out UTS-UAS</p>
                    </li>
                    <li>
                        <p className="subcapt-footer">Gamifyteach</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p className="subcapt-footer"><b>Tentang kami</b></p>
                    </li>
                    <li>
                        <p className="subcapt-footer">Keluarga Gamify</p>
                    </li>
                </ul>
                <ul className="col-2 mr-5">
                    <li>
                        <p className="subcapt-footer">Kontak</p>
                    </li>
                    <li>
                        <p className="subcapt-footer" style={{color: '#FFD166'}}>gamifylearn@gmail.com</p>
                    </li>
                </ul>
                <ul className="mt-3">
                    <hr className="solid" />
                    <li className="subcapt-footer ml-3 d-flex">
                        © Gamifylearn 2021, All Rights Reserved
                        <div className="sosmed d-flex ml-auto">
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </li>
                </ul>
            </div>            
        </div>
        </Mobile>
        </div>
    );
}

export const LandingPage = props => {
    return (
      <div className="App">
        <Helmet>
        <link
          type="text/css"
          rel="stylesheet"
          href="css/App.css"/>
        </Helmet>
          <nav id="navbar" className="navbar navbar-expand-lg navbar-light fixed-top">
              <a className="navbar-brand ml-4 my-1" href="#">
                  <img id="brand-logo" src="/assets/gamifylearn logo black 1.png" alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span>
                    <i id="hamburger" className="fas fa-bars" aria-hidden="true"></i>
                  </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mr-0 my-0">
                      <li className="nav-item d-flex align-items-center mx-3">
                          <a className="nav-link" href="#">Produk Kami</a>
                      </li>
                      <li className="nav-item d-flex align-items-center mx-3">
                          <a className="nav-link" href="#">Kontak</a>
                      </li>
                      <li className="nav-item d-flex align-items-center mx-3">
                          <a className="nav-link" href="#">Tentang Kami</a>
                      </li>
                      <li className="nav-item d-flex align-items-center mx-3">
                          <Link className="nav-link" to="/daftar">Daftar</Link>
                      </li>
                      <li className="nav-item d-flex align-items-center mx-3">
                          <Link id="nav-btn" className="btn btn-primary" to='/login'>Masuk
                          </Link>
                      </li>
                  </ul>
              </div>
          </nav>
          <div className="content d-flex justify-content-center mt-5">
              <Landing />
          </div>        
        </div>
    )
  }
  
 export const LandingPageuser = props => {
    return (
      <div className="App">
        <Helmet>
        <link
          type="text/css"
          rel="stylesheet"
          href="css/App.css"/>
        </Helmet>
          <nav id="navbar" className="navbar navbar-expand-lg navbar-light fixed-top">
              <a className="navbar-brand ml-4 my-1" href="#">
                  <img id="brand-logo" src="/assets/gamifylearn logo black 1.png" alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span>
                    <i id="hamburger" className="fas fa-bars" aria-hidden="true"></i>
                  </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mr-0 my-0">
                      <li className="nav-item d-flex align-items-center mx-3">
                          <a className="nav-link" href="#">Produk Kami</a>
                      </li>
                      <li className="nav-item d-flex align-items-center mx-3">
                          <a className="nav-link" href="#">Kontak</a>
                      </li>
                      <li className="nav-item d-flex align-items-center mx-3">
                          <a className="nav-link" href="#">Tentang Kami</a>
                      </li>
                      <li className="nav-item d-flex align-items-center mx-3">
                            <Link className="nav-link" to='/home'>Beranda
                          </Link>
                      </li>
                      <li className="nav-item d-flex align-items-center mx-3">
                          <Link id="nav-btn" className="btn btn-primary" to='/'>Log Out
                          </Link>
                      </li>
                  </ul>
              </div>
          </nav>
          <div className="content d-flex justify-content-center mt-5">
              <Landing />
          </div>        
        </div>
    )
  }
