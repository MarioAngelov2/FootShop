import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import navStyle from "../styles/Navbar.module.css";
import logo2 from '../../public/logo3.png'

function NavigationBar() {
    return (
        <Navbar
            bg="light"
            data-bs-theme="light"
            sticky="top"
            expand="md"
            className={`${navStyle.navBarBody}`}
        >
            <Container>
                <Image src={logo2} className={navStyle.image} roundedCircle/>
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
