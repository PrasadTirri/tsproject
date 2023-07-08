import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

type Length = {
  cartItem:number
}

const App: React.FunctionComponent = () => {
  const cartItemCount=useAppSelector(state=> state.cart)
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
            <Nav.Link to="/cart" as={Link}>Cart 0 </Nav.Link>
            </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default App;
