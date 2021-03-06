import TranslateCard from './TranslateCard'
import 'bootstrap/dist/css/bootstrap.min.css'


function Translations({ sentences }) {
  let translatedWordsArray = []
  if (sentences) {
    translatedWordsArray = JSON.parse(sentences)
  }

  const translationItems = translatedWordsArray.reverse().map((translation, index) => <TranslateCard word={translation} key={index} /> )
  
  return (
    <div>
      {translationItems}
    </div>
  )
}

export default Translations
