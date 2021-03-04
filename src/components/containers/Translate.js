import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import TranslateForm from '../forms/TranslateForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from '../shared/AppHeader'
import TranslateCard from '../translations/TranslateCard'
import { useHistory } from 'react-router-dom'

function Translate() {
  let history = useHistory()
  let sentence = window.localStorage.getItem('currentWord')

  function saveToArray(sentences) {
    if (sentences !== "" && sentences != null) {
      let sentenceArray = JSON.parse(window.localStorage.getItem('sentences')) || [];
      sentenceArray.push(sentences);
      localStorage.setItem('sentences', JSON.stringify(sentenceArray));
      console.log(window.localStorage.getItem('sentences'))
      history.push('/translate')
    }
  }

  function translateSentence(word) {
    window.localStorage.setItem('currentWord', word)
  }

  return (
    <div>
      <AppHeader />
      <Container>
          <Jumbotron>
              <TranslateForm save={saveToArray} translate={translateSentence}/>
          </Jumbotron>
          <Jumbotron>
              <h2>Translation</h2>
              {sentence && <TranslateCard word={sentence} />}
          </Jumbotron>
      </Container>
    </div>
  )
}

export default Translate
