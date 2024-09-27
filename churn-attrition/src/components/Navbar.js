import React from 'react';
import { Container, Navbar, Breadcrumb, Card } from "react-bootstrap";
import home from '../assets/img/home.png';


export const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={home} alt="logo" className="logo-img"></img>
                </Navbar.Brand>
                <Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#analysis">Form</Breadcrumb.Item>
                </Breadcrumb>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
