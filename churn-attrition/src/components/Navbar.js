import React from 'react';
import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import { Breadcrumbs } from './BreadCrumb';
import home from '../assets/img/home.png';


export const NavBar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home" className="logo">
                    <img src={home} alt="Logo"></img>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
