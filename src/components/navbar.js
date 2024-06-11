import React from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'

export default function NavBar() {
    const navigate = useNavigate();
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="justifiy-content-center">
                        <Navbar.Brand onClick={() => navigate('/')}>Movix.</Navbar.Brand>
                        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/shows')}>Shows</Nav.Link>
                        <Nav.Link onClick={() => navigate('/movies')}>Movies</Nav.Link>
                    </Nav>
                    <Nav>
                        <SearchBar/>
                        <Nav.Link onClick={() => navigate('/signup')}>Sign Up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export const Brand = () => {
    const navigate = useNavigate();
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="justifiy-content-center">
                        <Navbar.Brand onClick={() => navigate('/')}>Movix.</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

const SearchBar = () => {
    return(
        <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search anything..."
            />
        </Form>
    );
}