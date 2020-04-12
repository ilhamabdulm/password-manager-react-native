import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ActionButton from '../components/ActionButton'
import { useDispatch, useSelector } from 'react-redux'

import { userLogout } from '../store/actions/userActions'

function ProfileScreen() {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const { statusLogin, userInfo } = useSelector((state) => state.userReducers)

  useEffect(() => {
    if (!statusLogin) {
      navigate('Login')
    }
  }, [statusLogin])

  const handleLogout = () => {
    dispatch(userLogout())
  }

  return (
    <ImageBackground
      source={require('../../assets/profile-bg.png')}
      style={styles.imageBackground}
    >
      <View>
        <Text style={styles.titleText}>Profile</Text>
        <View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Name: {userInfo.name}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Email: {userInfo.email}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Accounts saved: 3</Text>
          </View>
        </View>
        <ActionButton
          name="Logout"
          action={() => handleLogout()}
          color="#ED5454"
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
  infoBox: {
    borderColor: '#3B89FE',
    borderWidth: 2,
    paddingVertical: 15,
    paddingLeft: 10,
    marginVertical: 10,
  },
  infoText: {
    color: '#3B89FE',
    fontSize: 18,
    fontWeight: '700',
  },
})

export default ProfileScreen
