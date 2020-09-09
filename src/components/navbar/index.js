import React, { Component } from 'react';
import {NavDropdown, Container, Nav, Navbar} from 'react-bootstrap';
import '../navbar/style.css'




export class TopNav extends Component {
  render() {
    return (
       
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" className="bar">
  <Navbar.Brand >XML VANTAGE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav id="nav"className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Service">Business IT Solutions</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Train">Training</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      {/* <Nav.Link href="/Portfolio">Portfolio</Nav.Link> */}
    </Nav>

  </Navbar.Collapse>
</Navbar>
</Container>
        
    )
  }
}

export default TopNav;