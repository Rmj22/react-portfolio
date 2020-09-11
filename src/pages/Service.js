import React from "react";
import {Container, Col, Row} from "react-bootstrap"
import Web from "../components/web/index"
import TopNav from "../components/navbar/index"
import Footer from "../components/footer/index"
import "../pages/style/home.css"



function Service() {
  return (
      <Container fluid>
       <Row className="justify-content-md-center">
        <Col md="auto">
      <TopNav/>
      </Col>
      </Row>
        <Row>
          <Col>
          <Web/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
               <Col md="auto">
                   <Footer fixed ="bottom"/>
               </Col>
           </Row>
      </Container>
      
    )
  }

export default Service;
