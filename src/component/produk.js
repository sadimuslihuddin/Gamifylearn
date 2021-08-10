import { render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';
import { useMediaQuery } from 'react-responsive';
import DAFTARTO from './Soal/daftarTo';

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

export const Produk = (test) => {

    const submit = (e) => {        
        const checkoutInfo = JSON.parse(localStorage.getItem('checkoutInfo')) || new Array(DAFTARTO.length);
        checkoutInfo[test-1] = true;
        localStorage.setItem('checkoutInfo', JSON.stringify(checkoutInfo));
        window.location.href= '/checkout'
    }

    const waktuTO = DAFTARTO.map((tryout) => {        
        return tryout.waktu;
    });

    const hargaTO = DAFTARTO.map((tryout) => {
        return tryout.harga;
    });

    const judulTO = DAFTARTO.map((tryout) => {
        return tryout.produk;
    });

    return (
        <div>
            <Helmet>
            {useScript('/js/mainstyle.js')}
            {useScript('/js/homeGL.js')}
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/homeGL.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/productGL.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>

            <Navbarh />
            <div className="content d-flex" style={{marginTop:'80px'}}>
                <Sidebar/>
                <div id="product" className="main-content" style={{marginTop: '40px'}}>
                    <Desktop>
                    <div className="path d-flex">
                        <Link to='/tryout' style={{color: 'white', fontSize: '16px'}}>Try Out UTS - UAS</Link>
                        <p><i className="fa fa-chevron-right mx-3" style={{color: 'white'}}></i></p>
                        <a href="#" style={{color: '#6FCF97', fontSize: '16px'}}>{judulTO[test-1]}</a>
                    </div>
                    <div style={{marginTop:'28px'}}>
                    <h4 style={{letterSpacing: '0.3px',fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px', color: 'white'}}>{judulTO[test-1]}</h4>
                        <h5 className="mt-3" style={{fontFamily: 'DM Sans', fontSize: '18px', fontWeight: '400', lineHeight: '19px', color: '#6FCF97' }}>Semester 1</h5>
                        <div>
                            <div className="row mx-0">
                                <div className="item d-flex" style={{marginTop: '24px'}}>
                                    <img className="card-img" src="https://picsum.photos/300/200"/>
                                    <div className="ml-5" style={{color: 'white'}}>
                                        <p className="title-desc">Deskripsi & Peraturan</p>
                                        <ol className="desc">
                                            <li>Try Out mencakup 30 butir soal pilihan ganda</li>
                                            <li>{'Try Out dilaksanakan selama '+ waktuTO[test-1] +' menit'}</li>
                                            <li>Jika telah selesai mengerjakan, wajib menekan tombol SUBMIT agar jawaban tersimpan di server</li>
                                            <li>Try Out dilaksanakan secara close book dan dilarang melakukan kerja sama dalam bentuk apapun</li>
                                        </ol>
                                        <div className="price d-flex">
                                            <p className="mr-3">Harga: </p>
                                            <p>{hargaTO[test-1]}</p>
                                        </div>
                                        <form className="pesan">
                                            <Link to="/"><button type="button" className="langganan"><i className="far fa-gem mr-1"></i>GO PREMIUM</button></Link>
                                            <Link to="/checkout"><button type='submit' onClick={submit} className="checkout"><i className="fa fa-shopping-cart mr-1"></i>CHECKOUT</button></Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Desktop>

                    <Mobile>
                    <div className="path row px-0 mx-0">
                        <a href="tryoutGL.html" style={{color: 'white', fontSize: '16px'}}>Try Out UTS - UAS</a>
                        <div className="row px-0 mx-0">
                            <p><i className="fa fa-chevron-right mx-2" style={{color: 'white'}}></i></p>
                            <a href="#" style={{color: '#6FCF97', fontSize: '16px'}}>UTS 1 Fisika Dasar IA</a>
                        </div>
                    </div>
                    <div style={{marginTop:'28px'}}>
                        <h4 style={{letterSpacing: '0.3px',fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px', color: 'white'}}>UTS 1 Fisika Dasar IA</h4>
                        <h5 className="mt-3" style={{fontFamily: 'DM Sans', fontSize: '18px', fontWeight: '400', lineHeight: '19px', color: '#6FCF97' }}>Semester 1</h5>
                        <div>
                            <div className="row mx-0">
                                <div className="item" style={{marginTop: '24px'}}>
                                    <img className="card-img" src="https://picsum.photos/300/200"/>
                                    <div className="mt-3" style={{color: 'white'}}>
                                        <p className="title-desc">Deskripsi & Peraturan</p>
                                        <ol className="desc">
                                            <li>Try Out mencakup 30 butir soal pilihan ganda</li>
                                            <li>Try Out dilaksanakan selama 120 menit</li>
                                            <li>Jika telah selesai mengerjakan, wajib menekan tombol SUBMIT agar jawaban tersimpan di server</li>
                                            <li>Try Out dilaksanakan secara close book dan dilarang melakukan kerja sama dalam bentuk apapun</li>
                                        </ol>
                                        <div className="price d-flex">
                                            <p className="mr-3">Harga: </p>
                                            <p>Rp 10.000,00</p>
                                        </div>
                                        <form className="pesan d-flex">
                                            <Link to="/landing"><button className="langganan"><i className="far fa-gem mr-1"></i>GO PREMIUM</button></Link>
                                            <Link to="/checkout"><button className="checkout"><i className="fa fa-shopping-cart mr-1"></i>CHECKOUT</button></Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Mobile>
                </div>
            </div>
        </div>
    )
}