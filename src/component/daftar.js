import { useState, useEffect } from "react";
import React, { Component, SyntheticEvent } from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import axios from 'axios';

const Data = [
    {
        username: 'Sadigaul',
        email: 'muslihuddinsadi@gmail.com',
        password: 'sadigaul',
    }
]

export const Daftar = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [universitas, setUniv] = useState('');
    const [fakultas, setFakultas] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [display1, setDisplay1] = useState('d-none');
    const [display2, setDisplay2] = useState('d-none');
    
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password,
            universitas,
            fakultas,
        }

        console.log(user)   

        setDisplay1('d-none');
        setDisplay2('d-none');
        
        if(name == nameData){
            setDisplay1('');
        }else if(email == emailData){
            setDisplay2('');
        }else{
            axios.post(`http://localhost:5000/api/v1/register`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

            setRedirect(true);
        }        
    }

    const nameData = Data.map((test)=>{return test.username});
    const emailData = Data.map((test)=>{return test.email});

    if (redirect) {
        return <Redirect to="/login"/>;
    }

    return (
        <div className="daftar-app">
            <Helmet>
            <link
                type="text/css"
                rel="stylesheet"
                href="css/daftar.css"/>
            <script src="/js/daftarstyle.js" defer></script>
            </Helmet>
            <div className="content d-flex">
                <div className="container trophy px-0" style={{backgroundColor: '#1D1D42', width: '50%'}}>
                    <div className="row ml-3 px-0">
                        <div className="col-12 mt-3">
                            <img src="../assets/gamifylearn 2.png" />
                        </div>
                        <div className="col-12 text-center mt-5">
                            <img className="mt-5" src="../assets/Ilustrasi 1 1.png" />
                        </div>
                        <div className="col-12 text-center mt-5 mb-5">
                            <h1 className="capt">What didn’t kill you make you stronger</h1>
                            <p className="subcapt">- Seminar Motivasi ITB -</p>
                        </div>
                    </div>
                </div>
                <div className="container px-0" style={{maxWidth: '50%', marginLeft: '50%'}}>
                    <Link className="black-logo d-none" to="/">
                        <img src="../assets/gamifylearn logo black 1.png" />
                    </Link>
                    <div className="back-div mt-3 ml-4">
                        <Link className="back" to="/"><i className="fa fa-chevron-left mr-3"></i>Back</Link>
                    </div>
                    <div className="row px-5">
                        <div className="col ml-5 my-4">
                            <h1 className="capt-2">Sign Up</h1>
                            <p className="subcapt-2">Daftarkan akunmu, dan gunakan gamifythink learn untuk meraih nilai yang lebih baik di TPB</p>
                            <div className="capt-ask d-flex">
                                <div className="mr-2">Sudah punya akun?</div>
                                <Link to="/login">login disini</Link>
                            </div>
                        </div>
                        <form className="col-12 ml-5 mb-3" onSubmit={submit}>
                            <div>
                                <p>Nama*</p>
                                <div>
                                    <input type="text" className="input" minlength="5" maxlength="20" placeholder="Masukkan Nama"
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <p className={"warn mt-1 "+display1}>*Nama sudah digunakan</p>
                            </div>
                            <div className="mt-3">
                                <p>Alamat Email*</p>
                                <div>
                                    <input type="email" class="input" minlength="5" placeholder="Masukkan alamat email disini" 
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <p className={"warn mt-1 "+display2}>*Alamat Email sudah digunakan</p>
                            </div>
                            <div className="mt-3">
                                <p>Asal Universitas*</p>
                                <label className="selectdiv">
                                    <select id="universitas" type="text" class="input" onChange={e => setUniv(e.target.value)}>
                                        <option value="" disabled selected>Pilih Universitas</option>
                                        <option value="ITB">Institut Teknologi Bandung</option>
                                        <option value="UI">Universitas Indonesia</option>
                                    </select>
                                </label>
                            </div>
                            <div className="mt-3">
                                <p>Fakultas</p>
                                <label className="selectdiv">
                                    <select id="fakultas" type="text" className="input" onChange={e => setFakultas(e.target.value)}>
                                        <option value="" disabled selected>Pilih Fakultas</option>
                                        <option value="FMIPA">FMIPA</option>
                                        <option value="STEI">STEI</option>
                                        <option value="lain">Lainnya</option>
                                    </select>
                                </label>
                            </div>
                            <div className="mt-3">
                                <p>Password*</p>
                                <div className="passdiv">
                                    <input id="password" type="password" class="input" minlength="5" maxlength="20" placeholder="Masukkan password" 
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <span id="showpass">Show</span>
                                </div>
                            </div>
                            <div className="d-flex mt-4">
                                <label className="checkdiv">
                                    <input id="check" className="check" type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <p className="capt">Saya setuju dengan ketentuan yang berlaku</p>
                            </div>
                            <div className="mt-3">
                                <button id="signup" className="signup" type="submit" disabled>Sign up</button>
                            </div>
                        </form>
                        <div className="col ml-5 batas-or d-flex align-items-center mb-3">
                            <div className="line"></div>
                            <div className="mx-30">Or</div>
                            <div className="line"></div>
                        </div>
                        <div className="col ml-5 mb-5">
                            <div>
                                <button className="signupgoogle" type="submit"><img class="mr-3" src="../assets/flat-color-icons_google.svg" />Sign up with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}