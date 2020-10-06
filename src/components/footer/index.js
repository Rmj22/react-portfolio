import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import "../footer"



export class Footer extends Component {
   render() {
       return(
           
          <Container fluid>
              <Navbar-text className="footer" href="mailto:xmlvantagellc@gmail.com">@ 2020 Oct XML Vantage, LLc </Navbar-text> 
             
                          
          </Container>
     
      
       )
   }
}

export default Footer;