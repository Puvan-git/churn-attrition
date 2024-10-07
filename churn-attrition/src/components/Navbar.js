import { React, useState } from 'react';
import { Container, Navbar, Breadcrumb, Form, Button } from "react-bootstrap";
import home from '../assets/img/home.png';
import searchBar from '../assets/img/searchIcon.png';


export const NavBar = () => {
    const [isActive, setActive] = useState('Home');

    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home" 
                onClick={() => {
                    setActive('Home');
                }}>
                    <img src={home} alt="logo" className="logo-img"></img>
                </Navbar.Brand>
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item active={isActive === 'Home'? true: false} 
                    onClick={() => {
                        setActive('Home');
                    }} href="#home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active={isActive === 'Form'? true: false} 
                    onClick={ () => {
                        setActive('Form');
                    }} href="#analysis">Form</Breadcrumb.Item>
                </Breadcrumb>
                <Form className="d-flex form">
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
