import { render } from '@testing-library/react';
import React, { useState, useEffect, Component} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch } from "react-router-dom";
import useScript from './Hook/useScript';
import UJIANDATA from './Soal/soal';
import { useMediaQuery } from 'react-responsive';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import setSeconds from 'date-fns/setSeconds';
import getHours from 'date-fns/getHours';

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

const UjianJudul = UJIANDATA.map((ujian) => {
    return ujian.judul
})

export const SOALDATA = UJIANDATA.map((ujian) => {
    return ujian.soal
})

const SOALLENGTH = SOALDATA.length;

function clearTime(){
    //const user = JSON.parse(localStorage.getItem('jawabInfo'));
        //axios.post(`http://localhost:5000/api/v1/test/:testid/:userid`, { user })
         //   .then(res => {
          //      console.log(res);
          //      console.log(res.data);
          //  })

    localStorage.removeItem("startTime");
    localStorage.removeItem("testid");
    localStorage.removeItem("raguInfo");
    localStorage.removeItem("jawabInfo");
    window.location.href = "/home";
}

class SoalTemplate extends React.Component {

    state = {
      projects: SOALDATA[this.props.dataset-1],
      activeProject: '',
      modalTitle: '',
      modalopA: '',
      modalopB: '',
      modalopC: '',
      modalopD: '',
      modalopE: '',
      dataset: this.props.dataset,
      nomorRaguIdx: '',
      jawabsimpan: '',
      answer: JSON.parse(localStorage.getItem('jawabInfo')),
    }   
    
    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):
        var answerdata = JSON.parse(localStorage.getItem('jawabInfo'));
        if (this.state.jawabsimpan !== prevState.jawabsimpan) {
          this.updateState1();
        }else if((this.state.jawabsimpan === null) && (answerdata[this.state.activeProject] !== null)){
          this.updateState2();
        }
      }
    
    updateState2(){
        // removed for brevity, doing some calculations here
        // based on some data that is stored in Redux and is 
        // passed here as props.
        var answerdata = JSON.parse(localStorage.getItem('jawabInfo'));
        console.log(answerdata[this.state.activeProject])
        if((this.state.jawabsimpan === null) && (this.state.answer[this.state.activeProject] === null)){
            this.setState({
                jawabsimpan: answerdata[this.state.activeProject],
            });
        }
        console.log(this.state.jawabsimpan)
    }

    updateState1(){
        // removed for brevity, doing some calculations here
        // based on some data that is stored in Redux and is 
        // passed here as props.
        var answerdata = JSON.parse(localStorage.getItem('jawabInfo'));
        if((this.state.jawabsimpan !== null)){
            this.setState({
                jawabsimpan: answerdata[this.state.activeProject],
            });
        }else if((this.state.jawabsimpan === null)){
            this.setState({
                jawabsimpan: answerdata[this.state.activeProject],
            });
        }
        console.log(this.state.jawabsimpan)
    }
    
    handleModalOpen = (idx) => {
      this.setState({
        activeProject: idx,
        modalTitle: this.state.projects[idx].isi,
        modalopA: this.state.projects[idx].opsiA,
        modalopB: this.state.projects[idx].opsiB,
        modalopC: this.state.projects[idx].opsiC,
        modalopD: this.state.projects[idx].opsiD,
        modalopE: this.state.projects[idx].opsiE,
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
      if (idx === arr-1){
        var idx = arr-1;
      }else{
        var idx = this.state.activeProject + 1;
      }
      
      this.setState({
        activeProject: idx,
        modalTitle: this.state.projects[idx].isi,
        modalopA: this.state.projects[idx].opsiA,
        modalopB: this.state.projects[idx].opsiB,
        modalopC: this.state.projects[idx].opsiC,
        modalopD: this.state.projects[idx].opsiD,
        modalopE: this.state.projects[idx].opsiE,
        jawabsimpan: this.state.answer[idx],
      }); 
    }
  
    handlePrevProject = () => {
      var arr = this.state.projects.length;
      var idx = this.state.activeProject;
      
      if (idx === 0) {
        var idx = 0;
      } else {
        var idx = idx -1;
      }
      
      this.setState({
        activeProject: idx,
        modalTitle: this.state.projects[idx].isi,
        modalopA: this.state.projects[idx].opsiA,
        modalopB: this.state.projects[idx].opsiB,
        modalopC: this.state.projects[idx].opsiC,
        modalopD: this.state.projects[idx].opsiD,
        modalopE: this.state.projects[idx].opsiE,
        jawabsimpan: this.state.answer[idx],
      });  
    }

    handleNumber = (idx) => {
        this.setState({
            activeProject: idx,
            modalTitle: this.state.projects[idx].isi,
            modalopA: this.state.projects[idx].opsiA,
            modalopB: this.state.projects[idx].opsiB,
            modalopC: this.state.projects[idx].opsiC,
            modalopD: this.state.projects[idx].opsiD,
            modalopE: this.state.projects[idx].opsiE,
            jawabsimpan: this.state.answer[idx],
          });
    }

    handleRagu = () => {
        // retrieve it (Or create a blank array if there isn't any info saved yet),
        var nomorRagu = JSON.parse(localStorage.getItem('raguInfo')) || new Array(SOALDATA[this.props.dataset-1].length);
        // add to it,

        var idx = this.state.activeProject;

        if (nomorRagu[idx] == true){
            nomorRagu[idx] = false;
            localStorage.setItem('raguInfo', JSON.stringify(nomorRagu));
        }else{
            nomorRagu[idx] = true;
            localStorage.setItem('raguInfo', JSON.stringify(nomorRagu));
        }
    }

   
    render() {
        
      if(this.state.activeProject === '') {
          var idx = 0;
          this.setState({
            activeProject: idx,
            modalTitle: this.state.projects[idx].isi,
            modalopA: this.state.projects[idx].opsiA,
            modalopB: this.state.projects[idx].opsiB,
            modalopC: this.state.projects[idx].opsiC,
            modalopD: this.state.projects[idx].opsiD,
            modalopE: this.state.projects[idx].opsiE,
            jawabsimpan: this.state.answer[idx],
          });  
          return(
              <div>
                <Modal 
                    title={this.state.modalTitle}
                    onNext={this.handleNextProject}
                    onPrev={this.handlePrevProject}
                    index={this.state.activeProject+1}
                    opA={this.state.modalopA}
                    opB={this.state.modalopB}
                    opC={this.state.modalopC}
                    opD={this.state.modalopD}
                    opE={this.state.modalopE}
                    judul={UjianJudul[this.props.dataset-1]}
                    dataset={this.props.dataset-1}
                    numberOpen={this.handleNumber}
                    length={this.state.projects.length}
                    ragu={this.handleRagu}
                    selectedOption={this.state.handleSelected}
                    jawabsimpan={this.state.jawabsimpan}
                    />
              </div>
          )
      } else {
        return (
          <div>
            <Modal 
              title={this.state.modalTitle}
              onNext={this.handleNextProject}
              onPrev={this.handlePrevProject}
              index={this.state.activeProject+1}
              opA={this.state.modalopA}
              opB={this.state.modalopB}
              opC={this.state.modalopC}
              opD={this.state.modalopD}
              opE={this.state.modalopE}
              judul={UjianJudul[this.props.dataset-1]}
              dataset={this.props.dataset-1}
              numberOpen={this.handleNumber}
              length={this.state.projects.length}
              ragu={this.handleRagu}
              selectedOption={this.state.handleSelected}
              jawabsimpan={this.state.jawabsimpan}
            />
          </div>
        );
      }
    }
  }

  
  class Modal extends React.Component {

    state = {
        jawaban: JSON.parse(localStorage.getItem('jawabInfo')) || new Array(SOALDATA[this.props.dataset].length),
        jawabsimpan: this.props.jawabsimpan,
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        console.log(this.props.jawabsimpan, prevProps.jawabsimpan)
        if (this.props.jawabsimpan !== prevProps.jawabsimpan) {
            this.updateState();
        }else if((this.props.jawabsimpan === null) && (this.props.index !== prevProps.index)){
            this.updateState();
            return
        }
      }

    updateState(){
        // removed for brevity, doing some calculations here
        // based on some data that is stored in Redux and is 
        if(this.props.jawabsimpan === null && this.state.jawabsimpan !== ''){
            this.setState({
                jawabsimpan: '',            
            });
        }else{
            this.setState({
                jawabsimpan: this.props.jawabsimpan,            
            });
        }
        
        console.log(this.state.jawabsimpan)
        console.log(this.props.jawabsimpan)
    };

    upload = (e) => {
        var jawaban = JSON.parse(localStorage.getItem('jawabInfo')) || new Array(SOALDATA[this.props.dataset].length);
        var idx = this.props.index-1;  
        this.setState({
            jawabsimpan: e.target.value,
        });
        console.log(this.props.jawabsimpan)
        jawaban[idx] = e.target.value;         
        localStorage.setItem('jawabInfo', JSON.stringify(jawaban));
    }

    deleteanswer = (e) => {
        var jawaban = JSON.parse(localStorage.getItem('jawabInfo')) || new Array(SOALDATA[this.props.dataset].length);
        var idx = this.props.index-1;  
        this.setState({
            jawabsimpan: '',
        });
        console.log(this.props.jawabsimpan)
        jawaban[idx] = '';         
        localStorage.setItem('jawabInfo', JSON.stringify(jawaban));
    }


    render() {
        var show;
        if(this.props.index==this.props.length){
            var show = ""
        }else{
            var show = "d-none"
        }

      return (
          <div>
              <Desktop>
                <div className="row d-flex mx-0 justify-content-center" style={{marginTop: '100px'}}>
                    <div className="col-xl-7 col-lg-7 col-md-12 col-xs-12 h-100 mb-md-4 mb-xs-0 px-0 mr-xl-3">
                        <form className="title d-flex mb-4">
                            <span>{this.props.judul}</span>
                            <button type="button" id="mark" className="mark ml-auto" onClick={this.props.ragu}>RAGU-RAGU</button>
                        </form>                    
                        <div className="cardbody soal mb-4">
                            <h4>Soal No. {this.props.index}</h4>
                            <p>{this.props.title}</p>
                            <div className="radio">
                                <div className="mt-2">
                                    <label for="a">
                                        <input type="radio" name="opt" id="a" value="a" checked={this.state.jawabsimpan === "a"} onChange={this.upload}/>
                                        <span  onClick="numberfill()" className="btn">A</span>
                                    </label>
                                    <span className="ml-2">{this.props.opA}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="b">
                                        <input type="radio" name="opt" id="b" value="b" checked={this.state.jawabsimpan === "b"} onChange={this.upload}/>
                                        <span onClick="numberfill()" className="btn">B</span>
                                    </label>
                                    <span class="ml-2">{this.props.opB}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="c">
                                        <input type="radio" name="opt" id="c" value="c" checked={this.state.jawabsimpan === "c"} onChange={this.upload}/>
                                        <span onClick="numberfill()" className="btn">C</span>
                                    </label>
                                    <span class="ml-2">{this.props.opC}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="d">
                                        <input type="radio" name="opt" id="d" value="d" checked={this.state.jawabsimpan === "d"} onChange={this.upload}/>
                                        <span onClick="numberfill()" className="btn">D</span>
                                    </label>
                                    <span class="ml-2">{this.props.opD}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="e">
                                        <input type="radio" name="opt" id="e" value="e" checked={this.jawabsimpan === "e"} onChange={this.upload}/>
                                        <span onClick="numberfill()" className="btn">E</span>
                                    </label>
                                    <span className="ml-2">{this.props.opE}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <div id="hapus" className="hapus-jawaban btn d-flex mr-2 mt-2 w-auto" onClick={this.deleteanswer}>HAPUS JAWABAN</div>
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
                                    {SOALDATA[this.props.dataset].map((soalData, i) => {
                                        var ragu = JSON.parse(localStorage.getItem('raguInfo'));
                                        if (ragu !== null && ragu[i] == true && i+1 == this.props.index){
                                            return (
                                                <div className="px-0">
                                                    <Number                                          
                                                        idx={i}                                           
                                                        numberOpen={this.props.numberOpen}
                                                        class='number focus flag'
                                                    />
                                                </div>
                                                )
                                        }
                                        else if (ragu !== null && ragu[i] == true && i+1 != this.props.index){
                                            return (
                                                <div className="px-0">
                                                    <Number                                          
                                                        idx={i}                                           
                                                        numberOpen={this.props.numberOpen}
                                                        class='number flag'
                                                    />
                                                </div>
                                                )
                                        }
                                        else if (i+1 == this.props.index){
                                            return (
                                            <div className="px-0">
                                                <Number                                          
                                                    idx={i}                                           
                                                    numberOpen={this.props.numberOpen}
                                                    class='number focus'
                                                />
                                            </div>
                                            )
                                        }else{
                                            return (
                                            <div className="px-0">
                                                <Number                                          
                                                    idx={i}                                           
                                                    numberOpen={this.props.numberOpen}
                                                    class='number'
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
                        <a className={show} href="#selesai">
                            <button type="button" className="save text-center" formAction="#selesai">
                                SELESAI
                            </button>
                        </a>
                        </form>
                        <div className="form-popup" id="selesai">
                        <form action="/action_page.php" className="form-container">
                            <h3 className="mb-4">Selesai mengerjakan sesi ini?</h3>
                            <h5>Anda tidak dapat mengubah jawaban lagi setelah  menyelesaikan sesi ini. Centang kolom di bawah untuk menyelesaikan.</h5>
                            <div className="row mt-4">
                                <label className="container-checkbox ml-2 mr-2" onclick="cek()">
                                <input type="checkbox" id="check"/>
                                <span className="btn checkmark"></span>
                                </label>
                                <h4 className="ml-2 mt-1">Saya sudah selesai mengerjakan soal</h4>
                            </div>
                            <div className="d-flex flex-row-reverse mt-4">
                                <a className="btn cancel" href="#">Batal</a>
                                <a id="sel" className="btn unfinish mr-4" href="#selesai">Selesai</a>
                            </div>
                        </form> 
                        </div>
                        <div id="cover">
                        </div>
                        <div className="form-popup2" id="feedback">
                        <form action="/action_page.php" className="form-container2">
                            <h4 className="mb-4 text-center">Kamu mau kasi bintang berapa <br/> untuk to kali ini?</h4>
                            <div className="star row d-flex justify-content-center">
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-1" value="1"></i>
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-2" value="2"></i>
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-3" value="3"></i>
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-4" value="4"></i>
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-5" value="5"></i>
                            </div>
                            <div className="row d-flex justify-content-center mt-4">
                                <textarea></textarea>
                                <span></span>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <Link to="/home"><button type="submit" className="btn kritik" formAction="" onClick={clearTime}>
                                    Simpan dan Selesai
                                </button></Link>
                            </div>
                        </form>
                        </div>
                        <div id="cover2"></div>
                    </div>            
                </div>
              </Desktop>

              <Mobile>
                <div className="row d-flex mx-0 justify-content-center" style={{marginTop: '100px'}}>
                    <div className="col-xl-7 col-lg-12 col-md-12 col-xs-12 h-100 mb-md-4 mb-xs-0 px-0 mr-xl-3">
                        <div className="title">
                            <span>{this.props.judul}</span>
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
                                            {SOALDATA[this.props.dataset].map((soalData, i) => {
                                                var ragu = JSON.parse(localStorage.getItem('raguInfo'));
                                                if (ragu !== null && ragu[i] == true && i+1 == this.props.index){
                                                    return (
                                                        <div className="px-0">
                                                            <Number                                          
                                                                idx={i}                                           
                                                                numberOpen={this.props.numberOpen}
                                                                class='number focus flag'
                                                            />
                                                        </div>
                                                        )
                                                }
                                                else if (ragu !== null && ragu[i] == true && i+1 != this.props.index){
                                                    return (
                                                        <div className="px-0">
                                                            <Number                                          
                                                                idx={i}                                           
                                                                numberOpen={this.props.numberOpen}
                                                                class='number flag'
                                                            />
                                                        </div>
                                                        )
                                                }
                                                else if (i+1 == this.props.index){
                                                    return (
                                                    <div className="px-0">
                                                        <Number                                          
                                                            idx={i}                                           
                                                            numberOpen={this.props.numberOpen}
                                                            class='number focus'
                                                        />
                                                    </div>
                                                    )
                                                }else{
                                                    return (
                                                    <div className="px-0">
                                                        <Number                                          
                                                            idx={i}                                           
                                                            numberOpen={this.props.numberOpen}
                                                            class='number'
                                                        />
                                                    </div>
                                                    )
                                                };
                                            })}
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <button id="mark" className="mark ml-auto" onClick={this.props.ragu}>RAGU-RAGU</button>
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
                                        <input type="radio" name="opt" id="a" value="a" checked={this.state.jawabsimpan === "a"} onChange={this.upload}/>
                                        <span  onClick="numberfill()" className="btn">A</span>
                                    </label>
                                    <span className="ml-2">{this.props.opA}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="b">
                                        <input type="radio" name="opt" id="b" value="b" checked={this.state.jawabsimpan === "b"} onChange={this.upload}/>
                                        <span onclick="numberfill()" className="btn">B</span>
                                    </label>
                                    <span class="ml-2">{this.props.opB}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="c">
                                        <input type="radio" name="opt" id="c" value="c" checked={this.state.jawabsimpan === "c"} onChange={this.upload}/>
                                        <span onclick="numberfill()" className="btn">C</span>
                                    </label>
                                    <span class="ml-2">{this.props.opC}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="d">
                                        <input type="radio" name="opt" id="d" value="d" checked={this.state.jawabsimpan === "d"} onChange={this.upload}/>
                                        <span onclick="numberfill()" className="btn">D</span>
                                    </label>
                                    <span class="ml-2">{this.props.opD}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="e">
                                        <input type="radio" name="opt" id="e" value="e" checked={this.state.jawabsimpan === "e"} onChange={this.upload}/>
                                        <span onclick="numberfill()" className="btn">E</span>
                                    </label>
                                    <span className="ml-2">{this.props.opE}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <div id="hapus" className="hapus-jawaban btn d-flex mr-2 mt-2 w-auto" onClick={this.deleteanswer}>HAPUS JAWABAN</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-xs-12 right-content mb-4">
                        <form className="col-12 px-0">
                        <a href="#selesai">
                            <button type="button" className={show +" save text-center"} formAction="#selesai">
                                SELESAI
                            </button>
                        </a>
                        </form>
                        <div className="form-popup" id="selesai">
                        <form action="/action_page.php" className="form-container">
                            <h3 className="mb-4">Selesai mengerjakan sesi ini?</h3>
                            <h5>Anda tidak dapat mengubah jawaban lagi setelah  menyelesaikan sesi ini. Centang kolom di bawah untuk menyelesaikan.</h5>
                            <div class="row mt-4">
                                <label className="container-checkbox ml-2 mr-2" onclick="cek()">
                                <input type="checkbox" id="check"/>
                                <span className="btn checkmark"></span>
                                </label>
                                <h4 className="ml-2 mt-1">Saya sudah selesai mengerjakan soal</h4>
                            </div>
                            <div className="d-flex flex-row-reverse mt-4">
                                <a className="btn cancel" href="#">Batal</a>
                                <a id="sel" className="btn unfinish mr-4" href="#selesai">Selesai</a>
                            </div>
                        </form>
                        </div>
                        <div id="cover">
                        </div>
                        <div className="form-popup2" id="feedback">
                        <form action="/action_page.php" class="form-container2">
                            <h4 className="mb-4 text-center">Kamu mau kasi bintang berapa <br/> untuk to kali ini?</h4>
                            <div className="star row d-flex justify-content-center">
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-1" value="1"></i>
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-2" value="2"></i>
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-3" value="3"></i>
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-4" value="4"></i>
                                <i className="star-blank fa fa-star" aria-hidden="true" id="star-5" value="5"></i>
                            </div>
                            <div className="row d-flex justify-content-center mt-4">
                                <textarea></textarea>
                                <span></span>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button type="submit" className="btn kritik" formAction="/home">
                                    Simpan dan Selesai
                                </button>
                            </div>
                        </form>
                        </div>
                        <div id="cover2"></div>
                    </div>
                </div>
              </Mobile>
          </div>
      );
    }
  }
  
  class Number extends React.Component {
      
    render() {
      return (
        <div>
            <button type="button" onClick={() => {this.props.numberOpen(this.props.idx)}} class={this.props.class}>
                {this.props.idx+1}
            </button>
        </div>
      );
    }
  }

export const Test = (test) => {
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
                    SOALDATA[test-1].map((soal, i) => {
                        var thisnumber = 0;
                        if(thisnumber === i){
                        return(
                            <div>                                                 
                                    <SoalTemplate dataset={test}/>                                    
                            </div>                        
                    );
                }
                    })
                }
            </div>
            {useScript("/js/testGL.js")}
        </div>
    );
}

