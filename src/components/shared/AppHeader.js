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
    <NavLink to='/translate'>(IMAGE) LOST IN TRANSLATION</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink to='/profile'>Profile Page {user && user}</NavLink>
  </Nav.Item>
</Nav>
</Container>
  )
}

export default AppHeader
