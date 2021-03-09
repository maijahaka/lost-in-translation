import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const TranslateForm = ({ save, translate }) => {
  const [sentence, setSentence] = useState('')
  const [validated, setValidated] = useState(false)

  const onSentenceChanged = event => setSentence(event.target.value)

  const onTranslateFormSubmitted = event => {
    event.preventDefault()

    if (sentence.length > 0 && sentence.length <= 40) {
      translate(sentence)
      setSentence('')
      // reset HTML form validation messages for the next translation
      setValidated(false)
    } else {
      // make HTML form validation messages visible
      setValidated(true)
    }
  }

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={onTranslateFormSubmitted}>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Word or sentence to translate"
          value={sentence}
          onChange={onSentenceChanged}
          required maxLength="40"
        />
        <Form.Control.Feedback type="invalid">
          Please enter a word or sentence to be translated
        </Form.Control.Feedback>
        <br />
        <Button variant="info" type="submit">Translate</Button>
      </Form>
    </div>
  )
}

export default TranslateForm
