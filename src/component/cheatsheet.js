import { render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';
import { useMediaQuery } from 'react-responsive';
import { JudulMateri, MateriData, CheatData } from './materi';

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

const CSheet = (test1, test2) =>{
    console.log(CheatData[test1-1])
    const Judulcheatsheet = CheatData[test1-1].map((chs)=>{
        return chs.judul
    })
    return(
        <div>        
        <Desktop>
            <div>
                <div className="path d-flex">
                    <Link to="/materi" style={{color: 'white', fontSize: '16px'}}>Mata Kuliah</Link>
                    <p><i className="fa fa-chevron-right mx-3" style={{color: 'white'}}></i></p>
                    <Link to={"/Listmateri/"+(test1)} style={{color: 'white', fontSize: '16px'}}>{JudulMateri[test1-1]}</Link>
                    <p><i className="fa fa-chevron-right mx-3" style={{color: 'white'}}></i></p>
                    <a href="#" style={{color: '#6FCF97', fontSize: '16px'}}>{Judulcheatsheet[test2-1]}</a>
                </div>
                <div className="ch d-flex mt-4">
                    <div className="bullet-title mr-3"></div>
                    <h1 className="b-title">{Judulcheatsheet[test2-1]}</h1>
                    <div className="ml-auto">
                        <div className="dropdown">
                            <a className="download btn" id="download" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Download<i class="fa fa-chevron-down ml-2"></i></a>
                            <div className="dropdown-menu mt-1" aria-labelledby="download">
                            <div className="download-content">
                                <a className="dropdown-item" href="#">
                                <span>English<i className="lni lni-download ml-3" style={{fontSize: '14px'}}></i></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span>Indonesia<i className="lni lni-lock ml-3" style={{fontSize: '14px'}}></i></span>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="panel">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </Desktop>

        <Mobile>
        <div>
            <div className="path row mx-0 px-0">
                <Link to="/materi" style={{color: 'white', fontSize: '16px'}}>Mata Kuliah</Link>
                <div className="row mx-0 px-0">
                    <p><i className="fa fa-chevron-right mx-2" style={{color: 'white'}}></i></p>
                    <Link to={"/Listmateri/"+(test1)} style={{color: 'white', fontSize: '16px'}}>{JudulMateri[test1-1]}</Link>
                </div>
                <div className="row mx-0 px-0">
                    <p><i className="fa fa-chevron-right mx-2" style={{color: 'white'}}></i></p>
                    <a href="#" style={{color: '#6FCF97', fontSize: '16px'}}>{Judulcheatsheet[test2-1]}</a>
                </div>
            </div>
            <div class="ch d-flex mt-4">
                <div className="bullet-title mr-3"></div>
                <h1 className="b-title">{Judulcheatsheet[test2-1]}</h1>
            </div>
            <div className="ch d-flex">
                <div className="ml-auto">
                    <div className="dropdown">
                        <a className="download btn" id="download" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Download<i class="fa fa-chevron-down ml-2"></i></a>
                        <div className="dropdown-menu mt-1" aria-labelledby="download">
                        <div className="download-content">
                            <a className="dropdown-item" href="#">
                            <span>English<i className="lni lni-download ml-3" style={{fontSize: '14px'}}></i></span>
                            </a>
                            <a className="dropdown-item" href="#">
                                <span>Indonesia<i className="lni lni-lock ml-3" style={{fontSize: '14px'}}></i></span>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="panel">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
        </Mobile>
        </div>
    );
}
export const Cheatsheet = (test1, test2) => {
    return (
        <div>
            <Helmet>
            {useScript('/js/mainstyle.js')}
            {useScript('/js/materiGL.js')}
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/homeGL.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/kurikulumGL.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>

            <Navbarh />
            <div className="content d-flex" style={{marginTop:'80px'}}>
                <Sidebar/>
                <div class="main-content" style={{marginTop: '28px'}}>
                    {CSheet(test1, test2)}
                </div>                
            </div>
        </div>
        );
    }