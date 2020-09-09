import React, { Component } from 'react';
import {Container, Card, Col, Row} from 'react-bootstrap';
import '../card/style.css';



export class TrainCard extends Component {
     render() {
       return(
        <Container fluid>
          <Row>
         <Col md={4}>
           <Card.Body>
             <h3>Remote Trainings and Conferences </h3>
             <p>Stop screaming in to the microphone, stepping on team members and listening to your co-worker's dog bark
               uncontrollably. Let my team and I handle the set up, microphones, organized chat. Properly display templates,
               movies and other forms of media. While your able to stay on topic.
             </p>
           </Card.Body>
         </Col>
         
        
         </Row>
        </Container>
       )
     }
}

export default TrainCard
