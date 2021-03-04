import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import TranslateForm from '../forms/TranslateForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from '../shared/AppHeader'

function Translate() {
  return (
    <div>
      <AppHeader />
      <Container>
          <Jumbotron>
              <TranslateForm />
          </Jumbotron>
          <Jumbotron>
              <p>Placeholder - Hand signs are populated to here</p>
          </Jumbotron>
      </Container>
    </div>
  )
}

export default Translate
