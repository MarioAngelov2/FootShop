import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import headerStyle from "../styles/Header.module.css";

function Header() {
    return (
        <Navbar sticky="top" expand="md" className="mt-3">
            <Container>
                <Navbar.Brand>FOOT SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <div className={headerStyle.navBarText}>
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

export default Header;
