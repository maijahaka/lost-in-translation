import { Route } from 'react-router-dom'
 
const PublicRoute = ({ path, component }) => <Route path={path} component={component} />

export default PublicRoute