import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

const style = {
  marginBottom: '30px'
}

export const HeaderApp = () => (
  <Navbar bg="dark" variant="dark" style={style}>
    <Container>
      <Navbar.Brand href="#home">
      Mini Ecommerce
      </Navbar.Brand>
      <ShoppingCart />
    </Container>
  </Navbar>
);
