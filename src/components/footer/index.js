import React, {Component} from "react";
import {Container, Navbar} from "react-bootstrap";
import "../footer"



export class Footer extends Component {
   render() {
       return(
           
          <Container fluid>
              <Navbar.Brand href="#home">Contact Us</Navbar.Brand>
          </Container>
     
      
       )
   }
}

export default Footer;