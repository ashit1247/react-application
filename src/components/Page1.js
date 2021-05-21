import React from 'react'
import Image1 from '../assets/Group 35699.png'
import about from '../assets/about.png'
import Image2 from '../assets/Group 35650.png'


function Page1() {
    return (
        <div className="container-fluid">
            <div className="row" style={{ overflow: 'hidden' }}>
                <div className="col-12 col-sm-6 col-md-6">
                    <img alt="img file" src={Image1} style={{ height: '600px', width: '100%', marginTop: '50px' }} />
                </div>
                <div className="col-12 col-sm-5 col-md-5 offset-1">
                    <h4 style={{ marginTop: '100px', color: '#0E77FF' }}>
                        <img alt="img file" src={about} style={{ width: '41px', height: '38px' }} />
                        <span>ABOUT US</span>
                    </h4>

                    <h4>Great Digital Agency</h4>
                    <p style={{ marginTop: '42px', color: '#000000' }}>Our product are fully custom-mode, built <br />with the latest technologies and cloud-architectures</p>
                    <p style={{ marginTop: '28px', color: '#000000' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi <br />tristique senectus et netus et malesuada <br />fames ac turpis egestas. In convallis porta mauris non aliquam.</p>

                    <div className="row" style={{ overflow: 'hidden' }}>
                        <div className="col-12 col-sm-6 col-md-6">
                            <button className="btn btn-light" style={{ borderRadius: '20px 20px 20px 20px', borderColor: '#0E77FF', color: '#0E77FF', marginTop: '41px', width: '130px' }}>Get Started</button>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <img alt="img file" src={Image2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page1
