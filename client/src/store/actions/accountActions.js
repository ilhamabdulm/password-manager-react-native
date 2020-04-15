import {
  FETCH_ACCOUNT,
  ACCOUNT_DETAILS,
  CLEAR_DETAILS,
  DELETE_ACCOUNT,
} from '../actionTypes'
import axios from 'axios'

import { BASE_URL } from '../../config/server'

export const fetchAccount = (token) => {
  return (dispatch, getState) => {
    axios
      .get(`${BASE_URL}/accounts`, { headers: { token: token } })
      .then((response) => {
        const accountList = response.data
        dispatch({
          type: FETCH_ACCOUNT,
          payload: {
            accountList,
          },
        })
      })
      .catch((err) => console.log(err))
  }
}

export const fetchDetails = (id, token) => {
  return (dispatch, getState) => {
    axios
      .get(`${BASE_URL}/accounts/${id}`, { headers: { token: token } })
      .then((response) => {
        const accountData = response.data
        dispatch({
          type: ACCOUNT_DETAILS,
          payload: {
            accountData,
          },
        })
      })
      .catch((err) => console.log(err))
  }
}

export const clearDetails = () => {
  return {
    type: CLEAR_DETAILS,
    payload: {
      accountData: {},
    },
  }
}

export const removeAccount = (id, token) => {
  return (dispatch, getState) => {
    const accountList = getState().accountReducers.accountList
    axios
      .delete(`${BASE_URL}/accounts/${id}`, { headers: { token } })
      .then((response) => {
        alert('Account has been removed')
        const newList = accountList.filter((acc) => acc._id !== id)
        dispatch({
          type: DELETE_ACCOUNT,
          payload: {
            accountList: newList,
            accountData: {},
          },
        })
      })
      .catch((err) => console.log(err))
  }
}

export const addAccount = (token, inputData) => {
  return (dispatch, getState) => {
    axios
      .post(`${BASE_URL}/accounts`, inputData, { headers: { token } })
      .then((response) => {
        alert('New account added')
        dispatch(fetchAccount(token))
      })
      .catch((err) => console.log(err))
  }
}

export const editAccount = (token, inputData, id) => {
  return (dispatch, getState) => {
    axios
      .put(`${BASE_URL}/accounts/${id}`, inputData, { headers: { token } })
      .then((response) => {
        alert('Account edited')
        dispatch(fetchAccount(token))
        dispatch(fetchDetails(id, token))
      })
      .catch((err) => console.log(err))
  }
}
