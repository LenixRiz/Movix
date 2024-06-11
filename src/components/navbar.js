import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'

export default function NavBar() {
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="justifiy-content-center">
                        <Navbar.Brand href="/">Movix.</Navbar.Brand>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/shows">Shows</Nav.Link>
                        <Nav.Link href="/movies">Movies</Nav.Link>
                    </Nav>
                    <Nav>
                        <SearchBar/>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export function Brand() {
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="justifiy-content-center">
                        <Navbar.Brand href="/">Movix.</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

function SearchBar() {
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