import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Us</h4>
                            </div>
                            <p>We create and maintain web solutions for government clients using a pool
                           of diverse individuals with various development backgrounds to bring new 
                           solutions to your organization. Before any of our employees arrive at the 
                           customer site they train on good coding practices to ensure uniformity for the client. 
                           Our goal is to collaborate with you to organize and optimize your mission.</p>
                            <div className="separator" />
                            
                            {/* <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com')}/>
                                <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} />
                                <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com')} />
                            </div> */}
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>Skills We Bring</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Web Design" value={90} delay={1100} />
                                <Progress name="Angular" value={100} delay={1100} />
                                <Progress name="API" value={100} delay={1100} />
                                <Progress name="React" value={100} delay={1100} />
                                <Progress name="MySQL" value={100} delay={1100} />
                                <Progress name="MongoDB" value={100} delay={1100} />
                                <Progress name="Agile Scrum" value={100} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero