import { render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';

export default function Confirm () {
    return (
        <div>
            <Helmet>
            {useScript('/js/mainstyle.js')}
            <link
                type="text/css"
                rel="stylesheet"
                href="css/homeGL.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>

            <Navbarh />
            <div className="content" style={{marginTop: '80px', marginBottom: '80px'}}>
                <div className="conf text-center">
                    <img className="mt-5" src="assets/phone illustration 1.png"/>
                    <h1 className="mt-5" style={{fontFamily: 'DM Sans', fontWeight: 'bold', fontSize: '28px', lineHeight: '22px', color: '#FFFFFF'}}>Yeay check out berhasil!</h1>
                    <p className="mt-4" style={{fontFamily: 'DM Sans', fontSize: '20px', lineHeight: '26px', color: '#FFFFFF'}}>Whatsapp akan otomatis terbuka dan silakan lampirkan bukti<br/>pembayaran untuk mengkonfirmasi pembayaran</p>
                    <Link className="mt-5 btn btn-primary py-3" to="/home" style={{fontFamily: 'DM Sans', fontWeight: 'bold', width: '201px', borderRadius: '4px'}}>KEMBALI KE BERANDA</Link>
                </div>
            </div>
        </div>
    );
}