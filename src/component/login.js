import { useEffect } from "react";
import React, { Fragment, useContext, useState } from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';

import axios from 'axios';

async function loginUser(credentials) {
    return fetch('http://localhost:5000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Data = [
    {
        email: 'muslihuddinsadi@gmail.com',
        password: 'sadigaul',
    }
]

export default function Login({ setToken }){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [data, setData] = useState();
    const [display1, setDisplay1] = useState('d-none');
    const [display2, setDisplay2] = useState('d-none');
    const [loginrouter, loginroute] = useState('/login');

    useEffect(()=>{
        //axios.get(`http://localhost:5000/api/v1/register`)
        //.then(res => {
        //    const persons = res.data;
        //    setData({ persons });
        //})
    });

    const emailData = Data.map((test)=>{return test.email});
    const passwordData = Data.map((test)=>{return test.password});

    const handleSubmit = async e => {
        e.preventDefault();
        setDisplay1('d-none');
        setDisplay2('d-none');

        if (email == emailData && password == passwordData){
            const token = jwt.sign({
                data: email
            }, 'secret', { expiresIn: '1h' });

            console.log(token)
            setToken(token);
            localStorage.setItem('jwtToken', token)

            axios.post('http://localhost:8080/login',data,{ headers: { Authorization:localStorage.getItem('jwtToken') } })
                .then(response=> console.log(response))
                .catch(error => console.log(error));

        }else if(email != emailData){
            setDisplay1('');
        }else if(password != passwordData && email == emailData){
            setDisplay2('')
        }
    }

    return (
        <div className="login-app">
            <Helmet>
            <link
                type="text/css"
                rel="stylesheet"
                href="css/daftar.css"/>
            <script src="/js/loginstyle.js" defer></script>
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
                    <Link className="black-logo d-none" to='/'>
                        <img src="../assets/gamifylearn logo black 1.png" />
                    </Link>
                    <div className="back-div mt-3 ml-4">
                        <Link className="back" to="/"><i className="fa fa-chevron-left mr-3"></i>Back</Link>
                    </div>
                    <div className="row px-5">
                        <div className="col ml-5 mt-4">
                            <h1 className="capt-2">login</h1>
                            <p className="subcapt-2">Nikmati fasilitas materi dan try out TPB terupdate dari kami, demi kehidupan di ITB yang lebih baik.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="col-12 ml-5 mb-3">
                            <div className="mt-3">
                                <p>Alamat Email*</p>
                                <div>
                                    <input id="email" type="email" className="input" minlength="5" placeholder="Masukkan alamat email disini" onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <p className={"warn mt-1 "+display1}>*Alamat Email belum terdaftar</p>
                            </div>
                            <div className="mt-3">
                                <p>Password*</p>
                                <div className="passdiv">
                                    <input id="password" type="password" className="input" minlength="5" maxlength="20" placeholder="Masukkan password" onChange={e => setPassword(e.target.value)}/>
                                    <span id="showpass">Show</span>
                                </div>
                                <p className={"pass-warn warn mt-1 "+display2}>*Password salah</p>
                            </div>
                            <div className="mt-5">
                                <button id="login" value="login" class="signup btn-primary" type="submit" formAction="">Login</button>
                            </div>
                        </form>
                        <div className="col ml-5 batas-or d-flex align-items-center mb-3">
                            <div className="line"></div>
                            <div className="mx-30">Or</div>
                            <div className="line"></div>
                        </div>
                        <div className="col ml-5 mb-5">
                            <div>
                                <button className="signupgoogle" type="submit"><img className="mr-3" src="../assets/flat-color-icons_google.svg" />Login with Google</button>
                            </div>
                            <div className="capt-ask d-flex my-4">
                                <div className="mr-2">Tidak punya akun?</div>
                                <Link to="/daftar">daftar disini</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
