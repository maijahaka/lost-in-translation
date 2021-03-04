import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Translations from '../translations/Translations'
import AppHeader from '../shared/AppHeader'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

function Profile() {
  let history = useHistory()

  const user = window.localStorage.getItem('user')

  const handleLogoutClick = () => {
    window.localStorage.clear()
    history.push('/')
  }

  return (
    <div>
      <AppHeader />
      <Container>
        <Jumbotron>
          <h1>Hello, {user && user}</h1>
          <p>Here are your ten most recent translations listed below.</p>
        </Jumbotron>
        <Translations />
        <Button onClick={handleLogoutClick}>Logout</Button>
      </Container>
    </div>
  )
}

export default Profile
