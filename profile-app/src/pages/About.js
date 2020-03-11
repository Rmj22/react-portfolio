import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgrongImage="./public">
        <h1>Portfolio</h1>
        <h2>Here is proof I know react</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Funny Full Stack Developer!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              My name is Robin Jones and I'm a new Full stack developer. I use to work on SharePoint only
              then decided to see what else was out there.
            </p>
            <p>
              I have over 8 years of experince in the intelligence communtiy and I'm really fuuny.

            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
