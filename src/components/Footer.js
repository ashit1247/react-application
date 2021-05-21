import React from 'react'
import lady from '../assets/lady.png'
import footer from '../assets/footer.png'
import img1 from '../assets/fb_icon.png'
import img2 from '../assets/twitter.png'
import img3 from '../assets/twitter-circular-button.png'
import img4 from '../assets/instagram.png'
import location from '../assets/location.png'
import call from '../assets/call.png'
import chat from '../assets/chat.png'

function Footer() {
    return (
        <div className="container-fluid" style={{ backgroundImage: `URL(${footer})`, backgroundSize: 'cover', overflow: 'hidden' }}>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                    <img src={lady} alt="lady" style={{ width: '100%' }} />
                    <div style={{ marginTop: '140px' }}></div>
                </div>
                <div className="col-12 col-sm-6 col-md-6" style={{ marginBottom: '700px' }}>
                    <div className="p-3" style={{ width: '75%', display: 'flex', flexDirection: 'column', boxShadow: '0px 40px 60px #0E77FF26', marginLeft: '40px', }}>
                        <h2>Send Us message</h2>
                        <form className="myForm">
                            <input type="email" placeholder="Your Email*" />
                            <input type="text" placeholder="Your Name*" />
                            <input type="number" placeholder="Phone Number*" />
                            <input type="text" placeholder="Subject" />
                            <input type="textarea" placeholder="Your message" />
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input style={{ width: '25px', height: '25px' }} type="checkbox" /><span>By sending this message, you confirm that you have read and agreed to our privacy-policy.</span>
                            </div>
                            <button className="btn btn-primary" style={{ borderRadius: '20px 20px 20px 20px', marginTop: '40px', width: '120px' }}>Get Started</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row text-white" style={{ marginTop: '-260px' }}>
                <div className="col-12 col-sm-2 col-md-2 offset-1">
                    <p>Lorem Finaldream rure dolor in <br />reprehenderit in voluptate velit esse <br />cillum dolore e uis nostrud exercitation <br />isi ut aliquip ex ea commodo consequat.</p>
                    <img alt="fb_icon" src={img1} />
                    <img alt="twitter_icon" src={img2} />
                    <img alt="alternate" src={img3} />
                    <img alt="combined" src={img4} style={{ marginLeft: '-28px' }} />
                </div>
                <div className="col-12 col-sm-2 col-md-2 offset-1">
                    <h3>Our Services</h3>
                    <hr style={{ width: '150px' }} />
                    <p>Web Development</p>
                    <p>Mobile Development</p>
                    <p>Cloud technologies</p>
                    <p>UI/UX design</p>
                </div>
                <div className="col-12 col-sm-2 col-md-2 offset-1">
                    <h3>Our Links</h3>
                    <hr style={{ width: '150px' }} />
                    <p>Terms & Condition</p>
                    <p>privacy Policy</p>
                    <p>Imprint</p>
                    <p>Legal</p>
                </div>
                <div className="col-12 col-sm-2 col-md-2 offset-1">
                    <h3>Contact Us</h3>
                    <hr style={{ width: '150px' }} />
                    <img alt="location" src={location} /><span>Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.</span><br />
                    <img alt="call" src={call} /><span>00 1800 245 453</span><br />
                    <img alt="chat" src={chat} /><span>hello@inkyy.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
