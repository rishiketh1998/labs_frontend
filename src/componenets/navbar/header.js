import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";

export const Header = () => {
    return (
        <>
            <Navbar expand="lg" fixed="top" className='align-content-center position-relative'
                    style={{height: "150px", backgroundColor:"white"}}>
                <Container>
                    <Navbar.Brand  className='mr-5' style={{fontSize: 'x-large', fontFamily: "cursive", color: "#FF4343"}}>
                        Tasty Treats
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto mr-2 ml-xl-5 pl-xl-5">
                            <Nav.Link as={NavLink} to='/inquiryForm' className='ml-4 text-secondary' style={{fontSize:'initial', fontFamily: "cursive"}}>
                                <i className="fas fa-building mr-2"/>
                                Inquiry Form
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/inquiries' className='ml-4 text-secondary' style={{fontSize:'initial', fontFamily: "cursive"}}>
                                <i className="fas fa-address-book mr-2"/>
                                Inquiries
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
