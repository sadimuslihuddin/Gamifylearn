import { getByTestId, render } from '@testing-library/react';
import React, { useState, useEffect} from 'react';
import {Helmet, ReactHelmet} from 'react-helmet';
import { BrowserRouter, Link, Router, Route, Redirect, Switch, useHistory, useParams } from "react-router-dom";
import {Navbarh, Sidebar, Footerbar, Navbarprem} from './navbar';
import useScript from './Hook/useScript';
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


export const MateriData = [
    {
        judulMateri: "Matematika Dasar IA",
        progress: "11%",
        lastProgress: "Pembuktian Limit",
        cheatsheet: [
            {
                id: 1, 
                judul: "Cheatsheet UTS Matemarika Dasar IA"
            }, 
            {
                id: 2,
                judul: "Cheatsheet UAS Matemarika Dasar IIA"
            }
        ],
        id: 1,
        kurikulum:[{
            subjudul: "1. Bilangan Real dan Nilai Mutlak",
            jenis: "materi"
            },
            {
            subjudul: "Latihan Soal Bilangan Real dan Nilai Mutlak",
            jenis: "soal",
            soal: [
                {
                    isi: "satu",
                    opsiA: "A",
                    opsiB: "B",
                    opsiC: "C",
                    opsiD: "D",
                    opsiE: "E",
                },{
                    isi: "dua",
                    opsiA: "A",
                    opsiB: "B",
                    opsiC: "C",
                    opsiD: "D",
                    opsiE: "E",
                }
            ]
            },
            {
            subjudul: "2. Sistem Koordinat Grafik Persamaan Fungsi Trigonometri",
            jenis: "materi"
            }
        ]
    },

    {
        judulMateri: "Fisika Dasar IA",
        progress: "23%",
        lastProgress: "Momen Inersia",
        cheatsheet: [
            {
                id: 1, 
                judul: "Cheatsheet UTS Fisika Dasar IA"
            }, 
            {
                id: 2,
                judul: "Cheatsheet UAS Fisika Dasar IIA"
            }
        ],
        link: "/Listmateri/2",
        id: 2,
        kurikulum: [{
            subjudul: "Momen Inersia",
            jenis: "materi"
            },
            {
            subjudul: "Latihan Momen Inersia",
            jenis: "soal",
            soal: [
                {
                    isi: "satu",
                    opsiA: "A",
                    opsiB: "B",
                    opsiC: "C",
                    opsiD: "D",
                    opsiE: "E",
                },{
                    isi: "dua",
                    opsiA: "A",
                    opsiB: "B",
                    opsiC: "C",
                    opsiD: "D",
                    opsiE: "E",
                },{
                    isi: "tiga",
                    opsiA: "A",
                    opsiB: "B",
                    opsiC: "C",
                    opsiD: "D",
                    opsiE: "E",
                }
            ]
            }
        ]
    },

    {
        judulMateri: "Kimia Dasar IA",
        progress: "43%",
        lastProgress: "Stoikiometri",
        cheatsheet: [
            {
                id: 1, 
                judul: "Cheatsheet UTS Kimia Dasar IA"
            }, 
            {
                id: 2,
                judul: "Cheatsheet UAS Kimia Dasar IIA"
            }
        ],
        link: "/Listmateri/3",
        id: 3,
        kurikulum: [{
            subjudul: "Stoikiometri",
            jenis: "materi",
            }
        ]
    },
]

export const KurData = MateriData.map((materi) => {
    return materi.kurikulum
})

export const CheatData = MateriData.map((materi) => {
    return materi.cheatsheet
})

export const JudulMateri = MateriData.map((materi) => {
    return materi.judulMateri
})


const MateriTemplate = MateriData.map((materi, i) => {
    const Judulcheatsheet = CheatData[i].map((chs)=>{
        return chs.judul
    })
    return (
    <div className="item">
        <Link to={"/listmateri/"+(i+1)} className="listmateri btn">
            <div className="d-flex mb-1">
                <div className="judul">{materi.judulMateri}</div>
                <i className="fa fa-circle pt-3 mx-3" style={{color: 'white', fontSize: '8px'}}></i>
                <div className="judul">{materi.progress}</div>
            </div>
            <div className="d-flex">
                <p className="subjudul mr-2">Terakhir:</p>
                <p className="subjudul">{materi.lastProgress}</p>
            </div>
        </Link>
        <div className="cheatsheet">
            <div id="chs" className="chs btn"><img src="assets/Paper.svg"/></div>
            <p className="teks col px-0 mt-1" style={{marginLeft: '-12px'}}>Cheatsheet</p>
        </div>
        <div id="cheatbar" className="disappear">
            <div>
                <div className="ch d-flex mt-4">
                    <p className="teks">{Judulcheatsheet[0]}</p>
                    <div className="ml-auto d-flex">
                        <div>
                            <Link className="read-online btn mr-2" to={"/cheatsheet/"+ (i+1) + "/1"}>Baca Online</Link>
                        </div>
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
                <div className="line mt-3"></div>
            </div>
            <div>
                <div className="ch d-flex mt-3">
                    <p className="teks">{Judulcheatsheet[1]}</p>
                    <div className="ml-auto d-flex">
                        <div>
                            <Link className="read-online btn mr-2" to={"/cheatsheet/"+ (i+1) + "/2"}>Baca Online</Link>
                        </div>
                        <div className="dropdown">
                            <a className="download btn" id="download" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Download<i class="fa fa-chevron-down ml-2"></i></a>
                            <div className="dropdown-menu mt-1" aria-labelledby="download">
                              <div className="download-content">
                                <a className="dropdown-item" href="profilGL.html">
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
                <div className="line mt-3"></div>
            </div>
        </div>
    </div>
    );
});



export const Materi = props => {
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
                href="/css/materiGL.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>

            <Navbarh />
            <div className="content d-flex" style={{marginTop:'80px'}}>
                <Sidebar/>
                <div className="main-content" style={{marginTop: '28px'}}>
                    <div>
                        <h4 style={{letterSpacing: '0.3px', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '33px', lineHeight: '31px', color: 'white', marginBottom: '28px'}}>Pilihan Mata Kuliah</h4>
                        <div className="container">
                            {MateriTemplate}
                        </div>
                    </div>
                </div>
            </div>
            <Footerbar/>
        </div>
    );
}

export const Listmateri = (test) => {
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
                <div className="main-content" style={{marginTop: '28px'}}>
                    <div>
                        <div className="d-flex">
                            <Link to="/materi" style={{color: 'white', fontSize: '16px'}}>Mata Kuliah</Link>
                            <p><i className="fa fa-chevron-right mx-2 mx-md-3" style={{color: 'white'}}></i></p>
                            <a href="#" style={{color: '#6FCF97', fontSize: '16px'}}>{JudulMateri[test-1]}</a>
                        </div>
                        <div className="d-flex mt-4">
                            <div className="bullet-title mr-3"></div>
                            <h1 className="b-title">{JudulMateri[test-1]}</h1>
                        </div>
                        <div className="mt-4">
                            {
                                KurData[test-1].map((kur, i) => {
                                    var KurDataL = KurData[test];
                                    return (
                                        <div>   
                                            <div className="my-3">
                                                <Link className="subbab btn d-flex align-items-center px-4" to={"/bab/"+test+"/"+(i+1)}>
                                                    <div className="subbab-capt"> {kur.subjudul} </div>
                                                    <img className="ml-auto" src="/assets/checklist.svg"/>
                                                </Link>
                                            </div>                        
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footerbar/>
        </div>
    );
}

class Kontensoal extends React.Component {

    state = {
      projects: this.props.dataset1[this.props.dataset2-1],
      activeProject: '',
      modalTitle: '',
      modalopA: '',
      modalopB: '',
      modalopC: '',
      modalopD: '',
      modalopE: '',
      dataset: this.props.dataset2,
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
      console.log(idx, arr)
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
      }); 
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
      
      this.setState({
        activeProject: idx,
        modalTitle: this.state.projects[idx].isi,
        modalopA: this.state.projects[idx].opsiA,
        modalopB: this.state.projects[idx].opsiB,
        modalopC: this.state.projects[idx].opsiC,
        modalopD: this.state.projects[idx].opsiD,
        modalopE: this.state.projects[idx].opsiE,
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
          });
    }
  
    render() {
      
      console.log(this.state)
        
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
          });  
          return(
              <div>
                <ModalKontensoal 
                    title={this.state.modalTitle}
                    onNext={this.handleNextProject}
                    onPrev={this.handlePrevProject}
                    index={this.state.activeProject+1}
                    opA={this.state.modalopA}
                    opB={this.state.modalopB}
                    opC={this.state.modalopC}
                    opD={this.state.modalopD}
                    opE={this.state.modalopE}
                    dataset={this.props.dataset2-1}
                    numberOpen={this.handleNumber}
                    length={this.state.projects.length}
                    />
              </div>
          )
      } else {
        console.log(this.state)
        return (
          <div>
            <ModalKontensoal 
              title={this.state.modalTitle}
              onNext={this.handleNextProject}
              onPrev={this.handlePrevProject}
              index={this.state.activeProject+1}
              opA={this.state.modalopA}
              opB={this.state.modalopB}
              opC={this.state.modalopC}
              opD={this.state.modalopD}
              opE={this.state.modalopE}
              dataset={this.props.dataset2-1}
              numberOpen={this.handleNumber}
              length={this.state.projects.length}
            />
          </div>
        );
      }
    }
  }
  
class ModalKontensoal extends React.Component {
    
    render() {
        console.log(this.props.title)
        var show;
        if(this.props.index==this.props.length){
            var show = "d-flex"
        }else{
            var show = "d-none"
        }
        return (
            <div>
                <Desktop>
                <div className="d-flex mt-3">
                    <div className="panel">
                        <div className="cardbody soal mb-4">
                            <h4>Soal No. {this.props.index}</h4>
                            <p>{this.props.title}</p>
                            <div className="radio">
                                <div className="mt-2">
                                    <label for="a">
                                        <input type="radio" name="opt" id="a" value="a"/>
                                        <span  onClick="numberfill()" className="btn">A</span>
                                    </label>
                                    <span className="ml-2">{this.props.opA}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="b">
                                        <input type="radio" name="opt" id="b" value="b"/>
                                        <span onclick="numberfill()" className="btn">B</span>
                                    </label>
                                    <span className="ml-2">{this.props.opB}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="c">
                                        <input type="radio" name="opt" id="c" value="c"/>
                                        <span onclick="numberfill()" className="btn">C</span>
                                    </label>
                                    <span className="ml-2">{this.props.opC}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="d">
                                        <input type="radio" name="opt" id="d" value="d"/>
                                        <span onclick="numberfill()" className="btn">D</span>
                                    </label>
                                    <span className="ml-2">{this.props.opD}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="e">
                                        <input type="radio" name="opt" id="e" value="e"/>
                                        <span onclick="numberfill()" className="btn">E</span>
                                    </label>
                                    <span className="ml-2">{this.props.opE}</span>
                                </div>
                            </div>
                            <form className={ show+" justify-content-end mt-3"}>
                                <Link to="/materi"><button className="submit" type="">SUBMIT</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
                <form className="d-flex justify-content-center mt-3">
                    <div className="pager d-flex justify-content-between">
                        <button type="button" onClick={this.props.onPrev} className="prev">
                            <i className="fa fa-chevron-left"></i>
                        </button>
                        <div className="d-flex">
                            <div className="thispage">{this.props.index}</div>
                            <div className="slash mx-1">/</div>
                            <div className="total">{this.props.length}</div>
                        </div>
                        <button type="button" onClick={this.props.onNext} className="next">
                            <i className="fa fa-chevron-right"></i>
                        </button>
                    </div>
                </form>
                </Desktop>

                <Mobile>
                <div className="mt-3">
                    <form className="d-flex justify-content-center mt-3">
                        <div className="pager d-flex justify-content-between">
                            <button type="button" onClick={this.props.onPrev} className="prev">
                                <i className="fa fa-chevron-left"></i>
                            </button>
                            <div className="d-flex">
                                <div className="thispage">{this.props.index}</div>
                                <div className="slash mx-1">/</div>
                                <div className="total">{this.props.length}</div>
                            </div>
                            <button type="button" onClick={this.props.onNext} className="next">
                                <i className="fa fa-chevron-right"></i>
                            </button>
                        </div>
                    </form>
                    <div className="panel mt-3">
                        <div className="cardbody soal mb-4">
                            <h4>Soal no. {this.props.index}</h4>
                            <p>{this.props.title}</p>
                            <div className="radio">
                                <div className="mt-2">
                                    <label for="a">
                                        <input type="radio" name="opt" id="a" value="a"/>
                                        <span  onclick="numberfill()" className="btn">A</span>
                                    </label>
                                    <span class="ml-2">{this.props.opA}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="b">
                                        <input type="radio" name="opt" id="b" value="b"/>
                                        <span onclick="numberfill()" className="btn">B</span>
                                    </label>
                                    <span class="ml-2">{this.props.opB}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="c">
                                        <input type="radio" name="opt" id="c" value="c"/>
                                        <span onclick="numberfill()" className="btn">C</span>
                                    </label>
                                    <span className="ml-2">{this.props.opC}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="d">
                                        <input type="radio" name="opt" id="d" value="d"/>
                                        <span onclick="numberfill()" className="btn">D</span>
                                    </label>
                                    <span className="ml-2">{this.props.opD}</span>
                                </div>
                                <div className="mt-2">
                                    <label for="e">
                                        <input type="radio" name="opt" id="e" value="e"/>
                                        <span onclick="numberfill()" className="btn">E</span>
                                    </label>
                                    <span className="ml-2">{this.props.opE}</span>
                                </div>
                            </div>
                            <form className={show+" justify-content-end mt-3"}>
                                <button className="submit" type="submit">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
                </Mobile>
            </div>
        )
    }
}

const KontenTemplate = (test1, test2) => {
    const jenis = KurData[test1-1].map((materi, i)=>{
        return materi.jenis     
    })
    console.log(jenis)

    var tipe = ''
    for(let i=0; i<jenis.length; i++){        
        if(i == test2-1){       
            console.log(jenis[i])     
            var tipe = jenis[i]
        }
    }    

    const KontensoalData = KurData[test1-1].map((kur, i)=>{
        if(kur.jenis == "soal"){
            console.log(kur.soal)
            return kur.soal
        }
    })
    
    console.log(KurData[test1-1].length==test2)

    var addparam;
    if(test2==KurData[test1-1].length){        
        var addparam = test2
    }else{
        var addparam = test2-1+2
    }

    var minparam;
    if(test2==1){
        var minparam = test2
    }else{
        var minparam = test2-1
    }

    console.log(tipe === "materi")
    if(tipe === "materi"){
    return(
        <div>            
            <Navbarprem/>
            <Desktop>
            <div className="content d-flex" style={{marginTop:'80px'}}>
            <div id="sidebarkur" className="sidebar mt-3">
                <div className="px-3">
                    <Link className="back" to={"/listmateri/"+(test1)}><i className="fa fa-chevron-left mx-3"></i>Kembali</Link>
                    <div className="d-flex mt-4">
                        <div className="bullet-title mr-3"></div>
                        <h1 className="b-title">{JudulMateri[test1-1]}</h1>
                    </div>
                    <div className="mt-4">
                        {KurData[test1-1].map((materi, i) => {
                            if (i == test2-1){
                                return (
                                    <div className="now my-3">
                                        <Link className="subbab btn d-flex align-items-center px-4" to={"/bab/"+test1+"/"+(i+1)}>
                                            <div className="subbab-capt mr-3">{materi.subjudul}</div>
                                            <img className="ml-auto" src="/assets/materi.svg"/>
                                        </Link>
                                    </div>
                                    )
                            } else {
                                return (
                                    <div class="my-3">
                                        <Link className="subbab btn d-flex align-items-center px-4" to={"/bab/"+test1+"/"+(i+1)}>
                                            <div className="subbab-capt mr-3">{materi.subjudul}</div>
                                            <img className="ml-auto" src="/assets/checklist.svg"/>
                                        </Link>
                                    </div>
                                    );
                                }
                            }
                        )}
                    </div>
                </div>                
            </div>
            <div className="main-content" style={{marginTop: '28px'}}>
                <div id="title-k" className="title">
                    {KurData[test1-1].map((materi, i)=>{
                        const kur = materi.subjudul
                        console.log(kur)
                        if(i == test2-1){
                            return kur
                        }
                    })}
                </div>
                <div id="kontenMateri">
                    <div className="d-flex mt-3">
                        <div id="panel" className="panel">
                            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTrYOAdl0Ae9fp5fdwD_2Ae3dzLY942gXz1EAIr2NElTCiWvDhhnScj4hs1RFlSP3xOGLqjVJmlT-ql/embed?start=false&loop=false" frameborder="0" width="102%" height="102%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            <button id="resize" className="btn resize">
                                <img src="/assets/resize.svg" alt=""/>
                            </button>
                        </div>
                        <div className="slide-grup ml-3">
                            <div className="slide-content">
                                <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                <div className="slide"><img className="slide-img" src="" alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="pager d-flex justify-content-between">
                            <button type="submit" className="prev">
                                <i className="fa fa-chevron-left"></i>
                            </button>
                            <div className="d-flex">
                                <div className="thispage">1</div>
                                <div className="slash mx-1">/</div>
                                <div className="total">15</div>
                            </div>
                            <button type="submit" className="next">
                                <i className="fa fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </Desktop>

            <Mobile>
            <div className="content d-flex" style={{marginTop:'80px'}}>
                <div class="main-content" style={{marginTop: '28px'}}>
                    <div id="pagerkur">
                        <Link className="back" to={"/listmateri/"+(test1)}><i className="fa fa-chevron-left mx-3"></i>Kembali</Link>
                        <form className="pager d-flex justify-content-center px-0 mr-2" style={{marginTop: '20px', marginBottom: '30px'}}>
                            <Link to={"/bab/"+test1+"/"+minparam}><button type="button" className="prev mr-2">
                                <i className="bi bi-chevron-left"></i>
                            </button></Link>
                            <div className="dropkur dropdown">
                                <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-chevron-down mr-2"></i>
                                    {KurData[test1-1].map((materi, i)=>{
                                        const kur = materi.subjudul
                                        console.log(kur)
                                        if(i == test2-1){
                                            return kur
                                        }
                                    })}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {KurData[test1-1].map((materi, i) => {
                                    if (i == test2-1){
                                        return (
                                            <div className="now">
                                                <Link className="subbab-capt" to={"/bab/"+test1+"/"+(i+1)}>
                                                    {materi.subjudul}                            
                                                </Link>
                                            </div>
                                            )
                                    } else {
                                        return (
                                            <div>
                                                <Link className="subbab-capt" to={"/bab/"+test1+"/"+(i+1)}>
                                                    {materi.subjudul}
                                                </Link>
                                            </div>
                                            );
                                        }
                                    }
                                )}
                                </div>
                            </div>
                            <Link to={"/bab/"+test1+"/"+addparam}><button type="button" className="next ml-2">
                                <i className="bi bi-chevron-right"></i>
                            </button></Link>
                        </form>
                    </div>
                    <div id="title-k" className="title"></div>
                    <div id="kontenMateri">
                        <div className="mt-3">
                            <div id="panel" className="panel">
                                <img className="panel-img" src="" alt=""/>
                                <button id="resize" className="btn resize">
                                    <img src="assets/resize.svg" alt=""/>
                                </button>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <div className="pager d-flex justify-content-between">
                                    <button type="submit" className="prev">
                                        <i className="fa fa-chevron-left"></i>
                                    </button>
                                    <div className="d-flex">
                                        <div className="thispage">1</div>
                                        <div className="slash mx-1">/</div>
                                        <div className="total">15</div>
                                    </div>
                                    <button type="submit" className="next">
                                        <i className="fa fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="slide-grup mt-3">
                                <div className="slide-content">
                                    <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                    <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                    <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                    <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                    <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                    <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                    <div className="slide"><img className="slide-img" src="" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Mobile>
        </div>
    );
    }else{
        return(
            <div>            
                <Navbarprem/>
                <Desktop>
                <div className="content d-flex" style={{marginTop:'80px'}}>
                <div id="sidebarkur" className="sidebar mt-3">
                    <div className="px-3">
                        <Link className="back" to={"/listmateri/"+(test1)}><i className="fa fa-chevron-left mx-3"></i>Kembali</Link>
                        <div className="d-flex mt-4">
                            <div className="bullet-title mr-3"></div>
                            <h1 className="b-title">{JudulMateri[test1-1]}</h1>
                        </div>
                        <div className="mt-4">
                            {KurData[test1-1].map((materi, i) => {
                                if (i == test2-1){
                                    return (
                                        <div className="now my-3">
                                            <Link className="subbab btn d-flex align-items-center px-4" to={"/bab/"+test1+"/"+(i+1)}>
                                                <div className="subbab-capt mr-3">{materi.subjudul}</div>
                                                <img className="ml-auto" src="/assets/materi.svg"/>
                                            </Link>
                                        </div>
                                        )
                                } else {
                                    return (
                                        <div class="my-3">
                                            <Link className="subbab btn d-flex align-items-center px-4" to={"/bab/"+test1+"/"+(i+1)}>
                                                <div className="subbab-capt mr-3">{materi.subjudul}</div>
                                                <img className="ml-auto" src="/assets/checklist.svg"/>
                                            </Link>
                                        </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </div>                
                </div>
                <div className="main-content" style={{marginTop: '28px'}}>
                    <div id="title-k" className="title">
                        {KurData[test1-1].map((materi, i)=>{
                            const kur = materi.subjudul
                            console.log(kur)
                            if(i == test2-1){
                                return kur
                            }
                        })}
                    </div>
                    <div id="kontenSoal">
                        <Kontensoal dataset2={test2} dataset1={KontensoalData}/>                        
                    </div>
                </div>
                </div>
                </Desktop>
    
                <Mobile>
                <div className="content d-flex" style={{marginTop:'80px'}}>
                    <div class="main-content" style={{marginTop: '28px'}}>
                        <div id="pagerkur">
                            <Link className="back" to={"/listmateri/"+(test1)}><i className="fa fa-chevron-left mx-3"></i>Kembali</Link>
                            <form className="pager d-flex justify-content-center px-0 mr-2" style={{marginTop: '20px', marginBottom: '30px'}}>
                                <Link to={"/bab/"+test1+"/"+minparam}><button type="button" className="prev mr-2">
                                    <i className="bi bi-chevron-left"></i>
                                </button></Link>
                                <div className="dropkur dropdown">
                                    <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="bi bi-chevron-down mr-2"></i>
                                        {KurData[test1-1].map((materi, i)=>{
                                            const kur = materi.subjudul
                                            console.log(kur)
                                            if(i == test2-1){
                                                return kur
                                            }
                                        })}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {KurData[test1-1].map((materi, i) => {
                                        if (i == test2-1){
                                            return (
                                                <div className="now">
                                                    <Link className="subbab-capt" to={"/bab/"+test1+"/"+(i+1)}>
                                                        {materi.subjudul}                            
                                                    </Link>
                                                </div>
                                                )
                                        } else {
                                            return (
                                                <div>
                                                    <Link className="subbab-capt" to={"/bab/"+test1+"/"+(i+1)}>
                                                        {materi.subjudul}
                                                    </Link>
                                                </div>
                                                );
                                            }
                                        }
                                    )}
                                    </div>
                                </div>
                                <Link to={"/bab/"+test1+"/"+addparam}><button type="button" className="next ml-2">
                                    <i className="bi bi-chevron-right"></i>
                                </button></Link>
                            </form>
                        </div>
                        <div id="title-k" className="title"></div>
                        <div id="kontenSoal">
                            <Kontensoal dataset2={test2} dataset1={KontensoalData}/> 
                        </div>
                    </div>
                </div>
                </Mobile>
            </div>
        );
    }
}

export const Konten = (test1, test2) => {
    return(
        <div>
            <Helmet>
                {useScript('/js/mainstyle.js')}
                {useScript('/js/resize.js')}
                <link
                    type="text/css"
                    rel="stylesheet"
                    href="/css/homeGL.css"/>
                <link
                    type="text/css"
                    rel="stylesheet"
                    href="/css/konten.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
            </Helmet>
            {KontenTemplate(test1,test2)}
        </div>
    );
}



