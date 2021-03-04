import SignLanguageImages from './SignLanguageImages'

const TranslatedSignLanguage = ({ sentence }) => {
  sentence = sentence.trim().toLowerCase().replaceAll(/[^a-z\s]/g, '')
  let characters = sentence.split('')
  let signLanguageSigns = characters.map(char => {
    if (char === " ") {
      return <br />
    }
    return <img height="50" src={SignLanguageImages[char]} alt={char} />
  })

  return (
    <div>{signLanguageSigns}</div>
  )
}

export default TranslatedSignLanguage