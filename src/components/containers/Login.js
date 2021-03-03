import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'


function Login() {
  return (
    <Container>
        <Jumbotron>
            <h1>Lost in Translation!</h1>
            <h2>Get started</h2>
            <br />
            <Form.Control size="lg" type="text" placeholder="What's your name?" />
            <br />
            <Button variant="success">Start</Button>
        </Jumbotron>
    </Container>
  )
}

export default Login
