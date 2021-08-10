import { render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';
import DAFTARTO from './Soal/daftarTo';

const checkoutData = DAFTARTO;

const checkoutTemplate = checkoutData.map((check, i) => {
    function hapuscheck(e){
        const checkoutInfo = JSON.parse(localStorage.getItem('checkoutInfo')) || new Array(DAFTARTO.length);
        checkoutInfo[e.target.value] = false;
        localStorage.setItem('checkoutInfo', JSON.stringify(checkoutInfo));
        window.location.reload(false);
    }
    var data =  JSON.parse(localStorage.getItem('checkoutInfo')) || new Array(DAFTARTO.length);
    if(data[i] === true){
    return (
    <tr>
      <td>{check.produk}</td>
      <td>{check.jumlah}</td>
      <td>{check.harga}</td>
      <td>{check.diskon}</td>
      <td>{check.hargaAkhir}</td>
      <td><button value={i} onClick={hapuscheck} className="hapuscheckout">hapus</button></td>
      <td>-</td>
    </tr>
    )
    }
})

export const Checkout = () => {

    const sendcheck = async e => {
        e.preventDefault();
        //const user = JSON.parse(localStorage.getItem('checkoutInfo')) || new Array(DAFTARTO.length);
        //axios.post(`http://localhost:5000/api/v1/checkout/:userid`, { user })
         //   .then(res => {
          //      console.log(res);
          //      console.log(res.data);
          //  })
        console.log('test');
        window.location.href = '/checkout'
    }

    return (
        <div>
            <Helmet>
            {useScript('/js/mainstyle.js')}
            {useScript('/js/homeGL.js')}
            {useScript('/js/checkoutstyle.js')}
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/homeGL.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/checkoutGL.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>

            <Navbarh />
            <div className="content d-flex" style={{marginTop:'80px'}}>
                <Sidebar/>
                <div className="main-content" style={{marginTop: '16px'}}>
                    <div className="d-flex">
                        <Link to="/home" style={{color: 'white', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '16px', lineHeight: '21px'}}><i className="fa fa-arrow-left mr-2"></i>Kembali</Link>
                    </div>
                    <div>
                        <h4 style={{letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px', color: 'white', marginTop: '24px'}}>Check Out</h4>
                        <div className="mt-3">
                            <div className="table-responsive">
                                <table className="table table-borderless" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                    <th>Produk</th>
                                    <th>Jumlah</th>
                                    <th>Harga</th>
                                    <th>Diskon</th>
                                    <th>Harga Akhir</th>
                                    <th>hapus</th>
                                    <th>status</th>
                                    </tr>
                                </thead>
                                <tbody id="checkout">
                                    {checkoutTemplate}
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <h4 className="mt-4" style={{letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '28px', lineHeight: '31px', color: 'white'}}>Transfer Pembayaran</h4>
                        <div className="payment">
                            <img src="../assets/logo-BNI-46-1 1.svg"/>
                            <p className="AN">A. N. Muslihuddin Sa'di Subhan</p>
                            <p className="noRek">12345678910</p>
                            <p className="ket">*Jika transfer dari bank lain harap menambahkan kode 112 di depan nomor rekening</p>
                        </div>
                        <form id="form-cek" onSubmit={sendcheck} className="d-flex justify-content-between align-items-center" style={{marginTop: '16px'}}>
                            <div className="d-flex" style={{color: 'white'}}>
                                <label className="container-checkbox ml-2 mr-2">
                                <input type="checkbox" id="check"/>
                                <span className="btn checkmark"></span>
                                </label>
                                <p className="checkText">Saya telah melakukan transfer ke rekening di atas</p>
                            </div>
                            <button type="submit" id="sel" className="confirm" formAction="" disabled>KONFIRMASI PEMBAYARAN</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footerbar/>
        </div>
    )
}