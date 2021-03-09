import TranslateCard from './TranslateCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'

function Translations() {
  const translatedWordsArray = useSelector(state => state.translations)
  const translationItems = translatedWordsArray.reverse().map((translation, index) => <TranslateCard word={translation} key={index} /> )
  
  return (
    <div>
      {translationItems}
    </div>
  )
}

export default Translations
