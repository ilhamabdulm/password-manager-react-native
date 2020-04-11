import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function LoginBox() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.loginBox}>
      <Text style={styles.loginText}>Login</Text>
      <View>
        <TextInput style={styles.textInput} placeholder="email" />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="password"
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigate('Home')}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
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
  submitBtn: {
    backgroundColor: '#69F0AE',
    borderRadius: 20,
    width: 163,
    height: 37,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4,
    elevation: 4,
  },
  submitText: {
    color: '#fafafa',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
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
