import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState} from 'react'

function LoginForm({ login }) {
  const [ name, setName ] = useState('')

  const onNameChanged = event => setName(event.target.value)

  const onLoginFormSubmitted = event => {
    event.preventDefault()
    login(name)
  }

  return (
      <div>
        <form onSubmit={onLoginFormSubmitted}>
          <Form.Control size="lg" type="text" placeholder="What's your name?" onChange={onNameChanged} />
          <br />
          <Button variant="success" type="submit">Start</Button>
        </form>
      </div>
  )
}

export default LoginForm
