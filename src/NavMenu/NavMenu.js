import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    
    return (
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
        <div className="">
        <h5 style={{"color": "white"}}>Portfolio Website</h5>
        </div>
        <div>
        <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
      <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
    </Nav>
        </div>
    </Container>
   </Navbar>
        </div>
    );
};
export default NavMenu;