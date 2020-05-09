import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import TopNav from "../Navbar";
import '../Card/style.css'

export class Projects extends Component {
  render() {
    return (
      <div className="back">
        <TopNav />
      <Container>
      
        <CardDeck>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Kanye Workout</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">MongoDB App</Card.Subtitle>
            <Card.Text>
              Skills used MongoDB, Mongoose, Morgan, Express, Robo 3T and deployed on heroku with mlab addon
    </Card.Text>
            <Button className="button" href="https://github.com/Rmj22/workout">Source Code</Button>
            <Button className="button" href="https://kanyesworkout.herokuapp.com">Deployed App</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Budget</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">PWA App</Card.Subtitle>
            <Card.Text>
              Skills used compression, express, lite-server, mongoose, morgan and deployed on heroku with mlab addon
    </Card.Text>
            <Button className="button" href="https://github.com/Rmj22/simple_budget">Source Code</Button>
            <Button className="button" href="https://murmuring-journey-01407.herokuapp.com">Deployed App</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Pop Culture Quiz</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">jQuery App</Card.Subtitle>
            <Card.Text>
              Skills used JQuery, Howler API, Pop Cultrue API, Bulma framework and deployed on GitHub pages
    </Card.Text>
            {/* <Button className="button" href="https://github.com/Rmj22/simple_budget">Source Code</Button> */}
            <Button className="button" href="https://pmitch242.github.io/Pop-Culture-Trivia/index.html">Deployed App</Button>
          </Card.Body>
        </Card>
        </CardDeck>
      </Container>
      </div>
    )
  }
}
export default Projects;
