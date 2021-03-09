import TranslateCard from './TranslateCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'

function Translations() {
  const translations = useSelector(state => state.translations)
  const translationItems = translations.reverse().map((sentence, index) => <TranslateCard sentence={sentence} key={index} /> )

  return (
    <div>
      {translationItems}
    </div>
  )
}

export default Translations
