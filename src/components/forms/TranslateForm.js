import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState} from 'react'


function TranslateForm({save, translate}) {

  const [word, setWord] = useState('')

  function onWordChanged(e) {
    setWord(e.target.value)
  }

  function onTranslateFormSubmitted(e) {
    e.preventDefault()
    save(word)
    translate(word)
  }

  return (
    <div>
      <form onSubmit={onTranslateFormSubmitted}>
        <Form.Control size="lg" type="text" placeholder="Word to translate" onChange={onWordChanged} />
        <br />
        <Button variant="success" type="submit">Translate</Button>
      </form>
    </div>
  )
}

export default TranslateForm
