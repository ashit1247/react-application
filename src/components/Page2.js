import React from 'react'
import about from '../assets/about.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'

function Page2() {
    return (
        <div className="container-fluid" style={{ marginTop: '70px', marginBottom: '120px' }}>
            <div className="row">
                <div className="col-12 col-sm-5 col-md-5 offset-1">
                    <h4 style={{ marginTop: '140px', color: '#0E77FF' }}>
                        <img alt="img file" src={about} style={{ width: '41px', height: '38px' }} />
                        <span>OUR SERVICES</span>
                    </h4>
                    <h3>Transforming your ideas <br />into Reality</h3>
                    <div style={{ marginBottom: '15px', marginTop: '30px' }}><span className="btn btn-sm" style={{ marginRight: '20px', color: '#0E77FF', backgroundColor: '#16B2FF17', borderColor: 'transparent' }}>Web Development</span><span className="btn btn-sm" style={{ color: '#0E77FF', backgroundColor: '#16B2FF17', borderColor: 'transparent' }}>Mob Development</span></div>
                    <div style={{ marginBottom: '15px' }}><span className="btn btn-primary btn-sm" style={{ marginRight: '20px' }}>UI/UX Designing</span><span className="btn btn-sm" style={{ color: '#0E77FF', backgroundColor: '#16B2FF17', borderColor: 'transparent' }}>Branding</span></div>
                    <div><span className="btn btn-sm" style={{ color: '#0E77FF', backgroundColor: '#16B2FF17', borderColor: 'transparent' }}>Cloud Technology</span></div>
                </div>

                <div className="col-12 col-sm-6 col-md-6">
                    <div style={{ height: '70px', width: '25%', backgroundColor: '#0E77FF', position: 'absolute', right: '14px' }}></div><br />
                    <div style={{ marginTop: '47px', marginRight: '0', padding: '30px', boxShadow: '0px 30px 60px #0E77FF26' }}>
                        <img alt="img file" src={img1} style={{ height: '70px', width: '70px' }} />
                        <span style={{ font: 'Poppins', fontSize: '25px', marginLeft: '10px' }}>UI/UX Designing</span>
                        <p style={{ color: '#000000' }}>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                        <div style={{ marginBottom: '10px' }}>
                            <img alt="img file" src={img2} /><span>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</span>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <img alt="img file" src={img2} /><span>Lorem ipsum dolor sit amet,</span>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <img alt="img file" src={img2} /><span>conse ctetur adipi scing elit.</span>
                        </div>
                        <div>
                            <img alt="img file" src={img2} /><span>Lorem ipsum dolor sit amet, conse ctetur</span>
                        </div>
                    </div>
                    <div style={{ height: '70px', width: '25%', backgroundColor: '#0E77FF', position: 'absolute', right: '14px' }}></div><br />
                </div>
            </div>
        </div>
    )
}

export default Page2
