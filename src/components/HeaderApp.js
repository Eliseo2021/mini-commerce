import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { Link } from "react-router-dom";

const style = {
  marginBottom: '30px'
}

export const HeaderApp = () => (
  <Navbar bg="dark" variant="dark" style={style}>
    <Container>
    <Link to={"/"}>
      <Navbar.Brand href="#home">
      Mini Ecommerce
      </Navbar.Brand>
    </Link>
      <ShoppingCart />
    </Container>
  </Navbar>
);
