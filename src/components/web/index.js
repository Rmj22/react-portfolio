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
             <h3 className="header"> Software Development and Data Management </h3>
             <p> Front-end, Back-end and MERN stack these are term that we will not bother you with. You dont have to worry about know excacty what you need
               we will collect your requierments and select the correct developer to work your account. </p>
           </Card.Body>
         </Col>
      <Col sm={4}>
           <Card.Body>
             <h3 className="header"> Administrative Support </h3>
             <p>The trick to ease implementation of your solution is records management, Permission control and technical documentation. These task need to 
               coinside with solution development. It also shows areas of improvement in the business process.

             </p>
           </Card.Body>
         </Col>
         </Row>
         
         <Row className="justify-content-center">
         <Col md={4}>
           <Card.Body>
             <h3 className="header"> Full Intranet Management </h3>
             <p>Intranets are internal internet systems that are built on secure server. An intranet presences can help you and your employees 
                highlight your progress and track concerns through custom dashboards. This is great for 
                companies that have multiple projects that need to be tracked. Intranets have replaced powerpoint abd excel sheets, now you can display live metrics on your 
                client.                                                                                                       
             </p>
           </Card.Body>
         </Col>
         
         <Col sm={4}>
           <Card.Body>
             <h3 className="header"> Training and Collaboration</h3>
             <p> In-person vs. Remote most of the time this is decided by need and capability. We have both invite us to your next scrum or client 
               requirement meeting. Every year industries have new procedures and trainings that come out unfortunately these trainings take a 
               time to organize that's time that is being drawn away from your mission. We have everything you need to organize and maintain your 
               training schedule.
 </p>
           </Card.Body>
         </Col>
         <Col sm={4}>
           <Card.Body>
             <h3 className="header"> SharePoint </h3>
             <p> We know SharePoint from architecture, administrative, development and content management we have done it all. With all instances . When organizations upgrade to the lastest version
               of SharePoint workflows and other vital custom funtions are known to break. Bring us in to plan a safe migration and controlled breaks.
             </p>
           </Card.Body>
         </Col>
         </Row>
      </Container>
  
        )
    }
}

export default Web;