import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import '../Navbar/style.css'
import {faHome} from '@fontawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fontawesome/react-fontawesome'





export class TopNav extends Component {
  render() {
    return (
    
        <ListGroup id="nav" horizontal>
          <ListGroupItem className="item" action href=""> Home <FontAwesomeIcon icon={faHome}/></ListGroupItem>
          <ListGroupItem className="item" action href="">Projects</ListGroupItem>
          <ListGroupItem className="item" action href="">Resume</ListGroupItem>
          <ListGroupItem className="item" action href="https://www.linkedin.com/in/robin-jones-7534bb167">Linkedin</ListGroupItem>
          <ListGroupItem className="item" action href="https://github.com/Rmj22">Github</ListGroupItem>
        </ListGroup>
        
    )
  }
}

export default TopNav;