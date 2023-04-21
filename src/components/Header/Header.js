import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import images1 from './assets/styles/images1.jpg';
import images8 from './assets/styles/images8.jpg';
import "./assets/styles/index.css";

const Header = () => { 
    return ( 
      <>
        <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className ="imag" src={images1} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">ABOUT</Nav.Link>
              <Nav.Link href="#link">SERVICES</Nav.Link>
              <Nav.Link href="#link">PRODUCTS</Nav.Link>
              <Nav.Link href="#link">TESTIMONIAL</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
        <img className ="images" src={images8} alt="" />
        <div className ="text">        
          <p className ="text-center maintext">Organic Farming</p>
          <p className ="sidetext"> Our farm strictly combines the tradition of organic farming with the latest 
          innovations to make our products healthy and safe for the clients</p>
          <Button className ="btn" >VIEW PRESENTATION</Button>{''}
        </div>
      </>
    );      
}

export default Header