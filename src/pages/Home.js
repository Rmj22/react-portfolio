import React from "react";
import Jumbo from "../components/jumbotron";
import TopNav from "../components/navbar"
import Footer from "../components/footer"
import {Row, Container, Col} from "react-bootstrap";
import "../pages/style/home.css"




function Home() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md="auto">
      <TopNav/>
      </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
        <Jumbo/>
        </Col>
      </Row>
      <Footer fixed="bottom"/>
    </Container>
  )
}

export default Home;
