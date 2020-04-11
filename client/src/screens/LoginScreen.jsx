import React, { useState } from 'react'
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native'

import LoginBox from '../components/LoginBox'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

function LoginScreen() {
  const [registerForm, setRegister] = useState(false)

  const changeForm = (state) => {
    setRegister(state)
  }

  return (
    <ImageBackground
      source={require('../../assets/login-bg.png')}
      style={styles.imageBackground}
    >
      <View>
        <Text style={styles.title}>Password Manager</Text>
      </View>
      {!registerForm && <LoginBox />}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#fafafa',
    fontWeight: '700',
    marginBottom: 30,
  },
})

export default LoginScreen
