import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from 'Assets/logo/black.png';
import './Header.scss';

function Header() {
    return <Navbar className="fed-nav-bar" bg="none" expand="lg">
        <Container>
            <Navbar.Brand href="#home"><img src={Logo} alt="Adrenaline Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Culture</Nav.Link>
                    <Nav.Link href="#deets">Work</Nav.Link>
                    <Nav.Link href="#deets">Clients</Nav.Link>
                    <Nav.Link href="#deets">Services</Nav.Link>
                    <Nav.Link href="#deets">Careers</Nav.Link>
                    <Nav.Link href="#deets">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>


    </Navbar>
}

export default Header;