import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from '../shared/AppHeader'
import TranslateForm from '../forms/TranslateForm'
import TranslateCard from '../translations/TranslateCard'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTranslation } from '../../actions/translationActions'

const Translate = () => {
  const [ sentence, setSentence ] = useState('')

  const dispatch = useDispatch()

  const handleTranslate = sentenceToTranslate => {
    setSentence(sentenceToTranslate)
    dispatch(saveTranslation(sentenceToTranslate))
  }

  return (
    <div>
      <AppHeader />
      <Container>
        <Jumbotron className="translate-jumbotron">
          <TranslateForm translate={handleTranslate} />
        </Jumbotron>
        {/* show the translated sentence once a translation has been made */}
        {sentence &&
          <Jumbotron className="translated-item">
            <h2>Translation</h2>
            <TranslateCard sentence={sentence} />
          </Jumbotron>
        }
      </Container>
    </div>
  )
}

export default Translate
