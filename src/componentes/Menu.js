import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; 
import { IoPersonCircle, IoCartOutline } from "react-icons/io5";

function Menu() {
  return (
    <Navbar bg="light" expand="lg"> 
      <Navbar.Brand as={Link} to="/">MercadoExpress</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/productos/indumentaria">Indumentaria</Nav.Link>
          <Nav.Link as={Link} to="/productos/celulares">Celulares</Nav.Link>
          <Nav.Link as={Link} to="/productos/consolas">Consolas</Nav.Link>
          <Nav.Link as={Link} to="/productos/computadoras">Computadoras</Nav.Link>
          <Nav.Link as={Link} to="/productos/autos">Autos</Nav.Link>
          <Nav.Link as={Link} to="/productos/libros">Libros</Nav.Link>
          <Nav.Link as={Link} to="/carrito"><IoCartOutline /></Nav.Link>
          <Nav.Link as={Link} to="/login"><IoPersonCircle /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;