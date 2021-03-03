import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import AppHeader from './components/shared/AppHeader'
import Login from './components/containers/Login'
import Translate from './components/containers/Translate'
import Profile from './components/containers/Profile'

function App() {
  return (
    <div>
      <AppHeader />
      <Router>
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/translate" component={Translate} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
