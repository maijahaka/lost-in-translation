import Spinner from 'react-bootstrap/Spinner'
import SIGN_LANGUAGE_IMAGES from './signLanguageImages'
import { useEffect, useState } from 'react'

const TranslatedSignLanguage = ({ sentence }) => {
  // record if all sign language images needed have been fetched from the server
  const [ imagesLoaded, setImagesLoaded ] = useState(false)

  // sign language images are defined for lowercase letters
  sentence = sentence.toLowerCase()

  let containsSpecialCharacters = false
  const specialCharacters = /[^a-z\s]/g

  if (specialCharacters.test(sentence)) {
    containsSpecialCharacters = true

    // only letters a-z are included in the sign language images used
    sentence = sentence.trim().replaceAll(specialCharacters, '')
  }

  let characters = sentence.split('')

  // reset the state of fetching images from the server when a new translation is requested
  useEffect(() => {
    setImagesLoaded(false)
  }, [sentence])

  useEffect(() => {
    let mounted = true

    const loadImage = char => {
      if (char !== ' ') {
        return new Promise((resolve, reject) => {
          const loadImg = new Image()
          loadImg.src = SIGN_LANGUAGE_IMAGES[char]
          loadImg.onload = () => resolve(SIGN_LANGUAGE_IMAGES[char])
          loadImg.onerror = err => reject(err)
        })
      }
    }

    // wait until all images needed are fetched from the server and show them at once
    Promise.all(characters.map(char => loadImage(char)))
      .then(() => {
        if (mounted) {
          setImagesLoaded(true)
        }
      })
      .catch(err => console.log('Failed to load images', err))

    // cleanup function to avoid memory leaks if images are still being loaded when component is unmounted
    return (() => { mounted = false })
  })

  let signLanguageSigns = characters.map((char, index) => {
    if (char === ' ') {
      // show each word on a new line
      return <br key={index} />
    }
    // get the corresponding sign language image for each character
    return <img height="50" src={SIGN_LANGUAGE_IMAGES[char]} alt={char} key={index} />
  })

  return (
    <div>
      {/* show a loading animation until all images have been loaded */}
      <div>{!imagesLoaded && <Spinner animation="border" variant="warning" />}</div>
      <div>{imagesLoaded && signLanguageSigns}</div>
      {containsSpecialCharacters &&
        <div className="mt-2 text-danger">
          Please note: Characters that are not part of the English alphabet (a-z) are not included in the translation
        </div>
      }
    </div>
  )
}

export default TranslatedSignLanguage