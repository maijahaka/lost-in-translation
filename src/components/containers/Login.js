import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import LoginForm from '../forms/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'


function Login() {
  let history = useHistory()

  const handleLogin = (user) => {
    window.localStorage.setItem('user', user)
    history.push('/translate')
  }

  return (
    <Container>
        <Jumbotron>
            <h1>Lost in Translation!</h1>
            <h2>Get started</h2>
            <br />
            <LoginForm login={handleLogin} />
        </Jumbotron>
    </Container>
  )
}

export default Login
