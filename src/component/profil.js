import { render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';
import axios from 'axios';

const Data = [
    {
        name: 'Sadigaul',
        email: 'muslihuddinsadi@gmail.com',
        password: 'sadigaul',
        universitas: 'ITB',
        fakultas: 'sastra kedokteran'
    }
]

const Dataname = Data.map((data)=>{
    return data.name
})
const Datapass = Data.map((data)=>{
    return data.password
})
const Datauniv = Data.map((data)=>{
    return data.universitas
})
const Datafak = Data.map((data)=>{
    return data.fakultas
})

export default function Profil () {
    const [name, setName] = useState(Dataname);
    const [password, setPassword] = useState(Datapass);
    const [universitas, setUniv] = useState(Datauniv);
    const [fakultas, setFak] = useState(Datafak);

    useEffect(()=>{
        //axios.get(`http://localhost:5000/api/v1/profil/:userid`)
        //.then(res => {
        //    const persons = res.data;
        //    setData({ persons });
        //})
    });


    localStorage.setItem('name', Dataname)
    localStorage.setItem('pasword', Datapass)
    localStorage.setItem('univ', Datauniv)
    localStorage.setItem('fakultas', Datafak)


    //setName(localStorage.getItem('name'))
    //setPassword(localStorage.getItem('password'))
    //setUniv(localStorage.getItem('univ'))
    //setFak(localStorage.getItem('fakultas'))


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const user = {
            name,
            password,
            universitas,
            fakultas,
        }

        console.log(user)   

        localStorage.setItem('name', name)
        localStorage.setItem('password', password)
        localStorage.setItem('univ', universitas)
        localStorage.setItem('fakultas', fakultas)

        setName(localStorage.getItem('name'))
        setPassword(localStorage.getItem('password'))
        setUniv(localStorage.getItem('univ'))
        setFak(localStorage.getItem('fakultas'))
        
        axios.post(`http://localhost:5000/api/v1/register`, { user })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }


    return (
        <div>
            <Helmet>
            {useScript('/js/mainstyle.js')}
            {useScript('/js/profilGL.js')}
            <link
                type="text/css"
                rel="stylesheet"
                href="css/homeGL.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="css/profilGL.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>

            <Navbarh />
            <div className="content d-flex" style={{marginTop:'80px'}}>
                <Sidebar/>
                <div className="main-content" style={{marginTop: '40px'}}>
                    <div className="d-flex">
                        <div className="px-0 py-0 mr-2">
                            <div className="foto-profil-edit-main">
                                <img className="foto-profil-edit" src="" alt=""/>
                            </div>
                            <a className="btn">
                                <i className="edit-foto upload-button fas fa-camera"></i>
                                <input className="file-upload" type="file" accept="image/*"/>
                            </a>
                        </div>
                        <div className="px-4 py-1">
                            <h4 id="name" className="nama-profil">{name}</h4>
                            <h5 id="email" className="email-profil">muslihuddinsadi@gmail.com</h5>
                        </div>
                    </div>
                    <div className="mt-25">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5 className="title">Nama</h5>
                                <h5 className="isi">{name}</h5>
                            </div>
                            <div className="edit-data">
                                <button id="edit" className="edit-btn">Edit</button>
                            </div>
                        </div>
                        <form className="data-input disappear">
                            <input type="text" maxlength="30" minlength="5" className="input-text"  onChange={e => setName(e.target.value)}/>
                            <button id="cancel" className="ml-2 cancel-btn">Cancel</button>
                            <button onClick={submit} id="save" className="ml-2 save-btn">Save</button>
                        </form>
                    </div>
                    <div className="line mt-25"></div>
                    <div className="mt-25">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5 className="title">Password</h5>
                                <h5 className="isi">{password}</h5>
                            </div>
                            <div className="edit-data">
                                <button id="edit" className="edit-btn">Edit</button>
                            </div>
                        </div>
                        <form className="data-input disappear">
                            <input type="password" maxlength="30" minlength="5" className="input-text"  onChange={e => setPassword(e.target.value)}/>
                            <button id="cancel" className="ml-2 cancel-btn">Cancel</button>
                            <button id="save" onClick={submit} className="ml-2 save-btn">Save</button>
                        </form>
                    </div>
                    <div className="line mt-25"></div>
                    <div className="mt-25">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5 className="title">Universitas/Perguruan Tinggi</h5>
                                <h5 className="isi">{universitas}</h5>
                            </div>
                            <div className="edit-data">
                                <button id="edit" className="edit-btn">Edit</button>
                            </div>
                        </div>
                        <form className="data-input disappear">
                            <input type="text" maxlength="30" minlength="5" className="input-text"  onChange={e => setUniv(e.target.value)}/>
                            <button id="cancel" className="ml-2 cancel-btn">Cancel</button>
                            <button id="save" onClick={submit} className="ml-2 save-btn">Save</button>
                        </form>
                    </div>
                    <div className="line mt-25"></div>
                    <div className="mt-25">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5 className="title">Fakultas/Jurusan</h5>
                                <h5 className="isi">{fakultas}</h5>
                            </div>
                            <div className="edit-data">
                                <button id="edit" className="edit-btn">Edit</button>
                            </div>
                        </div>
                        <form className="data-input disappear">
                            <input type="text" maxlength="30" minlength="5" className="input-text"  onChange={e => setFak(e.target.value)}/>
                            <button id="cancel" className="ml-2 cancel-btn">Cancel</button>
                            <button id="save" onClick={submit} className="ml-2 save-btn">Save</button>
                        </form>
                    </div>
                    <div className="line mt-25"></div>
                </div>
            </div>
            <Footerbar/>
        </div>
    );
}