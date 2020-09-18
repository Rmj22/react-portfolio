import React, { Component } from 'react'
import {Container, Card, Col, Row} from 'react-bootstrap'
import "./style.css"



export class Main extends Component {
    render() {
        return (
                    <Container fluid>
                <Row className="justify-content-center">
               <Col md={6}>
            
                <Card.Body>
                  <h3> Boutique Client Developers </h3>
                    <p>You are too busy to build the site that represents your organization, ideals and  
                        brand. We are not. Contact us and lets talk about how to create and
                        increase user traffic on your site which will ultimately increase your income.
                    </p>
                </Card.Body>
              </Col>
              </Row>
              <Row className="justify-content-center">
                  <Col md={6}>
                  <Card.Body>
                      <h3>About Us</h3>
                      <p>Over the past 10 years we have provided business IT solutions for government agencies in
                          the DC, MD and VA. The owner Robin Jones is from Arlington, VA and in 2009 he joined the Army National
                          Guard and served for 6 years in the 29th Infantry division. After leaving the national guard he subcontracted with
                          the government to provide software solutions. Now he wants to bring those skills to your business/organization. </p>
                  </Card.Body>
                  </Col>
              </Row>
              </Container>                
        )
    }
}

export default Main;