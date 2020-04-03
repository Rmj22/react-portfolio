import React, { Component } from 'react'
import { Container, Carousel, Button } from 'react-bootstrap';
import './style.css'


export class Projects extends Component {

  render() {

    return (
      <div id="slides">
        <Container>

          < Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://c0.wallpaperflare.com/preview/243/297/192/americano-cafe-coffee-coffee-bar.jpg"
                alt="Finished Work"
              />
              <Carousel.Caption>
                <h3>Finished projects</h3>
                <p>Deployed link and github links</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src=".\image\notes.PNG"
                alt="Note Taker"
              />
              <Carousel.Caption className="text">
                <Button size="lg" href="https://young-sea-15477.herokuapp.com/">Deployed App</Button>
                <Button size="lg" href="https://github.com/Rmj22/note_taker">Git to the source</Button>
              </Carousel.Caption>
            </Carousel.Item>
             <Carousel.Item>
             <img
                className="d-block w-100"
                src=".\image\game.PNG"
                alt="Third slide"
              />
              <Carousel.Caption className="text">
              <Button size="lg" href="https://pmitch242.github.io/Pop-Culture-Trivia/index.html">Deployed App</Button>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=".\image\budget chart.jpg"
                alt="budget chart"
              />

              <Carousel.Caption className="text"n>
              <Button size="lg" href="https://murmuring-journey-01407.herokuapp.com">Deployed App</Button>
                <Button size="lg" href="https://github.com/Rmj22/simple_budget">Git to the source</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=".\image\workout.PNG"
                alt="workout"
              />

              <Carousel.Caption className="text">
              <Button size="lg" href="https://kanyesworkout.herokuapp.com">Deployed App</Button>
                <Button size="lg" href="https://github.com/Rmj22/workout">Git to the source</Button>
              </Carousel.Caption>
            </Carousel.Item>
           
          </Carousel>

        </Container>


      </div>

    )
  }
}
  export default Projects;


