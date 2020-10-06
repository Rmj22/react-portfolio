import React, { Component } from "react";
import {Card, Container, Col, Row} from 'react-bootstrap'
import './style.css'

export class Web extends Component {

    render() {
        return (
      <Container fluid>
        
         <Row className="justify-content-center">
         <Col sm={4}>
           <Card.Body>
             <h3 className="header"> Software Development</h3>
             <p> Using agile scrum, code hosting and collaboration software our developers will build the tool you need. 
                We have programmers with diverse background in Angular, Java, C++, Javascript, Python and MySql.
 </p>
           </Card.Body>
         </Col>
      <Col sm={4}>
           <Card.Body>
             <h3 className="header"> Software Training </h3>
             <p>
             In-person vs. Remote most of the time this is decided by need and capability.
              We have the ability maintain team organization and collaborations remotely if prefered.  
              Our Technical writers will work with the client and staff on solution implementation.
              We also help prepare custom presentations for leadership. Xml’s technical writers ensure 
              the client understands their solutions inside and out.
             </p>
           </Card.Body>
         </Col>
         </Row>
         
         <Row className="justify-content-center">
         <Col md={4}>
           <Card.Body>
             <h3 className="header"> SharePoint </h3>
             <p>
             The team is composed of content managers, administrators, architects and developers.
              All of these positions are important to the correct build of your solutions. 
              We configure, maintain, test, gather requierments and normalize data.                                                                                                     
             </p>
           </Card.Body>
         </Col>
         </Row>
      </Container>
  
        )
    }
}

export default Web;