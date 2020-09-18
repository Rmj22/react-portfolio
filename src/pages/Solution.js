import React from "react";
import {Container, Col, Row} from "react-bootstrap"
import Web from "../components/web";
import Navi from "../components/navbar";
import Footer from "../components/footer"

function Solution() {

        return(
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Navi/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Web/>
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

export default Solution;