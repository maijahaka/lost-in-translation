import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import LoginForm from '../forms/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css'


function Login() {
  return (
    <Container>
        <Jumbotron>
            <h1>Lost in Translation!</h1>
            <h2>Get started</h2>
            <br />
            <LoginForm />
        </Jumbotron>
    </Container>
  )
}

export default Login
