import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import TranslateForm from '../forms/TranslateForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from '../shared/AppHeader'
import TranslatedSignLanguage from '../translations/TranslatedSignLanguage'

function Translate() {
  return (
    <div>
      <AppHeader />
      <Container>
          <Jumbotron>
              <TranslateForm />
          </Jumbotron>
          <Jumbotron>
              <TranslatedSignLanguage sentence='Hello, this is an example!' />
          </Jumbotron>
      </Container>
    </div>
  )
}

export default Translate
