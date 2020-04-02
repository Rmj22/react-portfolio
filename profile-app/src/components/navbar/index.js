import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../navbar/style.css'



export class TopNav extends Component {
  render() {
    return (
      <div id="nav" >
        <Navbar>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link >Home </Nav.Link>
            <Nav.Link href="">Pre-Screen </Nav.Link>
            <Nav.Link href="#pricing">Projects </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default TopNav;