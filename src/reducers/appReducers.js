import userReducer from './userReducer'
import translationsReducer from './translationsReducer'

import { combineReducers } from 'redux'

const appReducers = combineReducers({
  user: userReducer,
  translations: translationsReducer
})

export default appReducers