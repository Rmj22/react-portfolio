import React, { Component } from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import '../navbar/style.css'



export class Navi extends Component {
  render() {
    return (

      <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#home">
      <img
        alt="xml logo"
        src="../logo/white_logo_dark_background.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <br />
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="mailto:xmlvantagellc@gmail.com">Contact Us</Nav.Link> 
      </Nav>
      </Navbar>
    )
  }
}

export default Navi;