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
             <h3>Software Development </h3>
             <p> MERN Full-Stack Development, Data Normalization, Backend Development, Database management,

             </p>
           </Card.Body>
         </Col>
      <Col md={4}>
           <Card.Body>
             <h3> Implementation </h3>
             <p> Technical Writting, SOP
               
             </p>
           </Card.Body>
         </Col>
         </Row>
      </Container>
         


            
        )
    }
}

export default Web;