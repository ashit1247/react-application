import React from 'react'
import line1 from '../assets/line1.png'

function Page3() {
    return (
        <div className="container">
            <div className="row text-center">
                <h3>Workflow</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the</p>
                <p>congue euisque blandit dui Pelle ntesque habitant.</p>
            </div>

            <div className="row my-3">
                <div class="col-12 col-sm-4 col-md-4">
                    <div class="card" style={{ padding: '20px', borderColor: 'transparent' }}>
                        <div class="card-body">
                            <button className="btn" style={{ borderRadius: '20px 20px 20px 20px', marginTop: '40px', backgroundColor: '#16B2FF17', color: '#0E77FF' }}>STEP 1</button>
                            <h4 class="card-title">Send your brief</h4>
                            <img alt="img file" src={line1} />
                            <p class="card-text">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                            <p class="card-text"> Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4 col-md-4">
                    <div class="card" style={{ boxShadow: '0px 30px 60px #0E77FF26', padding: '20px', borderColor: 'transparent' }}>
                        <div class="card-body">
                            <button className="btn btn-primary" style={{ borderRadius: '20px 20px 20px 20px', marginTop: '40px' }}>STEP 2</button>
                            <h4 class="card-title">Wait for delivery</h4>
                            <img alt="img file" src={line1} />
                            <p class="card-text">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                            <p class="card-text"> Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4 col-md-4">
                    <div class="card" style={{ padding: '20px', borderColor: 'transparent' }}>
                        <div class="card-body">
                            <button className="btn" style={{ borderRadius: '20px 20px 20px 20px', marginTop: '40px', backgroundColor: '#16B2FF17', color: '#0E77FF' }}>STEP 3</button>
                            <h4 class="card-title">Get your files!</h4>
                            <img alt="img file" src={line1} />
                            <p class="card-text">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                            <p class="card-text"> Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Page3
