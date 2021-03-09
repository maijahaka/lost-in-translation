import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import TranslateForm from '../forms/TranslateForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from '../shared/AppHeader'
import TranslateCard from '../translations/TranslateCard'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { translate } from '../../actions/translationsActions'

function Translate() {
  const [ sentence, setSentence ] = useState('')
  const dispatch = useDispatch()

  function saveToArray(sentences) {
    if (sentences !== "" && sentences != null) {
      dispatch(translate(sentences))
    }
  }

  function translateSentence(word) {
    setSentence(word)
  }

  return (
    <div>
      <AppHeader />
      <Container>
          <Jumbotron className="translate-jumbotron">
              <TranslateForm save={saveToArray} translate={translateSentence}/>
          </Jumbotron>
          {sentence && <Jumbotron className="translated-item">
              <h2>Translation</h2>
              <TranslateCard word={sentence} />
          </Jumbotron>}
      </Container>
    </div>
  )
}

export default Translate
