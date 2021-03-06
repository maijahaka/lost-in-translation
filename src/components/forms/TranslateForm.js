import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


function TranslateForm({save, translate}) {
  const [word, setWord] = useState('')
  const [validated, setValidated] = useState(false)

  function onWordChanged(e) {
    setWord(e.target.value)
  }

  function onTranslateFormSubmitted(e) {
    e.preventDefault()
    if (word.length > 0 && word.length <= 40) {
      save(word)
      translate(word)
      setValidated(false)
    } else {
      setValidated(true)
    }
  }

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={onTranslateFormSubmitted}>
        <Form.Control size="lg" type="text" placeholder="Word to translate" onChange={onWordChanged} required maxLength="40" />
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
