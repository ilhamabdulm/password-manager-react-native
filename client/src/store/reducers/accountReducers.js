import {
  FETCH_ACCOUNT,
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  ACCOUNT_DETAILS,
  CLEAR_DETAILS,
  EDIT_ACCOUNT,
} from '../actionTypes'

const initialState = {
  accountList: [],
  accountData: {},
}

function accountReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return {
        ...state,
        accountList: action.payload.accountList,
      }
    case ACCOUNT_DETAILS:
      return {
        ...state,
        accountData: action.payload.accountData,
      }
    case CLEAR_DETAILS:
      return {
        ...state,
        accountData: action.payload.accountData,
      }
    case DELETE_ACCOUNT:
      return {
        ...state,
        accountList: action.payload.accountList,
        accountData: action.payload.accountData,
      }
    default:
      return state
  }
}

export default accountReducers
