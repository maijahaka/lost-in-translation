import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'


function AppHeader() {
  return (
    <Container>
    <Nav>
  <Nav.Item>
    <Nav.Link>(IMAGE) LOST IN TRANSLATION</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" href="#">Profile Page (Display name here)</Nav.Link>
  </Nav.Item>
</Nav>
</Container>
  )
}

export default AppHeader
