import {Home} from './home';
import {Checkout} from './checkout';
import Profil from './profil';
import Ranking from './ranking';
import {Materi, Listmateri, Konten} from './materi';
import Skor from './skorpembahasan';
import Tryout from './tryout';
import Confirm from './confirm';
import { Produk } from './produk';
import {Cheatsheet} from './cheatsheet'
import ReactDOM from 'react-dom';
import { Test, SOALDATA } from './test';
import { Pembahasan, PEMBAHASANSOALDATA } from './pembahasan';
import { LandingPage, LandingPageuser } from './landing';
import { Peraturan } from './peraturan';
import { Admin } from './Admin/admin';
import { BrowserRouter, Link, Router, Route, Redirect, Switch, useParams, useHistory } from "react-router-dom";

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    console.log(id)
    return (
      <div>
        {Listmateri(id)}
      </div>
    );
  }
  
  export const Datasoal = () => {
    let { soal } = useParams();
    const data = SOALDATA[soal];
    return data
  }

  function Aturan() {
    let { aturanid } = useParams();
    return (
      <div>
        {Peraturan(aturanid)}
      </div>
    );
  }

  function PembahasanM() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { pembahasan } = useParams();
    console.log(PEMBAHASANSOALDATA[pembahasan])
    return (
      <div>
        {Pembahasan(pembahasan)}
      </div>
    );
  }

  function Product(){
    let { produkid } = useParams();
    return(
      <div>
        {Produk(produkid)}
      </div>
    )
  }

  function Csheet() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { cheatsheetid } = useParams();
    let { cheatsheetsub } = useParams();
    console.log(cheatsheetid, cheatsheetsub)
    return (
      <div>
        {Cheatsheet(cheatsheetid, cheatsheetsub)}
      </div>
    );
  }

  function KontenM() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { bab } = useParams();
    let { subbab } = useParams();
    console.log(bab, subbab)
    return (
      <div>
        {Konten(bab, subbab)}
      </div>
    );
  }

const Routes = [{
    path: '/home',
    component: Home,
    },{
    path: '/admin',
    component: Admin,
    },{
    path: '/profil',
    component: Profil
    },{
    path: '/ranking',
    component: Ranking,
    },{
    path: '/materi',
    component: Materi,
    },{
    path: '/checkout',
    component: Checkout,
    },{
    path: '/skor',
    component: Skor,
    },{
    path: '/tryout',
    component: Tryout,
    },{
    path: '/confirm',
    component: Confirm,
    },{
    path: '/listmateri/:id',
    component: Child,
    },{
    path: '/bahasan/:pembahasan',
    component: PembahasanM,
    },{
    path: '/cheatsheet/:cheatsheetid/:cheatsheetsub',
    component: Csheet,
    },{
    path: '/bab/:bab/:subbab',
    component: KontenM,
    },{
    path: '/aturan/:aturanid',
    component: Aturan,
    },{
    path: '/produk/:produkid',
    component: Product,
    },{
    path: '/landing',
    component: LandingPageuser,
    }
  ]

  export default Routes;