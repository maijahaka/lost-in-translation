import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

function AppHeader() {
  const user = window.localStorage.getItem('user')

  return (
    <Container>
    <Nav>
  <Nav.Item>
    <Nav.Link><NavLink to='/translate'>(IMAGE) LOST IN TRANSLATION</NavLink></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1"><NavLink to='/profile'>Profile Page {user && user}</NavLink></Nav.Link>
  </Nav.Item>
</Nav>
</Container>
  )
}

export default AppHeader
