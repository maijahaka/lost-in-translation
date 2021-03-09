import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ path, component }) => {
  if (!useSelector(state => state.user)) {
    return <Redirect to='/login' />
  }

  return <Route path={path} component={component} />
}

export default PrivateRoute