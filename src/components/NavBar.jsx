import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidget from './CarWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">AC closet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="#home">Inicio</Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Remeras y Musculosas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Polleras y Shorts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vestidos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sueters y Buzos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Blazer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Camperas y Abrigos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Pantalones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.8">Ofertas</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link">Guía de talles</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
          <CarWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar