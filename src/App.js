import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, useParams, useHistory } from "react-router-dom";
import Login from './component/login';
import {Daftar} from './component/daftar';
import React, { Component, useReducer, createContext, useState, useEffect }  from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import Routes from './component/routegl';
import { LandingPage } from './component/landing';
import {Admin} from './component/Admin/admin';
import jwt from 'jsonwebtoken';
import { Test } from './component/test';


function App() {
  const [token, setToken] = useState();
  const localToken = localStorage.getItem('jwtToken');
  if(!token && localToken!==null){
    setToken(localToken)
  }

  const testId = localStorage.getItem('testid');
  console.log(testId!==null)
  if(testId !== null){
    function Ujian(){return Test(testId)};
    return (
      <Switch >
        <Route path={'/test/'+testId} component={Ujian}></Route>
        <Route path="/home"></Route>
        <Route path='*'>
          <Redirect to={'/test/'+testId}/>
        </Route>
      </Switch>
    )
  }

  if(!token) {
      return (
      <Switch >
        <Route path="/daftar" component={Daftar} /> 
        <Route path="/login" component={Login}><Login setToken={setToken} /></Route>  
        <Route exact path="/" component={LandingPage} />
        <Route path="/Admin" component={Admin} />
        <Route path='*'><Redirect to="/login"/></Route>
      </Switch>
      );
    }

  console.log(token)  
  
  if(token && testId===null){
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Redirect to="/home"/></Route>        
        {Routes.map(({ path, component: component}) => (
          <Route 
          path={path}
          component={component}
          token={token}
          />
        ))}
      </Switch>  
    </div>
  )};
}

export default App;
