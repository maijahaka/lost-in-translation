import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function AppHeader() {
  const user = window.localStorage.getItem('user')
  const faKeyboardIcon = <FontAwesomeIcon icon={faKeyboard} />
  const faUserCircleIcon = <FontAwesomeIcon icon={faUserCircle} />

  return (
    <Container>
          <div className="app-header">

      <Nav>
        <Nav.Item>
          <NavLink to='/'>{faKeyboardIcon} LOST IN TRANSLATION</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to='/profile'>{faUserCircleIcon} {user && user}</NavLink>
        </Nav.Item>
      </Nav>
      </div>

    </Container>
  )
}

export default AppHeader
