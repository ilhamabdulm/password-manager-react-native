import { combineReducers } from 'redux'
import userReducers from './userReducers'
import accountReducers from './accountReducers'

export default combineReducers({
  userReducers,
  accountReducers,
})
