import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const LoginForm = ({ login }) => {
  const [ name, setName ] = useState('')
  const [ validated, setValidated ] = useState(false)

  const onNameChanged = event => setName(event.target.value)

  const onLoginFormSubmitted = event => {
    event.preventDefault()

    // make possible HTML form validation messages visible
    setValidated(true)

    if (name.length > 0 && name.length <= 30) {
      login(name)
    }
  }

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={onLoginFormSubmitted}>
        <Form.Control
          size="lg"
          type="text"
          placeholder="What's your name?"
          onChange={onNameChanged}
          required
          maxLength="30"
        />
        {/* show an error message if the user tries to submit an empty input */}
        <Form.Control.Feedback type="invalid">
          Please enter a name
        </Form.Control.Feedback>
        <br />
        <Button variant="info" type="submit">Start</Button>
      </Form>
    </div>
  )
}

export default LoginForm
