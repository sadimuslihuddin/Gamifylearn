import { render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';
import UJIANDATA from './Soal/soal';
import DAFTARTO from './Soal/daftarTo';

const UjianJudul = UJIANDATA.map((ujian) => {
    return ujian.judul
})

const Ujianlength = UJIANDATA.length;
console.log(Ujianlength)

const kerjaToTemplate = UJIANDATA.map((ujian, i) => {
    return(
        <div className="item">
            <img className="card-img" src="https://picsum.photos/300/200"/>
            <Link className="submateri" to={"/aturan/"+(i+1)}>{ujian.judul}</Link><br/>
            <a className="materi" href="#">Semester I</a>
        </div>
    )
})

const daftarToTemplate = DAFTARTO.map((ujian, i) => {
    return(
        <div className="item">
            <img className="card-img" src="https://picsum.photos/300/200"/>
            <Link className="submateri" to={"/produk/"+(i+1)}>{ujian.produk}</Link><br/>
            <a className="materi" href="#">Semester I</a>
        </div>
    )
})

export default function Tryout () {
    return (
        <div>
            <Helmet>
            {useScript('/js/mainstyle.js')}
            {useScript('/js/tryoutGL.js')}
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/homeGL.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/rankingGL.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="vendor/owlcarousel/assets/owl.carousel.min.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="vendor/owlcarousel/assets/owl.theme.default.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>

            <Navbarh />
            <div className="content d-flex" style={{marginTop:'80px'}}>
                <Sidebar/>
                <div className="main-content" style={{marginTop: '28px'}}>
                    <div className="toaktif">
                        <h4 style={{letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px'}}>Try Out Aktif</h4>
                        <div className="container">
                            <div className="owl-carousel owl-theme">
                                {kerjaToTemplate}
                            </div>
                        </div>
                    </div>
                    <div className="pembahasan mb-5">
                        <h4 style={{letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px'}}>Daftar Try Out</h4>
                        <div className="container">
                            <div className="owl-carousel owl-theme">
                                {daftarToTemplate}
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <Footerbar/>
        </div>
    );
}
