import React from 'react'
import girl_img from '../assets/Ellipse 216.png'
import about from '../assets/about.png'
import reactlogo from '../assets/React-icon.png'
import arrow from '../assets/arrow.png'

function Page6() {
    return (
        <div className="container-fluid" style={{ marginTop: '60px' }}>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 bg-primary" style={{ position: 'relative', padding: '60px' }}>
                    <div className="bg-light" style={{ borderRadius: '50%', padding: '35px' }}>
                        <img alt="img file" className="img-fluid" src={girl_img} />
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6" style={{ marginTop: '50px' }}>
                    <h4 style={{ marginTop: '100px', color: '#0E77FF' }}>
                        <img alt="img file" src={about} style={{ width: '41px', height: '38px' }} />
                        <span>SELECTED CUSTOMERS</span>
                    </h4>

                    <h4 style={{ marginTop: '18px' }}>Check what our client say about us</h4>
                    <p style={{ marginTop: '62px', color: '#000000' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.</p>
                    <img alt="img file" style={{ marginTop: '30px' }} src={reactlogo} /><br />
                    <img alt="img file" style={{ marginTop: '36px', marginBottom: '36px' }} src={arrow} />
                </div>
            </div>
        </div>
    )
}

export default Page6
