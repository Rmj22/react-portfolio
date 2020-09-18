import React, { Component } from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import '../navbar/style.css'


export class Navi extends Component {
  render() {
    return (

      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">XML VANTAGE</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Solution">Services</Nav.Link>
        {/* <Nav.Link href="/Train">Training</Nav.Link> */}
      </Nav>
      </Navbar>
    )
  }
}

export default Navi;