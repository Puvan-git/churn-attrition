import React from 'react'
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

export const SideBar = () => {
    return (
        <Navbar bg="light" expand={false} className="mb-3">
            <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
            >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                    Sidebar
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="flex-column">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}