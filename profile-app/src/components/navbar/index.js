import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../navbar/style.css'
import About from '../../pages/About'
import Projects from '../../pages/Work'
import Resume from '../../pages/Resume'


export class TopNav extends Component {
  render() {
    return (
      <div id="nav" >
        <Navbar>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link >Home <About/></Nav.Link>
            <Nav.Link href="">Pre-Screen <Resume/> </Nav.Link>
            <Nav.Link href="#pricing">Projects <Projects/> </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default TopNav;