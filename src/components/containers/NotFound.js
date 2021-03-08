import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import AppHeader from '../shared/AppHeader'
import 'bootstrap/dist/css/bootstrap.min.css'

function NotFound() {

  return (
      <div>
    <AppHeader />
    <Container>
        <Jumbotron className="translate-jumbotron">
            <h1>404 Page Not Found</h1>
            <h2>The page you are trying to access doesn't exist.</h2>
            <br />
        </Jumbotron>
    </Container>
    </div>
  )
}

export default NotFound