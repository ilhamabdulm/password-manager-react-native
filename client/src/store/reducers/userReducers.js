import { LOGIN, USER_INFO, LOGOUT } from '../actionTypes'

const initialState = {
  userInfo: {},
  statusLogin: false,
}

function userReducers(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      }
    case USER_INFO:
      return {
        ...state,
        ...action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default userReducers
