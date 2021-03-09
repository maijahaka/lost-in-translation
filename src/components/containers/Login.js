import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import LoginForm from '../forms/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/userActions'

function Login() {
  let history = useHistory()
  const dispatch = useDispatch()

  const handleLogin = (user) => {
    dispatch(login(user))
    history.push('/')
  }

  return (
    <Container>
        <Jumbotron className="log-in-jumbotron">
            <h1>Lost in Translation!</h1>
            <h2>Get started</h2>
            <br />
            <LoginForm login={handleLogin} />
        </Jumbotron>
    </Container>
  )
}

export default Login
