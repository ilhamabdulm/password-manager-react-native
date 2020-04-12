import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { AsyncStorage } from 'react-native'

import reducers from './reducers'
import { LOGOUT } from './actionTypes'

const customMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOGOUT:
      await AsyncStorage.removeItem('token')
      next(action)
    default:
      next(action)
      break
  }
}

const middlewares = applyMiddleware(thunk, customMiddleware)

const store = createStore(reducers, middlewares)

export default store
