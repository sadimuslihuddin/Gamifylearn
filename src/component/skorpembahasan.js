import { render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';
import { Pembahasan } from './pembahasan';
import PEMBAHASANDATA from './Soal/pembahasan';

const skorData = [
    {
        judul: 'Kalkulus IA',
        benar: 20,
        salah: 20,
        kosong: 10,
        skor: 40        
    },
    {
        judul: 'Fisika IA',
        benar: 25,
        salah: 15,
        kosong: 10,
        skor: 50        
    }
]

const skorDataTemplate = skorData.map((skor) => {
    return(
        <tr>
        <td>{skor.judul}</td>
        <td>{skor.benar}</td>
        <td>{skor.salah}</td>
        <td>{skor.kosong}</td>
        <td>{skor.skor}</td>
        </tr>
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

export default function Skor () {
    return (
        <div>
            <Helmet>
            {useScript('/js/mainstyle.js')}
            {useScript('/js/skorGL.js')}
            {useScript('/vendor/jquery-easing/jquery.easing.min.js')}
            {useScript('/vendor/datatables/jquery.dataTables.min.js')}
            {useScript('/vendor/datatables/dataTables.bootstrap4.min.js')}
            {useScript('/js/demo/datatables-demo.js')}
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
                    <h4 style={{color: 'white', letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px'}}>Skor & Pembahasan</h4>
                    <div className="col px-0 table-responsive mt-3">
                        <table className="table table-borderless" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                            <th>Try Out</th>
                            <th>Benar</th>
                            <th>Salah</th>
                            <th>Kosong</th>
                            <th>Skor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skorDataTemplate}
                        </tbody>
                        </table>
                    </div>
                    <div className="pembahasan my-5">
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