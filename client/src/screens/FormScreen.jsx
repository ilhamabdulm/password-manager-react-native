import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  AsyncStorage,
} from 'react-native'
import ActionButton from '../components/ActionButton'
import { useDispatch } from 'react-redux'

import { addAccount } from '../store/actions/accountActions'

function FormScreen({ navigation }) {
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      setPassword('')
      setUrl('')
      setUsername('')
    }
  }, [])

  const handleSubmit = async () => {
    const inputData = {
      url,
      username,
      password,
    }
    const token = await AsyncStorage.getItem('token')
    dispatch(addAccount(token, inputData))
    navigation.navigate('Home')
  }

  return (
    <ImageBackground
      source={require('../../assets/form-bg.png')}
      style={styles.imageBackground}
    >
      <View>
        <Text style={styles.titleText}>Manage Account</Text>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>URL</Text>
          <TextInput
            style={styles.formInput}
            placeholder="url"
            onChangeText={(text) => setUrl(text)}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>Email or Username</Text>
          <TextInput
            style={styles.formInput}
            placeholder="test@mail.com or username"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>Password</Text>
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            placeholder="password"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <ActionButton
          name="Submit"
          action={() => handleSubmit()}
          color="#4BD369"
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    textAlign: 'center',
    color: '#3B89FE',
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 20,
  },
  formGroup: {
    marginHorizontal: 30,
    marginVertical: 14,
  },
  formText: {
    color: '#3B89FE',
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 10,
    marginBottom: 11,
  },
  formInput: {
    backgroundColor: '#3B89FE',
    borderRadius: 20,
    height: 38,
    color: '#fafafa',
    paddingLeft: 20,
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
})

export default FormScreen
