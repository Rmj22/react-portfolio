import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../navbar/style.css'
import Resume from '../../pages/Resume'
import Work from '../../pages/Work'
import About from '../../pages/About'



export class TopNav extends Component {
  render() {
    return (
      <div id="nav" >
        <Navbar>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link  >About </Nav.Link>
            <Nav.Link href="">{Work} </Nav.Link>
            <Nav.Link href="#pricing">{About} </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default TopNav;