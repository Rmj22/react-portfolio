import React, { Component } from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import TopNav from '../Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./style.css"



export class Jumbo extends Component {
    render() {
        return (
            <div className="homepage">
                
                    <Container>
                        <TopNav/>
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
                    Full Stack Web Developer leveraging a background in the military and SharePoint development 
                    to build a more intuitive user experience on the web. I recently completed and earned a Full 
                    Stack Development certiﬁcate at Johns Hopkins University. Looking to bring my newly developed skills 
                    in JavaScript, Responsive CSS, React.js and Node to your team. Known as a head-on problem-solver passionate 
                    about developing apps, with a focus on mobile-ﬁrst design and style that is right for your company. 
                    With each project, my aim is to create the best user-experience. I applied aspects of UI and scrum development in a 
                    recent project where I worked in a team of four to develop a multi page MERN app that helps dog owners track their 
                    pet while they are away. Excited for new opportunities to expand my skill set. 
                    </p>
                    
                   </Container>
                
                </Container>
            </div>
        )
    }
}

export default Jumbo;