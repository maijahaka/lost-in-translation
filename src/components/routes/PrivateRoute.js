import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ path, component }) => {
  if (!window.localStorage.getItem('user')) {
    return <Redirect to="/login" />
  }

  return <Route path={path} component={component} />
}

export default PrivateRoute