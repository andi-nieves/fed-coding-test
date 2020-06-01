import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from 'Assets/logo/black.png';
import './Header.scss';

function Header({ position = "", children }) {
    return <Navbar sticky={position} className="fed-nav-bar" bg="none" expand="lg">
        <Container className={position}>
            <Navbar.Brand href={process.env.PUBLIC_URL}><img src={Logo} alt="Adrenaline Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    {children}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default Header;