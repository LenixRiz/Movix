import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Movix.</Navbar.Brand>
                    <Nav className="justifiy-content-center">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#shows">Shows</Nav.Link>
                        <Nav.Link href="#movie">Movie</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#signup">Sign Up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}