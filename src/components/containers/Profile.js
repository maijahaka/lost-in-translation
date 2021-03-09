import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from '../shared/AppHeader'
import Translations from '../translations/Translations'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/userActions'
import { clearTranslations } from '../../actions/translationActions'

const Profile = () => {
  const user = useSelector(state => state.user)
  const translations = useSelector(state => state.translations)

  const dispatch = useDispatch()
  let history = useHistory()

  const handleLogoutClick = () => {
    dispatch(clearTranslations())
    dispatch(logout())
    // direct user to the login page after logging out
    history.push('/login')
  }

  const handleClearTranslationsClick = () => {
    dispatch(clearTranslations())
  }

  return (
    <div>
      <AppHeader />
      <Container>
        <Jumbotron className="translate-jumbotron">
          <h1>Hello, {user && user}</h1>
          <p>Here are your ten most recent translations listed below.</p>
        </Jumbotron>
        {!translations && <p>No translations yet</p>}
        {translations && <Translations />}
        <br />
        <div className="profile-page-buttons">
          {translations && <Button variant="warning" onClick={handleClearTranslationsClick}>Clear translations</Button>}
          <Button variant="info" onClick={handleLogoutClick}>Logout</Button>
        </div>
      </Container>
    </div>
  )
}

export default Profile
