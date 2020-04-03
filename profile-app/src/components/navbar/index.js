import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../navbar/style.css'
// import {faGithub, falistalt,facouch,fabriefcase } from'@fontawesome'




export class TopNav extends Component {
  render() {
    return (
      <div id="nav" >
        <Navbar>
          <Navbar.Brand href="#home">React Portfolio Site</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/" >Home   </Nav.Link>
            <Nav.Link href="/Work">Work </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/robin-jones-7534bb167/">linkedin</Nav.Link>
            <Nav.Link href="/Resume">Resume </Nav.Link>
            <Nav.Link href="https://github.com/Rmj22">Github</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default TopNav;