import TranslateCard from './TranslateCard'
import 'bootstrap/dist/css/bootstrap.min.css'


function Translations({ sentences }) {
  const translatedWordsArray = JSON.parse(sentences)
  const translationItems = translatedWordsArray.reverse().map((translation, index) => <TranslateCard word={translation} key={index} /> )
  
  return (
    <div>
      {translationItems}
    </div>
  )
}

export default Translations
