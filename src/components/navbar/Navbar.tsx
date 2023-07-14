import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import './Navbar.css'


const Navba: React.FunctionComponent = () => {
  const cartItemCount=useAppSelector(state=> state.cart)
  console.log(cartItemCount,'pstts')
  return (
    <>
     <Navbar expand="lg" className="bg-info shadow">
      <Container>
        <Navbar.Brand href="#home">Typescript</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            
            <Nav.Link to="/home" as={Link}>Home</Nav.Link>
            <Nav.Link to="/products" as={Link}>Products</Nav.Link>
            <Nav.Link to="/about" as={Link}>About Us</Nav.Link>
           
            
          </Nav>
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link to="/cart" as={Link}>Cart  </Nav.Link>
            <Nav.Link to="/cart" as={Link}><p className='cart-count'>{cartItemCount.posts.length}</p>  </Nav.Link>
            </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navba;
