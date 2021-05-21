import React from 'react'
import four from '../assets/four.png'


function Page4() {
    return (
        <div className="container-fluid" style={{ overflow: 'hidden' }}>
            <div className="row">
                <div className="col-3 col-sm-3 col-md-3">
                    <img alt="img file" className="responsive-image" src={four} style={{ height: '350px', marginLeft: '-80px' }} />
                </div>
            </div>
        </div>
    )
}

export default Page4
