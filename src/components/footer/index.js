import React, {Component} from "react";
import {Container, Navbar} from "react-bootstrap";
import "../footer"



export class Footer extends Component {
   render() {
       return(
           
          <Container fluid>
              <Navbar-text>@ 2020 xmlvantage, LLC</Navbar-text>
              
              <Navbar.Brand href="mailto:r.jones@xmlvantage.com">Contact Us</Navbar.Brand>
          </Container>
     
      
       )
   }
}

export default Footer;