import { render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';

const RankingData = [
    {
        Rank: 1,
        Nama: 'A',
        Universitas: 'ITB',
        FakJur: 'STEI',
        Benar: 40,
        Salah: 0,
        Kosong: 0,
        Skor: 100,
    },
    {
        Rank: 2,
        Nama: 'B',
        Universitas: 'ITB',
        FakJur: 'STEI',
        Benar: 38,
        Salah: 2,
        Kosong: 0,
        Skor: 90,
    },
    {
        Rank: 3,
        Nama: 'C',
        Universitas: 'ITB',
        FakJur: 'STEI',
        Benar: 37,
        Salah: 0,
        Kosong: 3,
        Skor: 82.5,
    },
    {
        Rank: 4,
        Nama: 'D',
        Universitas: 'ITB',
        FakJur: 'STEI',
        Benar: 36,
        Salah: 0,
        Kosong: 4,
        Skor: 80,
    },
    {
        Rank: 5,
        Nama: 'E',
        Universitas: 'ITB',
        FakJur: 'STEI',
        Benar: 36,
        Salah: 3,
        Kosong: 1,
        Skor: 80,
    }
]

const rankingTemplate = RankingData.map((rank) => {
    return(
        <tr>
        <td>{rank.Rank}</td>
        <td>{rank.Nama}</td>
        <td>{rank.Universitas}</td>
        <td>{rank.Fakjur}</td>
        <td>{rank.Benar}</td>
        <td>{rank.Salah}</td>
        <td>{rank.Kosong}</td>
        <td>{rank.Skor}</td>
        </tr>
    )
})

export default function Ranking () {
    return (
        <div>
            <Helmet>
            {useScript('/js/mainstyle.js')}
            {useScript('/js/rankingGL.js')}
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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>

            <Navbarh />
            <div className="content d-flex" style={{marginTop:'80px'}}>
                <Sidebar/>
                <div className="main-content" style={{marginTop: '28px'}}>
                <h4 style={{color: 'white', letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px'}}>Ranking</h4>
                    <div className="table-responsive mt-3">
                        <table className="table table-borderless" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                            <th>Rank</th>
                            <th>Nama</th>
                            <th>Universitas/Perguruan Tinggi</th>
                            <th>Fakultas/Jurusan</th>
                            <th>Benar</th>
                            <th>Salah</th>
                            <th>Kosong</th>
                            <th>Skor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rankingTemplate}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footerbar/>
    </div>
    );
}