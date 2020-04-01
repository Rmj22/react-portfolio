import React, {Component} from 'react'
import {Button, Card, CardDeck} from 'react-bootstrap';


export class Projects extends Component {
  
    render() {

        return (
            <div id="pjcards">

<CardDeck>
  <Card>
    <Card.Img variant="top" src=".\image\workout.PNG" />
    <Card.Body>
      <Card.Title>Kanyes Workout</Card.Title>
      <Card.Text>
        <p>This application uses MongoDB, Mongoose, Morgan, Express, Robo 3T and deployed on heroku with mlab addon.</p>
        <p>The app allows users to log a new workout. That workout is added to the database, when the user logs back in they
           have the option of continuing the workout or creating a new one. All of this activity will be displayed on the users dashboard
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="https://kanyesworkout.herokuapp.com"> check it out</Button>
      <Button href="https://github.com/Rmj22/workout">git straight to the source</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src=".\image\budget chart.PNG" />
    <Card.Body>
      <Card.Title>Simple Budget</Card.Title>
      <Card.Text>
        <p>This application uses compression, express, lite-server, mongoose, morgan and deployed on heroku with mlab addon</p>
        <p>What is special about this app you ask? It has full site functionality offline thanks to the service worker and cahced pages.
           pwa (Progressive Web Application) are very import to the user experience. Why does this matter to you? There are fewer calls your
           network which frees up alot of space mobile first matched with pwa will allow users to acces your site anywhere.
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="https://murmuring-journey-01407.herokuapp.com"> check it out</Button>
      <Button href="https://github.com/Rmj22/simple_budget">git straight to the source</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src=".\image\notes.PNG" />
    <Card.Body>
      <Card.Title>Note Taker</Card.Title>
      <Card.Text>
        <p>This application uses express</p>
        <p>The app allows users to create and delete notes all notes are saved to a JSON file and retrieved from that same file.</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="https://young-sea-15477.herokuapp.com/"> check it out</Button>
      <Button href="https://github.com/Rmj22/note_taker">git straight to the source</Button>
    </Card.Footer>
  </Card>
</CardDeck>

            </div>
        )
    }
}


export default Projects;