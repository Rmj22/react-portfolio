import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "../jumbotron/style.css"

export class Jumbo extends Component {
    render() {
        return (
            <div id="main">
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image id="pic" src=".\image\Headshot.jpg"></Image>
                            </Col>
                           
                        </Row>
                    </Container>
                    <p>Proof of what I look like add subtract some hair depending 
                                on the season same with weight</p>
                    <h1>Hi I'm Robin Jones</h1>
                    <p>
                        After spending alot of time driving to interviews, talking to recruiters on the phone and skype interviews
                        that are set up "see what I look like" I decided to set up my own portfolio site to address and answer questions
                        for employers that are thinking about hiring me. 
                        
                        About me *for recuriters and bored noisey old coworkers

                        Where I'm willing to relocate: Minneapolis, Maine, Vermont, Idaho, Chicago, Colorado 
                        and Salt Lake City 

                        Location: Baltimore, MD 
                        It's at the top of my resume but somehow still a question on at the interview no
                        I cant drive to Va or Dc because traffic is a nightmare and I turn in to a horrible human.

                        What I'm Looking for in my next role: A chance, I know alot of languages from the Hopkins class
                        but need time in work to grow my skills and understanding the same way everyone else did. So 
                        no I cant build you google in 48hours. 
                        A cute but werid relationship interview question

                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Jumbo;