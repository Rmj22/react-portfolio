import React, { Component } from 'react';
import { Card, Row} from 'react-bootstrap';
// import '../card/style.css';



export class TrainCard extends Component {
     render() {
       return(
       
          <Row >
         
           <Card.Body>
             <h3>Remote Trainings and Conferences </h3>
             <p>Stop screaming in to the microphone, stepping on team members and listening to your co-worker's dog bark
               uncontrollably. Let my team and I handle the set up, microphones, organized chat. Properly display templates,
               movies and other forms of media. While your able to stay on topic.
             </p>
           </Card.Body>
         
         
        
         </Row>
        
       )
     }
}

export default TrainCard
