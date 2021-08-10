import React, { Component } from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
 
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

const SearchData = [
    {
        item: "Daftar Try Out Gratis",
        link: "/"
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
];

const SearchTemplate = SearchData.map((search) => {
        return(       
            <li><Link to={search.link}>{search.item}</Link></li>
        );
    }
);

function handlelogOut(){
    localStorage.clear();
    window.location.reload(false);
}

const BellData = [
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

const BellTemplate = BellData.map((bell) => {
    return (
      <div className={bell.status.toString() + " bell-content"}>
        <div className="dropdown-item" href="#">
          <span>
            {bell.name}
          </span>
          <i className="fa fa-circle" aria-hidden="true" style={{fontSize: '5px', padding: '0 3px'}}></i>
          <span>
            {bell.time}
          </span>
        </div>
        <div className="dropdown-title">
          <span>
          {bell.title}
          </span>
        </div>
        <div className="dropdown-content">
          {bell.content}
        </div>
      </div>
    );
}
);

export const Navbarh = props => {
    return (
        <nav id="nav" class="navbar navbar-expand-lg fixed-top">
            <Desktop>
            <Link className="navbar-brand mb-1" to="/home">
                <img id="brand-logo" src="../assets/gamifylearn 1.png" alt="" />
            </Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav ml-3 w-100">
                    <li className="nav-item mr-auto">
                        <div className="search-grup d-flex">
                        <form className="d-inline form-inline mw-100 navbar-search">
                            <div className="input-group">
                            <input type="text" id="mySearch" className="form-control border-0 small text-light" placeholder="Ketik 'Teorema limit'..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button id="search" className="btn search-icon" type="button">
                                <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                            </div>
                            <div className="list">
                            <ul id="myMenu">
                                {SearchTemplate}
                            </ul>
                            </div>
                        </form>
                        </div>
                    </li>
                    <li className="nav-item ml-3">
                        <a className="nav-link px-0 py-0" href="#">
                            <div className="foto-profil-main">
                                <img className="foto-profil" src="" alt="" />
                            </div>
                        </a>
                    </li>
                    <li className="nav-item dropdown mx-1">
                        <a id="setting" className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-chevron-down"></i>
                        </a>
                        <div className="setting dropdown-menu" aria-labelledby="setting">
                        <div className="setting-content">
                            <Link className="dropdown-item" to="/profil">
                            <i className="fas fa-user-alt mr-2"></i>
                            <span>Profil</span>
                            </Link>
                            <Link className="dropdown-item" to="/checkout">
                            <i className="fas fa-shopping-cart mr-2" style={{fontSize: '12px'}}></i>
                            <span>Checkout</span>
                            </Link>
                            <Link className="dropdown-item" onClick={handlelogOut} to="/">
                            <i className="fas fa-sign-out-alt mr-2"></i>
                            <span>Keluar</span>
                            </Link>
                        </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown mx-3">
                        <a id="bell" className="nav-link py-auto" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="far fa-bell"></i>
                        <span className="badge"></span>
                        </a>
                        <div className="bell dropdown-menu" aria-labelledby="bell">
                            {BellTemplate}
                        </div>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link py-auto" to="/checkout">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="badge"></span>
                        </Link>
                    </li>
                    <li className="nav-item mx-3">
                        <form><button id="nav-btn" className="btn btn-primary px-4" formAction="index.html"><i class="far fa-gem mr-1"></i>GO PREMIUM</button></form>
                    </li>
                </ul>
            </div>
            </Desktop>

            
            <Mobile>
            <div className="mobile-nav w-100">
                <div className="d-flex justify-content-center">
                    <div className="dropdown d-flex align-items-center position-static mr-auto">
                        <a id="menubar" className="navbar-toggler mr-auto" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false" data-backdrop="static" data-keyboard="false">
                            <span className="navbar-toggler-icon"><i className="bi bi-list" style={{color: 'white', fontSize: '20px'}}></i></span>
                        </a>
                        <div id="menudrop" className="dropdown-menu dropdown-menu-mega">
                            <div className="container">
                                <div className="row d-flex w-100 mx-0">
                                    <div className="search-grup mx-auto d-flex">
                                    <form className="row d-flex mx-0 mw-100 navbar-search">
                                        <div className="input-group">
                                        <input type="text" id="mySearch" className="form-control border-0 small text-light" placeholder="Ketik 'Teorema limit'..." aria-label="Search" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button id="search" className="btn search-icon" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                        </div>
                                        <div className="list col-12 px-0">
                                        <ul id="myMenu">
                                            {SearchTemplate}
                                        </ul>
                                        </div>
                                    </form>
                                    </div>
                                    <div className="line-menu mx-auto"></div>
                                    <div className="col-12 px-0 d-flex" style={{marginLeft: '24px', marginTop: '20px'}}>
                                        <a className="px-0 py-0" href="#">
                                            <div className="foto-profil-main">
                                                <img className="foto-profil" src="" alt=""/>
                                            </div>
                                        </a>
                                        <div className="px-4 py-1">
                                            <h4 id="name" className="nama-profil">Muslihuddin Sa'di S</h4>
                                            <h5 id="email" className="email-profil">muslihuddinsadi@gmail.com</h5>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '100%'}}>
                                        <ul>
                                            <li><Link to="/profil">Profil</Link></li>
                                            <li><Link to="/home">Beranda</Link></li>
                                            <li><Link to="/checkout">Go Premium<i class="far fa-gem ml-2"></i></Link></li>
                                            <li><Link to="/" onClick={handlelogOut} style={{color: 'rgba(255, 255, 255, 0.75)', fontWeight: '400'}}>Log Out</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link className="navbar-brand mb-1 ml-4" to="/home">
                            <img id="brand-logo" src="../assets/gamifylearn mini.png" alt=""/>
                        </Link>
                    </div>
                    <div className="d-flex ml-auto">
                        <div className="nav-item dropdown">
                            <a id="bell" className="nav-link py-auto" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-bell" style={{fontSize: '18px'}}></i>
                            <span className="badge"></span>
                            </a>
                            <div className="bell dropdown-menu" aria-labelledby="bell">
                                {BellTemplate}
                            </div>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link py-auto" to="/checkout">
                                <i className="bi bi-cart" style={{fontSize: '18px'}}></i>
                                <span className="badge"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </Mobile>
        </nav>
    );
}

export const Sidebar = props => {
    return (
        <div id="sidebar" className="sidebar">
            <Desktop>
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
                <li className="nav-item homegl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/home">
                        <svg className="mr-3" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" />
                        </svg>
                        Beranda
                    </Link>
                </li>
                <li className="nav-item profilgl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/profil">
                        <svg className="mr-3" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                        </svg>
                        Profil
                    </Link>
                </li>
                <li className="nav-item materigl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/materi">
                        <i className="fas fa-book mr-3"></i>
                        Mata Kuliah
                    </Link>
                </li>
                <li className="nav-item rankgl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/ranking">
                        <i className="fas fa-medal mr-3"></i>
                        Ranking
                    </Link>
                </li>
                <li className="nav-item tryoutgl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/tryout">
                        <svg className="mr-3" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                        </svg>
                        Try Out
                    </Link>
                </li>
                <li className="nav-item skorgl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/skor">
                        <i className="fas fa-book-open mr-3"></i>
                        Skor & Pembahasan
                    </Link>
                </li>
            </ul>
            </Desktop>
        </div>
    );
}

export const Footerbar = props => {
    return (
        <div id="footerbar">
            <Mobile>
            <div className="d-flex justify-content-around" style={{height: '100%'}}>
                <div className="align-self-center">
                    <Link className="nav-link homegl" to="/home">
                        <svg aria-label="Home" className="homegl-svg" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
                    </Link>
                </div>
                <div className="align-self-center">
                    <Link className="nav-link materigl" to="/materi">
                        <i className="bi bi-layout-sidebar"></i>
                    </Link>
                </div>
                <div className="align-self-center">
                    <Link className="nav-link rankgl" to="/ranking">
                        <i className="bi bi-award"></i>
                    </Link>
                </div>
                <div className="align-self-center">
                    <Link className="nav-link tryoutgl" to="/tryout">
                        <svg aria-label="New Message" class="tryoutgl-svg" fill="#262626" height="22" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
                    </Link>
                </div>
                <div className="align-self-center">
                    <Link className="nav-link skorgl" to="/skor">
                        <i className="bi bi-book"></i>
                    </Link>
                </div>
            </div>
            </Mobile>
        </div>
    );
}

export const Navbarprem = props => {
    return(
        <div>
            <nav id="nav" class="navbar navbar-expand-lg fixed-top">
            <Desktop>
                <Link className="navbar-brand mb-1" to="/home">
                    <img id="brand-logo" src="/assets/gamifylearn 1.png" alt="" />
                </Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-3 w-100">
                        <li className="nav-item mr-auto">
                            <div className="search-grup d-flex">
                            <form className="d-inline form-inline mw-100 navbar-search">
                                <div className="input-group">
                                <input type="text" id="mySearch" className="form-control border-0 small text-light" placeholder="Ketik 'Teorema limit'..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button id="search" className="btn search-icon" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                                </div>
                                <div className="list">
                                <ul id="myMenu">
                                    {SearchTemplate}
                                </ul>
                                </div>
                            </form>
                            </div>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link px-0 py-0" href="#">
                                <div className="foto-profil-main">
                                    <img className="foto-profil" src="" alt="" />
                                </div>
                            </a>
                        </li>
                        <li className="nav-item dropdown mx-1">
                            <a id="setting" className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-chevron-down"></i>
                            </a>
                            <div className="setting dropdown-menu" aria-labelledby="setting">
                            <div className="setting-content">
                                <Link className="dropdown-item" to="/profil">
                                <i className="fas fa-user-alt mr-2"></i>
                                <span>Profil</span>
                                </Link>
                                <Link className="dropdown-item" to="/checkout">
                                <i className="fas fa-shopping-cart mr-2" style={{fontSize: '12px'}}></i>
                                <span>Checkout</span>
                                </Link>
                                <Link className="dropdown-item" to="/" onClick={handlelogOut}>
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                <span>Keluar</span>
                                </Link>
                            </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <a id="bell" className="nav-link py-auto" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="far fa-bell"></i>
                            <span className="badge"></span>
                            </a>
                            <div className="bell dropdown-menu" aria-labelledby="bell">
                                {BellTemplate}
                            </div>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link py-auto" to="/checkout">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="badge"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Desktop>

            <Mobile>
                <div className="mobile-nav w-100">
                    <div className="d-flex justify-content-center">
                        <div className="dropdown d-flex align-items-center position-static mr-auto">
                            <a id="menubar" className="navbar-toggler mr-auto" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false" data-backdrop="static" data-keyboard="false">
                                <span className="navbar-toggler-icon"><i className="bi bi-list" style={{color: 'white', fontSize: '20px'}}></i></span>
                            </a>
                            <div id="menudrop" className="dropdown-menu dropdown-menu-mega">
                                <div className="container">
                                    <div className="row d-flex w-100 mx-0">
                                        <div className="search-grup mx-auto d-flex">
                                        <form className="row d-flex mx-0 mw-100 navbar-search">
                                            <div className="input-group">
                                            <input type="text" id="mySearch" className="form-control border-0 small text-light" placeholder="Ketik 'Teorema limit'..." aria-label="Search" aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                                <button id="search" className="btn search-icon" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                            </div>
                                            <div className="list col-12 px-0">
                                            <ul id="myMenu">
                                                {SearchTemplate}
                                            </ul>
                                            </div>
                                        </form>
                                        </div>
                                        <div className="line-menu mx-auto"></div>
                                        <div className="col-12 px-0 d-flex" style={{marginLeft: '24px', marginTop: '20px'}}>
                                            <a className="px-0 py-0" href="#">
                                                <div className="foto-profil-main">
                                                    <img className="foto-profil" src="" alt=""/>
                                                </div>
                                            </a>
                                            <div className="px-4 py-1">
                                                <h4 id="name" className="nama-profil">Muslihuddin Sa'di S</h4>
                                                <h5 id="email" className="email-profil">muslihuddinsadi@gmail.com</h5>
                                            </div>
                                        </div>
                                        <div style={{marginBottom: '100%'}}>
                                            <ul>
                                                <li><Link to="/profil">Profil</Link></li>
                                                <li><Link to="/home">Beranda</Link></li>                                        
                                                <li><Link to="/" style={{color: 'rgba(255, 255, 255, 0.75)', fontWeight: '400'}}>Log Out</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link className="navbar-brand mb-1 ml-4" to="/home">
                                <img id="brand-logo" src="/assets/gamifylearn mini.png" alt=""/>
                            </Link>
                        </div>
                        <div className="d-flex ml-auto">
                            <div className="nav-item dropdown">
                                <a id="bell" className="nav-link py-auto" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-bell" style={{fontSize: '18px'}}></i>
                                <span className="badge"></span>
                                </a>
                                <div className="bell dropdown-menu" aria-labelledby="bell">
                                    {BellTemplate}
                                </div>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link py-auto" to="/checkout">
                                    <i className="bi bi-cart" style={{fontSize: '18px'}}></i>
                                    <span className="badge"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Mobile>
            </nav>
        </div>
    )
}

export const Navbaradmin = props => {
    return (
        <nav id="nav" class="navbar navbar-expand-lg fixed-top">
            <Desktop>
            <Link className="navbar-brand mb-1" to="/admin">
                <img id="brand-logo" src="../assets/gamifylearn 1.png" alt="" />
            </Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav ml-3 w-100">
                    <li className="nav-item ml-3">
                        <a className="nav-link px-0 py-0" href="#">
                            <div className="foto-profil-main">
                                <img className="foto-profil" src="" alt="" />
                            </div>
                        </a>
                    </li>
                    <li className="nav-item dropdown mx-1">
                        <a id="setting" className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-chevron-down"></i>
                        </a>
                        <div className="setting dropdown-menu" aria-labelledby="setting">
                        <div className="setting-content">
                            <Link className="dropdown-item" to="/profiladmin">
                            <i className="fas fa-user-alt mr-2"></i>
                            <span>Profil</span>
                            </Link>
                            <Link className="dropdown-item" to="/checkoutadmin">
                            <i className="fas fa-shopping-cart mr-2" style={{fontSize: '12px'}}></i>
                            <span>Checkout</span>
                            </Link>
                            <Link className="dropdown-item" to="/">
                            <i className="fas fa-sign-out-alt mr-2"></i>
                            <span>Keluar</span>
                            </Link>
                        </div>
                        </div>
                    </li>
                    <li className="nav-item mx-3">
                        <Link className="nav-link py-auto" to="/checkout">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="badge"></span>
                        </Link>
                    </li>
                </ul>
            </div>
            </Desktop>

            
            <Mobile>
            <div className="mobile-nav w-100">
                <div className="d-flex justify-content-center">
                    <div className="dropdown d-flex align-items-center position-static mr-auto">
                        <a id="menubar" className="navbar-toggler mr-auto" role="button" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false" data-backdrop="static" data-keyboard="false">
                            <span className="navbar-toggler-icon"><i className="bi bi-list" style={{color: 'white', fontSize: '20px'}}></i></span>
                        </a>
                        <div id="menudrop" className="dropdown-menu dropdown-menu-mega">
                            <div className="container">
                                <div className="row d-flex w-100 mx-0">
                                    <div className="search-grup mx-auto d-flex">
                                    </div>
                                    <div className="line-menu mx-auto"></div>
                                    <div className="col-12 px-0 d-flex" style={{marginLeft: '24px', marginTop: '20px'}}>
                                        <a className="px-0 py-0" href="#">
                                            <div className="foto-profil-main">
                                                <img className="foto-profil" src="" alt=""/>
                                            </div>
                                        </a>
                                        <div className="px-4 py-1">
                                            <h4 id="name" className="nama-profil">Muslihuddin Sa'di S</h4>
                                            <h5 id="email" className="email-profil">muslihuddinsadi@gmail.com</h5>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '100%'}}>
                                        <ul>
                                            <li><Link to="/profiladmin">Profil</Link></li>
                                            <li><Link to="/admin">Beranda</Link></li>
                                            <li><Link to="/" style={{color: 'rgba(255, 255, 255, 0.75)', fontWeight: '400'}}>Log Out</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link className="navbar-brand mb-1 ml-4" to="/home">
                            <img id="brand-logo" src="../assets/gamifylearn mini.png" alt=""/>
                        </Link>
                    </div>
                    <div className="d-flex ml-auto">
                        <div className="nav-item">
                            <Link className="nav-link py-auto" to="/checkout">
                                <i className="bi bi-cart" style={{fontSize: '18px'}}></i>
                                <span className="badge"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </Mobile>
        </nav>
    );
}

export const Sidebaradmin = props => {
    return (
        <div id="sidebar" className="sidebar">
            <Desktop>
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
                <li className="nav-item homegl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/admin">
                        <svg className="mr-3" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" />
                        </svg>
                        Beranda
                    </Link>
                </li>
                <li className="nav-item profilgl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/profiladmin">
                        <svg className="mr-3" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                        </svg>
                        Profil
                    </Link>
                </li>
                <li className="nav-item materigl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/materiadmin">
                        <i className="fas fa-book mr-3"></i>
                        Mata Kuliah
                    </Link>
                </li>
                <li className="nav-item rankgl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/rankingadmin">
                        <i className="fas fa-medal mr-3"></i>
                        Ranking
                    </Link>
                </li>
                <li className="nav-item tryoutgl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/tryoutadmin">
                        <svg className="mr-3" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                        </svg>
                        Try Out
                    </Link>
                </li>
                <li className="nav-item skorgl mx-3">
                    <Link className="nav-link d-flex ml-2" to="/skoradmin">
                        <i className="fas fa-book-open mr-3"></i>
                        Skor & Pembahasan
                    </Link>
                </li>
            </ul>
            </Desktop>
        </div>
    );
}

export const Footerbaradmin = props => {
    return (
        <div id="footerbar">
            <Mobile>
            <div className="d-flex justify-content-around" style={{height: '100%'}}>
                <div className="align-self-center">
                    <Link className="nav-link homegl" to="/admin">
                        <svg aria-label="Home" className="homegl-svg" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
                    </Link>
                </div>
                <div className="align-self-center">
                    <Link className="nav-link materigl" to="/materiadmin">
                        <i className="bi bi-layout-sidebar"></i>
                    </Link>
                </div>
                <div className="align-self-center">
                    <Link className="nav-link rankgl" to="/rankingadmin">
                        <i className="bi bi-award"></i>
                    </Link>
                </div>
                <div className="align-self-center">
                    <Link className="nav-link tryoutgl" to="/tryoutadmin">
                        <svg aria-label="New Message" class="tryoutgl-svg" fill="#262626" height="22" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
                    </Link>
                </div>
                <div className="align-self-center">
                    <Link className="nav-link skorgl" to="/skoradmin">
                        <i className="bi bi-book"></i>
                    </Link>
                </div>
            </div>
            </Mobile>
        </div>
    );
}
