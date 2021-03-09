import userReducer from './userReducer'
import translationReducer from './translationReducer'

import { combineReducers } from 'redux'

const appReducers = combineReducers({
  user: userReducer,
  translations: translationReducer
})

export default appReducers