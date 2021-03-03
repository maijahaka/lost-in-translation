import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'


function Translate() {
  return (
    <Container>
        <Jumbotron>
            <Form.Control size="lg" type="text" placeholder="What's your name?" />
            <br />
            <Button variant="success">Translate</Button>
        </Jumbotron>
        <Jumbotron>
            <p>Placeholder - Hand signs are populated to here</p>
        </Jumbotron>
    </Container>
  )
}

export default Translate
