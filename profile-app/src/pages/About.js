import React from "react";
import Navbar from 'react-bootstrap/Navbar'

function About() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>

    <div class="jumbotron"> backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Welcome to the world of Robin</h1>
        <h2>This site is proof that I understand and can use React</h2>
      </div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Whats going on here</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              This site was created to prove that I understand how react is used and how it works, in hopes
              to move this hiring process along. With this site employeers will be able to see what I have 
              been able to build by myself with limited about of time. 

            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
