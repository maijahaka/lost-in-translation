import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'


function LoginForm() {
  return (
      <div>
        <Form.Control size="lg" type="text" placeholder="What's your name?" />
        <br />
        <Button variant="success">Start</Button>
      </div>
  )
}

export default LoginForm
