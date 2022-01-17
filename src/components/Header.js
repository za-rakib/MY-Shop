import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">MY SHOP</Navbar.Brand>
          <Nav className="ms-auto" style={{color:'red'}}>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/details">Details</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
