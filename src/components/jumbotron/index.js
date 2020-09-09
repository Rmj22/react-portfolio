import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import "./style.css"



export class Jumbo extends Component {
    render() {
        return (
                    <Container fluid>
                   <h3>We provide business web solutions to streamline your business processes,
                       enhance web presence, and launch your innovative outreach initiative.
                   </h3>
                </Container>
        )
    }
}

export default Jumbo;