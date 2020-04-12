import { LOGIN, USER_INFO, LOGOUT } from '../actionTypes'
import axios from 'axios'

import { BASE_URL } from '../../config/server'
import { AsyncStorage } from 'react-native'

export const userLogin = (userData) => {
  return (dispatch, getState) => {
    let userInfo
    let token
    axios
      .post(`${BASE_URL}/users/login`, userData)
      .then((response) => {
        token = response.data.token
        userInfo = response.data.user
        return AsyncStorage.setItem('token', token)
      })
      .then(() => {
        console.log('Success stored token')
        dispatch({
          type: LOGIN,
          payload: {
            userInfo,
            statusLogin: true,
          },
        })
      })
      .catch((err) => console.warn(err))
  }
}

export const userLogout = () => {
  return {
    type: LOGOUT,
    payload: {
      userInfo: {},
      statusLogin: false,
    },
  }
}
