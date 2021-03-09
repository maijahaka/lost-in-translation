import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Translations from '../translations/Translations'
import AppHeader from '../shared/AppHeader'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
//import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Profile() {
  const sentences = useSelector(state => state.translations)
  //const [ sentences, setSentences ] = useState(window.localStorage.getItem('sentences'))

  let history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  const handleLogoutClick = () => {
    dispatch({ type: 'CLEAR_TRANSLATIONS' })
    dispatch({ type: 'LOGOUT' })
    //window.localStorage.clear()
    history.push('/')
  }

  const handleClearTranslationsClick = () => {
    dispatch({ type: 'CLEAR_TRANSLATIONS' })
    //window.localStorage.removeItem('sentences')
    //setSentences(null)
  }

  return (
    <div>
      <AppHeader />
      <Container>
        <Jumbotron className="translate-jumbotron">
          <h1>Hello, {user && user}</h1>
          <p>Here are your ten most recent translations listed below.</p>
        </Jumbotron>
        {!sentences && <p>No translations yet</p>}
        {sentences && <Translations />}
        <br />
        {sentences && <Button variant="warning" onClick={handleClearTranslationsClick}>Clear translations</Button>}
        <Button variant="info" onClick={handleLogoutClick}>Logout</Button>
      </Container>
    </div>
  )
}

export default Profile
