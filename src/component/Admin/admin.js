import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbaradmin, Sidebaradmin, Footerbaradmin} from '../navbar';
import useScript from '../Hook/useScript';

const Listformmateri = (props) => {
    console.log(props.dataTodos)
    return (
        <div>
            {props.dataTodos.map((todo)=>{
                return(
                <div className="item">
                    <button className="listmateri btn">
                        <div className="judul2">
                            {todo.title}
                        </div>                            
                    </button> 
                </div>
            )
            })}    
        </div>              
    )
}

const Formmateri = (props) => {
    const [name, setName] = useState('');
    console.log(name)

    const handlesubmit = (event) => {
        event.preventdefault();
        console.log(
            {name}
        )
        const newtodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: name
        }
        props.onCreatetodo(newtodo)
        console.log(newtodo)
    }

    return(
        <div>
        <form className="item" onSubmit={handlesubmit}>
            <button type="button" className="listmateri dropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="judul2">
                    + Tambah Materi
                </div>                            
            </button>
            <div className="dropdown-menu formmateri">
                <div>
                    <h3>Judul Materi</h3>
                    <input type="text" className="input" placeholder="Judul Materi" onChange={e => setName(e.target.value)}/>
                    <button type="submit" onClick={handlesubmit}>submit</button>
                </div>                                  
            </div>            
        </form>    
        </div>
    )
}


export const Admin = props => {
    const [getTodos, setTodos] = useState([
        { id:1, title: 'Matematika' }
    ])

    const eventCreatetodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }
    return (
        <div>
            <Helmet>
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/homeGL.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/materiGL.css"/>
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/admin.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            {useScript('/js/mainstyle.js')}
            {useScript('/js/homeGL.js')}
            </Helmet>
            <Navbaradmin />

            <div className="content d-flex" style={{marginTop:'80px'}}>
                <Sidebaradmin/>
                <div className="main-content" style={{marginTop: '28px'}}>
                    <div className="greeting align-items-center">
                        <img className="greeting-img" src="assets/trophy.png"/>
                        <h1 style={{letterSpacing: '0.5px', fontSize: '40px', lineHeight: '62px'}}>Halo, Admin</h1>
                        <p style={{width: '476px'}}>"Suatu hari senang datang, nikmati saja. Tapi suatu hari sedih akan lebih berkesan, nikmati saja." — NKCTHI</p>
                    </div>
                    <Formmateri onCreatetodo={eventCreatetodo}/>
                    <Listformmateri dataTodos={getTodos}/>                
                </div>
            </div>
            <Footerbaradmin/>
        </div>
    );
}
