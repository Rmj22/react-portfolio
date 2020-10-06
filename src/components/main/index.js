import React, { Component } from 'react'
import {Container, Card, Col, Row} from 'react-bootstrap'
import "./style.css"



export class Main extends Component {
    render() {
        return (
                    <Container fluid>
                {/* <Row className="justify-content-center">
               <Col md={6}>
            
                <Card.Body>
                  <h3> Boutique Client Developers </h3>
                    <p>You are too busy to build the site that represents your organization, ideals and  
                        brand. We are not. Contact us and lets talk about how to create and
                        increase user traffic on your site which will ultimately increase your income.
                    </p>
                </Card.Body>
              </Col>
              </Row> */}
              <Row className="justify-content-center">
                  <Col md={4}>
                     
                  <Card.Body className="card">
                      <h3>About Us</h3>
                      <p>We create and maintain web solutions for government clients using a pool
                           of diverse individuals with various development backgrounds to bring new 
                           solutions to your organization. Before any of our employees arrive at the 
                           customer site they train on good coding practices to ensure uniformity for the client. 
                           Our goal is to collaborate with you to organize and optimize your mission. </p>
                  </Card.Body>
                 
                  </Col>
              </Row>
              <Row className="justify-text-center">
         <Col md={4}>
           <Card.Body className="card">
             <h3 className="header"> Software Development</h3>
             <p> Using agile scrum, code hosting and collaboration software our developers will build the tool you need. 
                We have programmers with diverse background in Angular, Java, C++, Javascript, Python and MySql.
 </p>
           </Card.Body>
         </Col>
      <Col md={4}>
           <Card.Body className="card">
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
         
         
        
         <Col md={4}>
           <Card.Body className="card">
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

export default Main;