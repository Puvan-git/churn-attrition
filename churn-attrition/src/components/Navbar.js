import React from 'react';
import { Container, Navbar, Breadcrumb, Form, Button } from "react-bootstrap";
import home from '../assets/img/home.png';
import searchBar from '../assets/img/searchIcon.png';


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
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />    
                    <Button>
                        <img src={searchBar} alt="search" className="logo-img"></img>
                    </Button>
                </Form>
            </Container>
        </Navbar>
    )
}
