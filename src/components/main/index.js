import React, { Component } from 'react'
import {Container, Card, Col, Row} from 'react-bootstrap'
import "./style.css"



export class Main extends Component {
    render() {
        return (
                    <Container fluid>
                <Row className="justify-content-md-center">
               <Col md="auto">
            
                <Card.Body>
                  <h3> One on One Boutique Client Developers </h3>
                    <p>You are too busy to build the site that represents your organization, ideals and  
                        brand. We are not. Contact us and lets talk about how to create and
                        increase user traffic on your site which will ultimately increase your income.
                    </p>
                </Card.Body>
              </Col>
              </Row>
              </Container>                
        )
    }
}

export default Main;