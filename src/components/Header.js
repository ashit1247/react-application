import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Union from '../assets/Union 1.png'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="slide1">
            <div className="container">
                <Navbar className="navbar" color="transparent" light expand="md" style={{ paddingTop: '30px' }}>
                    <NavbarBrand style={{ color: 'white', marginLeft: '30px' }} href="/">Logo</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className="justify-content-end offset-1">
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink style={{ color: 'white', marginRight: '25px' }} href="/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: 'white', marginRight: '25px' }} href="/">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: 'white', marginRight: '25px' }} href="/">Case Studies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: 'white', marginRight: '25px' }} href="/">Testimonials</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: 'white', marginRight: '25px' }} href="/">Contact</NavLink>
                            </NavItem>
                            <button type="button" class="btn btn-light" style={{ width: '130px', marginRight: '30px' }}>Login</button>
                        </Nav>
                    </Collapse>
                </Navbar>

                <div className="container row" style={{ marginTop: '100px' }}>
                    <div className="col-12 col-sm-6 col-md-6">
                        <h2>Web Design</h2>
                        <h2>Web Development</h2>
                        <h2>by SB</h2>
                        <p style={{ marginTop: '40px' }}>Our product are fully custom-mode, built with the latest technologies and cloud-architectures</p>

                        <button className="btn btn-light" style={{ borderRadius: '20px 20px 20px 20px', marginTop: '40px' }}>Get Started</button>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-12 col-sm-12">
                <img alt="img file" src={Union} style={{ width: '100%' }} className="mx-auto d-block" />
            </div>
        </div>
    )
}

export default Header
