import React from 'react';
import { Container, Col, Row, Nav } from "react-bootstrap";
import { Breadcrumbs } from './Breadcrumbs';
import home from '../assets/img/home.png';


export const Navbar = () => {
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
