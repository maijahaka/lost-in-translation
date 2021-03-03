import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Translations from '../translations/Translations'
import 'bootstrap/dist/css/bootstrap.min.css'


function Profile() {
  return (
    <Container>
      <Jumbotron>
        <h1>Hello, {"yourName"}</h1>
        <p>Here are your ten most recent translations listed below.</p>
      </Jumbotron>
      <Translations />
    </Container>
  )
}

export default Profile
