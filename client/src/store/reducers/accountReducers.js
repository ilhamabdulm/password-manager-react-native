import {
  FETCH_ACCOUNT,
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  ACCOUNT_DETAILS,
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
    default:
      return state
  }
}

export default accountReducers
