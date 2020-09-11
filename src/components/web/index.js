import React, { Component } from "react";
import {Card, Container, Col, Row} from 'react-bootstrap'
import './style.css'

export class Web extends Component {

    render() {
        return (
      <Container fluid>
        
         <Row>
         <Col md={4}>
           <Card.Body>
             <h3>Software Development and Data Management </h3>
             <p> MERN Full-Stack Development, Data Normalization, Backend Development, Database management,

             </p>
           </Card.Body>
         </Col>
      <Col md={4}>
           <Card.Body>
             <h3> Administrative Support </h3>
             <p>Keeping your team organized while they focus on your mission</p>
           </Card.Body>
         </Col>
         <Col md={4}>
           <Card.Body>
             <h3> Full Intranet Management </h3>
             <p>Itranets are sometimes overlooked but can be an amazing too to quickly
               organize task, display data and display intenal content to your new employees. Lets us build a custom intranet built
               specifically for your organization or business.
             </p>
           </Card.Body>
         </Col>
         <Col md={4}>
           <Card.Body>
             <h3> SharePoint </h3>
             <p> Let us update your SharePoint site we have worked with 2010,2013 and online with power
               automation. We work with you to create a SharePoint site you can be easliy managed.
             </p>
           </Card.Body>
         </Col>
         </Row>
      </Container>
         


            
        )
    }
}

export default Web;