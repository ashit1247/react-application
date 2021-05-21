import React from 'react'
import bus from '../assets/bus.png'
import arrow from '../assets/arrow-down-sign-to-navigate.png'
import asdasd from '../assets/asdasd.png'
import image2 from '../assets/Layer 4dsasdas.png'
import triangle from '../assets/triangle.png'

function Page7() {
    return (
        <div className="container" style={{ marginTop: '40px' }}>
            <div className="row text-center">
                <h3>Workflow</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan</p>
                <p>congue euisque blandit dui Pelle ntesque habitant.</p>
            </div>

            <div className="row my-3">
                <div class="col-12 col-sm-4 col-md-4">
                    <div class="card" style={{ padding: '20px', borderColor: 'transparent' }}>
                        <img class="card-img-top" src={bus} alt="card_image" />
                        <div class="card-body">
                            <h4 class="card-title">Isomorphic Web App</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                            <p class="card-text"> Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu</p>
                            <img alt="arrow" src={arrow} /><img alt="arrow" src={arrow} /><span className="text-primary">Read More</span>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-md-4">
                    <div class="card" style={{ padding: '20px', borderColor: 'transparent', boxShadow: '0px 0px 40px #0E77FF26' }}>
                        <img class="card-img-top" src={asdasd} alt="card_image" />
                        <div class="card-body">
                            <h4 class="card-title">Isomorphic Web App</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                            <p class="card-text"> Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu</p>
                            <img alt="img_file" src={arrow} /><img alt="img_file" src={arrow} /><span className="text-primary">Read More</span>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-4 col-md-4">
                    <div class="card" style={{ padding: '20px', borderColor: 'transparent' }}>
                        <img class="card-img-top" src={image2} alt="card_image" />
                        <div class="card-body">
                            <h4 class="card-title">Isomorphic Web App</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                            <p class="card-text"> Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu</p>
                            <img alt="img_file" src={arrow} /><img alt="img_file" src={arrow} /><span className="text-primary">Read More</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row text-center">
                <span><button className="btn btn-light" style={{ borderRadius: '20px 20px 20px 20px', marginTop: '40px', borderColor: '#0E77FF', color: '#0E77FF' }}>Get Started</button>
                </span>
            </div>

            <span>
                <img alt="img_file" src={triangle} style={{ width: '100px', height: '100px', marginLeft: '60px', marginTop: '60px' }} />
            </span>
        </div>
    )
}

export default Page7
