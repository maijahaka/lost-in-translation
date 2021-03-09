import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import PublicRoute from './components/routes/PublicRoute'
import PrivateRoute from './components/routes/PrivateRoute'
import Login from './components/containers/Login'
import Translate from './components/containers/Translate'
import Profile from './components/containers/Profile'
import NotFound from './components/containers/NotFound'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <main>
            <Switch>
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Translate} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="*" component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  )
}

export default App
