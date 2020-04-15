import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import ActionButton from './ActionButton'
import { userLogin } from '../store/actions/userActions'

function LoginBox() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { statusLogin } = useSelector((state) => state.userReducers)
  const { navigate } = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (statusLogin) {
      navigate('Home')
    }
  }, [statusLogin])

  const handleLogin = () => {
    const userData = {
      email,
      password,
    }
    if (email.length < 1 || password.length < 1) {
      console.warn('Email or Password must be provided')
    } else {
      dispatch(userLogin(userData))
      setEmail('')
      setPassword('')
    }
  }

  return (
    <View style={styles.loginBox}>
      <Text style={styles.loginText}>Login</Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
        />
        <ActionButton
          name="Submit"
          action={() => handleLogin()}
          color="#69F0AE"
        />

        <TouchableOpacity>
          <Text style={styles.registerText}>Click here to Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginBox: {
    width: 317,
    height: 318,
    backgroundColor: '#fafafa',
    borderRadius: 20,
    borderColor: 'transparent',
    borderWidth: 3,
    overflow: 'hidden',
    shadowColor: 'rgba(250, 250, 250, 0.5)',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 36,
    color: '#3B89FE',
    fontWeight: '600',
    lineHeight: 42,
    marginBottom: 7,
  },
  textInput: {
    backgroundColor: '#3B89FE',
    borderRadius: 20,
    width: 289,
    height: 38,
    marginTop: 14,
    color: '#fafafa',
    paddingHorizontal: 20,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4,
    elevation: 4,
  },
  registerText: {
    color: '#3B89FE',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
})

export default LoginBox
