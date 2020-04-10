import React, { Component } from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "../jumbotron/style.css"



export class Jumbo extends Component {
    render() {
        return (
            <div className="homepage">
                
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image  className="pic" src=".\image\Headshot.jpg"></Image>
                            </Col>
                           
                        </Row>
                        <Container id="aboutme">
                    <Row>
                        <Col xs={6} md={4}>
            
                    <h1>Hi I'm Robin Jones</h1>
                    </Col>
                    </Row>
                    <p>
                    Full Stack Web Developer leveraging a background in the military and SharePoint development to build more intuitive 
                    user experience on the web. I completed and earned a Full Stack Development certiﬁcate at Johns Hopkins University. 
                    With my newly developed skills in JavaScript, CSS, React.js, Node and responsive web design. 
                    Known as a head-on problem-solver passionate about developing apps, with a focus on mobile-ﬁrst design and development that are right for your company.
                    With each project, my aim is to best engage my audience for a positive user-experience.
                    I applied aspects of UX and scrum development in a recent project where I worked in a team of four to develop a multipage MERN app that helps dog owners track their pet while they are away.
                    Excited to leverage skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.
                   
                    </p>
                    
                   </Container>
                
                </Container>
            </div>
        )
    }
}

export default Jumbo;