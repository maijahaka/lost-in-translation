import Spinner from 'react-bootstrap/Spinner'
import SignLanguageImages from './SignLanguageImages'
import { useEffect, useState } from 'react'

const TranslatedSignLanguage = ({ sentence }) => {
  const [ imagesLoaded, setImagesLoaded ] = useState(false)

  sentence = sentence.trim().toLowerCase().replaceAll(/[^a-z\s]/g, '')
  let characters = sentence.split('')

  useEffect(() => {
    setImagesLoaded(false)
  }, [sentence])

  useEffect(() => {
    let mounted = true

    const loadImage = char => {
      if (char !== " ") {
        return new Promise((resolve, reject) => {
          const loadImg = new Image()
          loadImg.src = SignLanguageImages[char]
          loadImg.onload = () => resolve(SignLanguageImages[char])
          loadImg.onerror = err => reject(err)
        })
      }
    }

    Promise.all(characters.map(char => loadImage(char)))
      .then(() => {if (mounted) {setImagesLoaded(true)}})
      .catch(err => console.log("Failed to load images", err))

    return (() => { mounted = false })
  })
  
  let signLanguageSigns = characters.map((char, index) => {
    if (char === " ") {
      return <br key={index} />
    }
    return <img height="50" src={SignLanguageImages[char]} alt={char} key={index} />
  })

  return (
    <div>
      <div>{!imagesLoaded && <Spinner animation="border" variant="warning" />}</div>
      <div>{imagesLoaded && signLanguageSigns}</div>
    </div>
  )
}

export default TranslatedSignLanguage