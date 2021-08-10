import { render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import UJIANDATA from './Soal/soal';
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';

const UjianJudul = UJIANDATA.map((ujian) => {
    return ujian.judul
})

export const SOALDATA = UJIANDATA.map((ujian) => {
    return ujian.soal
})

export const Peraturan = (test) => {

    function setTime(){
        const time = new Date();
        localStorage.setItem('startTime', time)
    
        const id = 2;
        localStorage.setItem('testid', id);
    
        const nomorJawab = new Array(SOALDATA[test-1].length);
        localStorage.setItem('jawabInfo', JSON.stringify(nomorJawab));
    
        window.location.reload(false);
    }

    return (
        <div>
            <Helmet>
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/ruletestGL.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>
            <div className="content d-flex justify-content-center mt-4 w-100">
                <div className="col">
                    <div>
                        <div className="col-xs-3 col-sm-4 mr-auto d-inline-block">
                            <Link className="back" to="/tryout">
                                <div className="d-inline-block mr-4">
                                    <i className="fa fa-arrow-left"></i>
                                </div>
                                <p className="d-none d-sm-inline-block">Kembali Ke Beranda</p>
                            </Link>
                        </div>
                        <div className="col-xs-4 col-sm-4 text-center d-inline-block">
                            <img id="brand-logo" src="/assets/gamifylearn 1.png" alt=""/>
                        </div>
                    </div>
                    <h3 className="p text-center">Peraturan Soal</h3>
                    <div className="d-flex justify-content-center mt-4">
                        <div className="text-box text-center">
                            <p className="q">1. Dilarang menggunakan alat bantu jenis apapun (Kalkulator, internet, dst.)</p>
                            <p className="q">2. Try Out akan dilaksanakan selama 120 menit</p>
                            <p className="q">3. Jika waktu telah habis namun belum submit, jawaban akan otomatis terkirim ke server</p>
                        </div>
                    </div>
                    <div className="t text-center" style={{marginBottom: '80px'}}>
                        <Link className="tombol btn" to={"/test/"+test} onClick={setTime}>MULAI KERJAKAN</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}