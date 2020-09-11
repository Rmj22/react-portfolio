import React from "react";
import {Row, Container, Col} from "react-bootstrap";
import Main from "../components/main";
import TopNav from "../components/navbar"
import Footer from "../components/footer"
import "../pages/style/home.css"



function Home() {
  return (
    <Container fluid id="tab">
      <Row className="justify-content-md-center">
        <Col md="auto">
      <TopNav/>
      </Col>
      </Row>
      <Row>
        <Col>
        <Main/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
      <Footer/>
      </Col>
      </Row>
    </Container>
  )
}

export default Home;
