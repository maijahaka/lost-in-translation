import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'


function TranslateForm() {
  return (
    <div>
        <Form.Control size="lg" type="text" placeholder="What's your name?" />
        <br />
        <Button variant="success">Translate</Button>
    </div>
  )
}

export default TranslateForm
