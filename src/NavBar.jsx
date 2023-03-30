import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (
    <Navbar bg="white" expand="lg" style={{width: '49rem'}}>
      <Container className='my-3 font-monospace'>
        <Navbar.Brand href="#home">LineBiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Platform</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
          <Button className='px-4 rounded-5' variant="outline-dark">Join</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;