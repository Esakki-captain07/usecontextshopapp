import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CartContext } from '../CartContext';

function NavBar() {
  let { cartCount,totalPrice } = useContext(CartContext);

  return (
    <Navbar className="bg-body-tertiary navHead">
      <Container>
        <Navbar.Brand href="#home">Smart Phones</Navbar.Brand>
        <Navbar.Toggle />
        <form className="d-flex">
          <button className="btn btn-outline-dark">
            <i className="bi-cart-fill me-1"></i>
            Price
            <span className="badge bg-dark text-white ms-1 rounded-pill">${totalPrice.toFixed(2)}</span>
          </button>
          <button className="btn btn-outline-dark">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
          </button>
        </form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
