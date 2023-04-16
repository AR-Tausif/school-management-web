import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './header.css'

const Header = () => {
    return (
        <Container>
            <div className="mt-5 py-5">
                <div className="text-center m-auto pt-5">
                    <h3 className="bg-success text-white w-25 m-auto fs-6 py-2 rounded mt-5">LISTEN TO OUR NEW ANTHEM</h3>
                    <h2 className="display-4 fw-semibold mt-5">Crack UPSC CSE - GS with World's largest <br /> learning platform</h2>
                    <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br/> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <Form className="d-flex w-50 m-auto mt-5">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="success" className="w-25 fs-4">Sign In</Button>
                </Form>
            </div>
        </Container>
    );
};

export default Header;