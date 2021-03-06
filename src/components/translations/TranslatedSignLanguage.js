import SignLanguageImages from './SignLanguageImages'

const TranslatedSignLanguage = ({ sentence }) => {
  sentence = sentence.trim().toLowerCase().replaceAll(/[^a-z\s]/g, '')
  let characters = sentence.split('')
  let signLanguageSigns = characters.map((char, index) => {
    if (char === " ") {
      return <br key={index} />
    }
    return <img height="50" src={SignLanguageImages[char]} alt={char} key={index} />
  })

  return (
    <div>{signLanguageSigns}</div>
  )
}

export default TranslatedSignLanguage