import { render } from '@testing-library/react';
import React, { Component, useEffect, useState } from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';
import UJIANDATA from './Soal/soal';
import PEMBAHASANDATA from './Soal/pembahasan';
import { Materi, MateriData } from './materi';

const Users = [
    {
        name: 'Sadi',
    }
]

const lastseenTemplate = MateriData.map((mat, i) => {
    return(
        <div className="item">
            <img className="card-img" src="https://picsum.photos/300/200"/>
            <Link className="submateri" to={"/bab/"+(i+1)+'/1'}>{mat.lastProgress}</Link><br/>
            <a className="materi" href="#">{mat.judulMateri}</a>
        </div>
    )
})

const materiTemplate = MateriData.map((mat, i) => {
    return(
        <div className="item">
            <img className="card-img" src="https://picsum.photos/300/200"/>
            <Link className="submateri" to={"/listmateri/"+(i+1)}>{mat.judulMateri}</Link><br/>
            <a className="materi" href="#">Semester I</a>
        </div>
    )
})

const kerjaToTemplate = UJIANDATA.map((ujian, i) => {
    return(
        <div className="item">
            <img className="card-img" src="https://picsum.photos/300/200"/>
            <Link className="submateri" to={"/aturan/"+(i+1)}>{ujian.judul}</Link><br/>
            <a className="materi" href="#">Semester I</a>
        </div>
    )
})

const PembahasanTemplateskor = PEMBAHASANDATA.map((test, i) => {
    return(
        <div className="item">
            <img className="card-img" src="https://picsum.photos/300/200"/>
            <Link className="submateri" to={"/bahasan/"+(i+1)}>{test.judul}</Link><br/>
            <a className="materi" href="#">Semester I</a>
        </div>
    )
})

export const Home = () => {
    const [username, setUsername] = useState('');
    const [data, setData] = useState();

    useEffect(() => {
        //axios.get(`http://localhost:5000/api/v1/users`)//
        //.then(res => {
        //const persons = res.data;
        //setData({ persons });
        //})
        //setUsername(data.map((test)=>{return test.name}))        
        setUsername(Users.map((test)=>{return test.name}));       
    });
      
    return (
        <div>
            <Helmet>
            <link
                type="text/css"
                rel="stylesheet"
                href="css/homeGL.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="vendor/owlcarousel/assets/owl.carousel.min.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="vendor/owlcarousel/assets/owl.theme.default.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            {useScript('/js/mainstyle.js')}
            {useScript('/js/homeGL.js')}
            </Helmet>
            <Navbarh />

            <div className="content d-flex" style={{marginTop:'80px'}}>
                <Sidebar/>
                <div className="main-content" style={{marginTop: '28px'}}>
                    <div className="greeting align-items-center">
                        <img className="greeting-img" src="assets/trophy.png"/>
                        <h1 style={{letterSpacing: '0.5px', fontSize: '40px', lineHeight: '62px'}}>Halo, {username}</h1>
                        <p style={{width: '476px'}}>"Suatu hari senang datang, nikmati saja. Tapi suatu hari sedih akan lebih berkesan, nikmati saja." — NKCTHI</p>
                    </div>
                    <div className="lastseen">
                        <h4 style={{letterSpacing: '0.3px',fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px'}}>Terakhir dilihat</h4>
                        <div className="container">
                            <div className="owl-carousel owl-theme">
                                {lastseenTemplate}
                            </div>
                        </div>
                    </div>
                    <div className="lesson">
                        <h4 style={{letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500',fontSize: '28px', lineHeight: '31px'}}>Mata Kuliah</h4>
                        <div className="container">
                            <div className="owl-carousel owl-theme">
                                {materiTemplate}
                            </div>
                        </div>
                    </div>
                    <div className="toaktif">
                        <h4 style={{letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px'}}>Try Out Aktif</h4>
                        <div className="container">
                            <div className="owl-carousel owl-theme">
                                {kerjaToTemplate}
                            </div>
                        </div>
                    </div>
                    <div className="pembahasan mb-5">
                        <h4 style={{letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px'}}>Pembahasan</h4>
                        <div className="container">
                            <div className="owl-carousel owl-theme">
                                {PembahasanTemplateskor}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footerbar/>
        </div>
    );
}
