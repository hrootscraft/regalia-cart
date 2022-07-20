import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">REGALIA</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <i className="fas fa-user"></i> Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
