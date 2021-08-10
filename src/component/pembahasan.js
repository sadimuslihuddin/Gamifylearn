import { render } from '@testing-library/react';
import React, { useState, useEffect, Component} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar} from './navbar';
import useScript from './Hook/useScript';
import PEMBAHASANDATA from './Soal/pembahasan';
import { useMediaQuery } from 'react-responsive';

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

const PembahasanJudul = PEMBAHASANDATA.map((ujian) => {
    return ujian.judul
})

export const PEMBAHASANSOALDATA = PEMBAHASANDATA.map((ujian) => {
    return ujian.soal
})

const PEMBAHASANSOALLENGTH = PEMBAHASANSOALDATA.length;

class PembahasanTemplate extends React.Component {

    state = {
      projects: PEMBAHASANSOALDATA[this.props.dataset-1],
      activeProject: '',
      modalTitle: '',
      modalopP: '',
      modalopBenar: '',
      bahas: '',
      dataset: this.props.dataset,
      change: ''
    }    
    
    componentDidUpdate(prevProps){
        if(this.props.index !== prevProps.index){
            this.update();
        }        
    }

    update = () => {
        var idx = this.props.index;
        this.setState({
            modalopP: this.state.projects[idx].opsiPenjawab,
            modalopBenar: this.state.projects[idx].opsiBenar,
        })
    }

    handleModalOpen = (idx) => {
      this.setState({
        activeProject: idx,
        modalTitle: this.state.projects[idx].isi,
        modalopP: this.state.projects[idx].opsiPenjawab,
        modalopBenar: this.state.projects[idx].opsiBenar,
        bahas: this.state.projects[idx].bahas,
      });  
    };
  
    handleModalClose = () => {
      this.setState({
        activeProject: ''
      });  
    };
  
    handleNextProject = () => {
      
      var arr = this.state.projects.length;
      var idx = this.state.activeProject;
      console.log(idx, arr)
      if (idx === arr-1){
        var idx = arr-1;
      }else{
        var idx = this.state.activeProject + 1;
      }
      
      if(this.state.modalTitle!=this.state.bahas){
      this.setState({
        activeProject: idx,
        modalTitle: this.state.projects[idx].isi,
        modalopP: this.state.projects[idx].opsiPenjawab,
        modalopBenar: this.state.projects[idx].opsiBenar,
        bahas: this.state.projects[idx].bahas,
      })
      }else{
        this.setState({
            activeProject: idx,
            modalTitle: this.state.projects[idx].bahas,
            modalopP: this.state.projects[idx].opsiPenjawab,
            modalopBenar: this.state.projects[idx].opsiBenar,
            bahas: this.state.projects[idx].bahas,
          })
      }
    }
  
    handlePrevProject = () => {
      var arr = this.state.projects.length;
      var idx = this.state.activeProject;
      
      console.log('initial: ' + idx);
      
      if (idx === 0) {
        var idx = 0;
      } else {
        var idx = idx -1;
      }
      
      console.log('updated: ' + idx);
      
      if(this.state.modalTitle!=this.state.bahas){
        this.setState({
            activeProject: idx,
            modalTitle: this.state.projects[idx].isi,
            modalopP: this.state.projects[idx].opsiPenjawab,
            modalopBenar: this.state.projects[idx].opsiBenar,
            bahas: this.state.projects[idx].bahas,
        })
        }
        else{
        this.setState({
            activeProject: idx,
            modalTitle: this.state.projects[idx].bahas,
            modalopP: this.state.projects[idx].opsiPenjawab,
            modalopBenar: this.state.projects[idx].opsiBenar,
            bahas: this.state.projects[idx].bahas,
        })
        }
    }

    handleNumber = (idx) => {
        if(this.state.modalTitle!=this.state.bahas){
        this.setState({
            activeProject: idx,
            modalTitle: this.state.projects[idx].isi,
            modalopP: this.state.projects[idx].opsiPenjawab,
            modalopBenar: this.state.projects[idx].opsiBenar,
            bahas: this.state.projects[idx].bahas,
        })
        }else{
            this.setState({
                activeProject: idx,
                modalTitle: this.state.projects[idx].bahas,
                modalopP: this.state.projects[idx].opsiPenjawab,
                modalopBenar: this.state.projects[idx].opsiBenar,
                bahas: this.state.projects[idx].bahas,
            })
        }
    }
    
    change = () => {
        var idx = this.state.activeProject;
        if(this.state.modalTitle!=this.state.bahas){
        this.setState({
            modalTitle: this.state.projects[idx].bahas,
            textchange: "LIHAT SOAL",
        })
        }else{
        this.setState({
            modalTitle: this.state.projects[idx].isi,
            textchange: "LIHAT PEMBAHASAN",
        }) 
        }
    }

    render() {
      
      console.log(this.state)
        
      if(this.state.activeProject === '') {
          var idx = 0;
          this.setState({
            activeProject: idx,
            modalTitle: this.state.projects[idx].isi,
            modalopP: this.state.projects[idx].opsiPenjawab,
            modalopBenar: this.state.projects[idx].opsiBenar,
            bahas: this.state.projects[idx].bahas,
            textchange: "LIHAT PEMBAHASAN",
          });   
          return(
              <div>
                <Modal 
                    title={this.state.modalTitle}
                    onNext={this.handleNextProject}
                    onPrev={this.handlePrevProject}
                    index={this.state.activeProject+1}
                    opP={this.state.modalopP}
                    opBenar={this.state.modalopBenar}
                    judul={PembahasanJudul[this.props.dataset-1]}
                    dataset={this.props.dataset-1}
                    numberOpen={this.handleNumber}
                    length={this.state.projects.length}
                    bahas={this.props.bahas}
                    change={this.change}
                    textchange={this.state.textchange}
                    />
              </div>
          )
      } else {
        console.log(this.state)
        return (
          <div>
            <Modal 
              title={this.state.modalTitle}
              onNext={this.handleNextProject}
              onPrev={this.handlePrevProject}
              index={this.state.activeProject+1}
              opP={this.state.modalopP}
              opBenar={this.state.modalopBenar}
              judul={PembahasanJudul[this.props.dataset-1]}
              dataset={this.props.dataset-1}
              numberOpen={this.handleNumber}
              length={this.state.projects.length}
              bahas={this.props.bahas}
              change={this.change}
              textchange={this.state.textchange}
            />
          </div>
        );
      }
    }
  }

  
  class Modal extends React.Component {

    state = {
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        answerE: '',
    }
    
    componentDidUpdate(prevProps){
        if(this.props.index !== prevProps.index){
            this.update();
        }        
    }

    update = () => {
        if(this.props.opP === "A"){
            this.setState({
                answerA: 'user-wrong',
                answerB: '',
                answerC: '',
                answerD: '',
                answerE: '',
            })
        }else if(this.props.opP === "B"){
            this.setState({
                answerA: '',
                answerB: 'user-wrong',
                answerC: '',
                answerD: '',
                answerE: '',
            })
        }else if(this.props.opP === "C"){
            this.setState({
                answerA: '',
                answerB: '',
                answerC: 'user-wrong',
                answerD: '',
                answerE: '',
            })
        }else if(this.props.opP === "D"){
            this.setState({
                answerA: '',
                answerB: '',
                answerC: '',
                answerD: 'user-wrong',
                answerE: '',
            })
        }else if(this.props.opP === "E"){
            this.setState({
                answerA: '',
                answerB: '',
                answerC: '',
                answerD: '',
                answerE: 'user-wrong',
            })
        }

        if(this.props.opBenar === "A"){
            this.setState({
                answerA: 'true',
            })
        }else if(this.props.opBenar === "B"){
            this.setState({
                answerB: 'true',
            })
        }else if(this.props.opBenar === "C"){
            this.setState({
                answerC: 'true',
            })
        }else if(this.props.opBenar === "D"){
            this.setState({
                answerD: 'true',
            })
        }else if(this.props.opBenar === "E"){
            this.setState({
                answerE: 'true',
            })
        }
    }
    render() {
      return (
          <div>
              <Desktop>
                <div className="row d-flex mx-0 justify-content-center" style={{marginTop: '100px'}}>
                    <div className="col-xl-7 col-lg-7 col-md-12 col-xs-12 h-100 mb-md-4 mb-xs-0 px-0 mr-xl-3">
                        <div className="title d-flex mb-4">
                            <Link to="/skor" ><i className="fa fa-arrow-left mr-3"></i></Link>
                            <span>{this.props.judul}</span>                    
                        </div>                    
                        <div className="cardbody soal mb-4">
                            <h4>Soal No. {this.props.index}</h4>
                            <p >{this.props.title}</p>
                            <div className="radio">
                                <div className="mt-2">
                                    <label for="a">
                                        <input type="radio" name="opt" id="a" value="a" disabled/>
                                        <span  onClick="numberfill()" className={"btn "+this.state.answerA}>A</span>
                                    </label>
                                    <span className="ml-2">{this.props.opA}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="b">
                                        <input type="radio" name="opt" id="b" value="b" disabled/>
                                        <span onclick="numberfill()" className={"btn "+this.state.answerB}>B</span>
                                    </label>
                                    <span class="ml-2">{this.props.opB}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="c">
                                        <input type="radio" name="opt" id="c" value="c" disabled/>
                                        <span onclick="numberfill()" className={"btn "+this.state.answerC}>C</span>
                                    </label>
                                    <span class="ml-2">{this.props.opC}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="d">
                                        <input type="radio" name="opt" id="d" value="d" disabled/>
                                        <span onclick="numberfill()" className={"btn "+this.state.answerD}>D</span>
                                    </label>
                                    <span class="ml-2">{this.props.opD}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="e">
                                        <input type="radio" name="opt" id="e" value="e" disabled/>
                                        <span onclick="numberfill()" className={"btn "+this.state.answerE}>E</span>
                                    </label>
                                    <span className="ml-2">{this.props.opE}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-xs-12 right-content mb-4">
                        <div className="time mt-2 mb-2 px-auto py-auto d-flex justify-content-around">
                            <p className="my-auto">Sisa waktu : </p>
                            <div>
                                <span id="jam">00</span>
                                <span>:</span>
                                <span id="menit">00</span>
                                <span>:</span>
                                <span id="detik">00</span>
                            </div>
                        </div>
                        <form className="c-answer mb-4 px-0">
                            <div className="nomor">
                                <div className="row d-flex justify-content-center">
                                    {PEMBAHASANSOALDATA[this.props.dataset].map((soalData, i) => {
                                        if(soalData.opsiBenar==soalData.opsiPenjawab && i+1 != this.props.index){
                                            return (
                                                <div class="px-0">
                                                    <Number                                          
                                                        idx={i}                                           
                                                        numberOpen={this.props.numberOpen}
                                                        class='number true'
                                                    />
                                                </div>
                                            );
                                        }else if (i+1 == this.props.index){
                                            return (
                                            <div class="px-0">
                                                <Number                                          
                                                    idx={i}                                           
                                                    numberOpen={this.props.numberOpen}
                                                    class='number focus'
                                                />
                                            </div>
                                            )
                                        }else{
                                            return (
                                            <div class="px-0">
                                                <Number                                          
                                                    idx={i}                                           
                                                    numberOpen={this.props.numberOpen}
                                                    class='number wrong'
                                                />
                                            </div>
                                            )
                                        };
                                    })}
                                </div>
                            </div>
                        </form>
                        <form className="pager d-flex mb-4 px-0">
                            <button type="button" onClick={this.props.onPrev} className="prev mr-2">
                                <i className="fa fa-angle-left mr-2"></i>
                                Sebelumnya
                            </button>
                            <button type="button" onClick={this.props.onNext} className="next">
                                Selanjutnya
                                <i className="fa fa-angle-right ml-2"></i>
                            </button>
                        </form>
                        <form className="col-12 px-0">                                    
                        <a>
                            <button type="button" className="save text-center" onClick={this.props.change}>
                                {this.props.textchange}
                            </button>
                        </a>
                        </form>
                    </div>            
                </div>
              </Desktop>

              <Mobile>
              <div className="row d-flex mx-0 justify-content-center" style={{marginTop: '100px'}}>
                    <div className="col-xl-7 col-lg-12 col-md-12 col-xs-12 h-100 mb-md-4 mb-xs-0 px-0 mr-xl-3">
                        <div className="title">
                            <span><Link to="/skor" ><i className="fa fa-arrow-left mr-3"></i></Link>{this.props.judul}</span>
                        </div>
                        <div className="mt-3 title d-flex">
                            <form className="pager d-flex mb-2 px-0 mr-2">
                                <button type="button" onClick={this.props.onPrev} className="prev mr-2">
                                    <i className="bi bi-chevron-left mr-2"></i>
                                </button>
                                <button type="button" onClick={this.props.onNext} className="next">
                                    <i className="bi bi-chevron-right ml-2"></i>
                                </button>
                            </form>
                            <div className="dropdown mr-2">
                                <button className="drop-nomor" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-chevron-down mr-2"></i>{this.props.index}</button>
                                <form className="dropdown-menu c-answer mb-4 px-0">
                                    <div className="nomor">
                                        <div className="row d-flex justify-content-center">
                                        {PEMBAHASANSOALDATA[this.props.dataset].map((soalData, i) => {
                                            if(soalData.opsiBenar==soalData.opsiPenjawab && i+1 != this.props.index){
                                                return (
                                                    <div class="px-0">
                                                        <Number                                          
                                                            idx={i}                                           
                                                            numberOpen={this.props.numberOpen}
                                                            class='number true'
                                                        />
                                                    </div>
                                                );
                                            }else if (i+1 == this.props.index){
                                                return (
                                                <div class="px-0">
                                                    <Number                                          
                                                        idx={i}                                           
                                                        numberOpen={this.props.numberOpen}
                                                        class='number focus'
                                                    />
                                                </div>
                                                )
                                            }else{
                                                return (
                                                <div class="px-0">
                                                    <Number                                          
                                                        idx={i}                                           
                                                        numberOpen={this.props.numberOpen}
                                                        class='number wrong'
                                                    />
                                                </div>
                                                )
                                            };
                                        })}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="time mt-2 mb-2 px-auto py-auto d-flex justify-content-start">
                                <p className="my-auto">Sisa waktu : </p>
                                <div className="ml-2">
                                    <span id="jam">00</span>
                                    <span>:</span>
                                    <span id="menit">00</span>
                                    <span>:</span>
                                    <span id="detik">00</span>
                                </div>
                            </div>
                        </div>
                        <div className="cardbody soal mb-4">
                            <h4>Soal No. {this.props.index}</h4>
                            <p>{this.props.title}</p>
                            <div className="radio">
                                <div className="mt-2">
                                    <label for="a">
                                        <input type="radio" name="opt" id="a" value="a" disabled/>
                                        <span  onClick="numberfill()" className={"btn "+this.state.answerA}>A</span>
                                    </label>
                                    <span className="ml-2">{this.props.opA}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="b">
                                        <input type="radio" name="opt" id="b" value="b" disabled/>
                                        <span onclick="numberfill()" className={"btn "+this.state.answerB}>B</span>
                                    </label>
                                    <span class="ml-2">{this.props.opB}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="c">
                                        <input type="radio" name="opt" id="c" value="c" disabled/>
                                        <span onclick="numberfill()" className={"btn "+this.state.answerC}>C</span>
                                    </label>
                                    <span class="ml-2">{this.props.opC}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="d">
                                        <input type="radio" name="opt" id="d" value="d" disabled/>
                                        <span onclick="numberfill()" className={"btn "+this.state.answerD}>D</span>
                                    </label>
                                    <span class="ml-2">{this.props.opD}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="e">
                                        <input type="radio" name="opt" id="e" value="e" disabled/>
                                        <span onclick="numberfill()" className={"btn "+this.state.answerE}>E</span>
                                    </label>
                                    <span className="ml-2">{this.props.opE}</span>
                                </div>                        
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-xs-12 right-content mb-4">
                        <form className="col-12 px-0">                                    
                        <a>
                            <button type="button" className="save text-center" onClick={this.props.change}>
                                {this.props.textchange}
                            </button>
                        </a>
                        </form>
                    </div>
                </div>
              </Mobile>
          </div>
      );
    }
  }
  
  class Number extends React.Component {
      
    render() {
    console.log(this.props.idx)
      return (
        <div>
            <button type="button" onClick={() => {this.props.numberOpen(this.props.idx)}} class={this.props.class}>
                {this.props.idx+1}
            </button>
        </div>
      );
    }
  }

export const Pembahasan = (test) => {
    return (
        <div>
            <Helmet>
            <link
                type="text/css"
                rel="stylesheet"
                href="/css/testGL.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>
            <div>
                <nav className="navbar navbar-default fixed-top">
                    <a className="navbar-brand mb-1" href="#">
                        <img id="brand-logo" src="/assets/gamifylearn 1.png" alt=""/>
                    </a>
                </nav>
                {   
                    PEMBAHASANSOALDATA[test-1].map((soal, i) => {
                        console.log(soal)
                        var thisnumber = 0;
                        if(thisnumber === i){
                        return(
                            <div>                                                 
                                    <PembahasanTemplate dataset={test}/>                                    
                            </div>                        
                    );
                }
                    })
                }
            </div>
        </div>
    );
}

