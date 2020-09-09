import React from 'react';
import {Row, Container, Col} from "react-bootstrap";
import TrainCard from ".././components/card"
import TopNav from "../components/navbar"
import Footer from "../components/footer"

function Train() {
    return(
       <Container fluid>
           <Row className="justify-content-md-center">
        <Col md="auto">
      <TopNav/>
      </Col>
      </Row>
           <Row>
               <Col>
               <TrainCard/>
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

export default Train