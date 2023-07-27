import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navStyle from "../styles/Navbar.module.css";

function NavigationBar() {
    return (
        <Navbar
            bg="light"
            data-bs-theme="light"
            sticky="top"
            expand="md"
            className={`pb-3 ${navStyle.navBarBody}`}
        >
            <Container>
                <Navbar.Brand>FOOT SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <div className={`${navStyle.navBarText}`}>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/shoes">Shoes</Nav.Link>
                            <Nav.Link href="/bags">Bags</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
