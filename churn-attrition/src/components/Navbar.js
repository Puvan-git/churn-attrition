import React from 'react';
import { Container, Nav, Navbar, Breadcrumb } from "react-bootstrap";
import home from '../assets/img/home.png';


export const NavBar = () => {
    return (
        <Navbar expand="lg" className='container-fluid'>
            <Container>
                <Navbar.Brand href="#home" className="logo">
                    <img src={home} alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-underline">
                    <Breadcrumb>
                        <Breadcrumb.Item active>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#analysis">Form</Breadcrumb.Item>
                    </Breadcrumb>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
