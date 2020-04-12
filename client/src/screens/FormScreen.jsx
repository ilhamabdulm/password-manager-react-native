import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
} from 'react-native'
import ActionButton from '../components/ActionButton'

function FormScreen() {
  return (
    <ImageBackground
      source={require('../../assets/form-bg.png')}
      style={styles.imageBackground}
    >
      <View>
        <Text style={styles.titleText}>Manage Account</Text>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>URL</Text>
          <TextInput style={styles.formInput} placeholder="full name" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>Email or Username</Text>
          <TextInput
            style={styles.formInput}
            placeholder="test@mail.com or username"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>Password</Text>
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            placeholder="password"
          />
        </View>
        <ActionButton
          name="Submit"
          action={() => console.log('Submit')}
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
