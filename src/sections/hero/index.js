import React from 'react'
import './styles.scss'
// import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import Glitch from 'components/glitch'
import Typewriter from 'typewriter-effect'
import ThemeContext from '../../context'
class Hero extends React.Component {

  static contextType = ThemeContext

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>Welcome To</h4>
              </div>
              <Glitch text="XML VANTAGE" />
              <Typewriter
                options={{
                  strings: [
                    'Agile Scrum',
                    'Site Design',
                    'SharePoint',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <button className="hover-button">
                  <span>Capability</span>
              </button>
            </div>
            
          </Col>
          {/* <Col md={6} className="img">
            <img
              src="img/white_logo_dark_background.jpg"
              alt="logo"
            />
          </Col> */}
        </Row>
      </section>
    )
  }
}

  export default Hero
