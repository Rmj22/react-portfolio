import React, { Component } from 'react';
import {ListGroup, Button} from 'react-bootstrap';
import '../navbar/style.css'








export class TopNav extends Component {
  render() {
    return (
       
      
        <ListGroup id="nav" horizontal>
          <Button   href="/"> Home </Button>
          <Button   href="/Work">Projects</Button>
          <Button   href="/PreScreen">Pre-Screen</Button>
          <Button   href="https://www.linkedin.com/in/robin-jones-7534bb167">Linkedin</Button>
          <Button   href="https://github.com/Rmj22">Github</Button>
        </ListGroup>
        
        
    )
  }
}

export default TopNav;